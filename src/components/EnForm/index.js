import React, { useState, useEffect } from "react";
import cx from "classnames";
import { useFormik } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import * as ccvalidate from "cc-validate";
import {
  resolveEnPageStatus,
  resolveInitFormValues,
  formatCreditCardNumber
} from "./formHelpers";

import "./index.scss";

import DonateAmountChooser from "./DonateAmountChooser/DonateAmountChooser";
import ExternalLink from "../ExternalLink";
import {
  FORMIK_KEY_TO_EN_KEY,
  RECURRING_PRICES,
  ONETIME_PRICES,
  CURRENCY,
  SUGGESTED_AMOUNT
} from "./config";

let initialValues,
  extraInfo = {};
let errors = [];

const mainShare = event => {
  event.preventDefault();

  const fbShare = () => {
    var baseURL = "https://www.facebook.com/sharer/sharer.php";
    var u =
      "https://cloud.greenhk.greenpeace.org/petition-plastics-plastic_community?utm_campaign=2020-plastic_community&utm_source=facebook&utm_medium=social&utm_content=thankyou_page";
    var t = (window.innerHeight - 436) / 2;
    var l = (window.innerWidth - 626) / 2;
    window.open(
      baseURL + "?u=" + encodeURIComponent(u),
      "_blank",
      "width=626,height=436,top=" + t + ",left=" + l
    );
  };
  // WEB SHARE API
  if (navigator.share) {
    // we can use web share!
    navigator
      .share({
        title: "",
        text:
          "綠色和平正展開籌款活動： 號召熱心市民捐助支持全城走塑計畫，與我們一起在2020年，與學校合辦走塑學堂、尋找走塑店鋪活動，遊說全港1,000間店鋪加入走塑行列 👉 ",
        url: "https://act.gp/2S2TtH9"
      })
      .then(() => console.log("Successfully shared"))
      .catch(error => console.log("Error sharing:", error));
  } else {
    // provide a fallback here
    fbShare();
  }
};

const redirectToMC = (donateAmount, donateIntrvl) => {
  window.location.replace(
    "https://supporter.ea.greenpeace.org/hk/s/donate?language=zh_HK&donate_amt=" +
      (donateIntrvl === "recurring" ? "m" : "s") +
      ":" +
      donateAmount
  );
};

export default props => {
  const [hasRendered, setHasRendered] = useState(false);
  useEffect(() => setHasRendered(true), [hasRendered]);
  // resolve the initial form values
  if (!hasRendered) {
    [initialValues, extraInfo] = resolveInitFormValues();
  }
  const springConfig = {
    type: "spring",
    stiffness: 300,
    damping: 200,
    duration: 0.2
  };
  const motionStep = {
    show: {
      opacity: 1,
      x: 0
    },
    hidden: {
      opacity: 0,
      x: "100%"
    }
  };
  // resolve which page should goes to
  // let pageStatus = "SUCC"; // preview of SUCC page
  let pageStatus = resolveEnPageStatus();
  let pageNo;
  if (pageStatus === "SUCC") {
    pageNo = 3;
  } else if (pageStatus === "ERROR") {
    pageNo = 2;
  } else if (extraInfo.useUrlAmount && extraInfo.useUrlIntrvl) {
    pageNo = 2;
  } else {
    pageNo = 1;
  }
  const [stepNo, setStepNo] = useState(pageNo);
  const [donateAmount, setDonateAmount] = useState(
    initialValues["transaction_donationAmt"]
  );
  const [donateIntrvl, setDonateIntrvl] = useState(
    initialValues["recurring_payment_sf"] === "Y" ? "recurring" : "onetime"
  );
  const [disableButton, setDisableButton] = useState(false);
  // receive global events to change amounts

  useEffect(() => {
    window.ee.on("SHOULD_CHOOSE_MONTHLY_AMOUNT", amount => {
      setDonateAmount(amount);
      setDonateIntrvl("recurring");
      setStepNo(2);
    });
  }, []);

  // read in form errors from DOM
  if (!hasRendered) {
    for (let el of document.querySelectorAll(".en__error")) {
      errors.push(el.textContent.trim());
    }
  }
  const [globalErrors, setGlobalErrors] = useState(errors);
  const [cctype, setCctype] = useState("Visa");
  // prepare form validations
  const errorMessages = {
    required: "必填欄位 This is required",
    invalid: "格式錯誤 Invalid Format",
    cardType: "僅支援 Visa, MasterCard 或 American Express"
  };
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: Yup.object({
      transaction_donationAmt: Yup.string().required(errorMessages.required),
      supporter_firstName: Yup.string().required(errorMessages.required),
      supporter_lastName: Yup.string().required(errorMessages.required),
      supporter_emailAddress: Yup.string()
        .email(errorMessages.invalid)
        .required(errorMessages.required),
      supporter_phoneNumber: Yup.string()
        .matches(/[\d -()]{8,}/, errorMessages.invalid)
        .required(errorMessages.required),
      supporter_dateOfBirth: Yup.string()
        .matches(/\d{4}[/-]\d{1,2}[/-]\d{1,2}/, errorMessages.invalid)
        .required(errorMessages.required),
      transaction_ccnumber: Yup.string()
        .test("ccnumber", errorMessages.invalid, v => {
          let r = ccvalidate.isValid(v);
          return r.isValid;
        })
        .test("ccnumber", errorMessages.cardType, v => {
          let r = ccvalidate.isValid(v);
          setCctype(r.cardType);
          return (
            ["Visa", "MasterCard", "American Express"].indexOf(r.cardType) >= 0
          );
        })
        .required(errorMessages.required),
      transaction_ccexpire: Yup.string()
        .matches(/\d{2}\/\d{2}/, `${errorMessages.invalid} mm/yy`)
        .required(errorMessages.invalid),
      transaction_ccvv: Yup.string()
        .matches(/\d{3,4}/, errorMessages.invalid)
        .required(errorMessages.required)
    }),
    onSubmit: values => {
      // update final values into original en form
      if (Object.keys(formik.errors).length > 0) {
        throw new Error("There are still errors in formik");
      }

      // update the credit card type
      let r = ccvalidate.isValid(formik.values["transaction_ccnumber"]);
      formik.values["transaction_paymenttype"] = r.cardType;

      // update all the collect values into legacy form
      for (let formikKey in FORMIK_KEY_TO_EN_KEY) {
        let el = document.querySelector(
          `[name="${FORMIK_KEY_TO_EN_KEY[formikKey]}"]`
        );
        if (el) {
          if (formikKey === "transaction_donationAmt") {
            el.value = donateAmount;
          } else if (formikKey === "recurring_payment_sf") {
            el.value = donateIntrvl === "recurring" ? "Y" : "N";
          }
          //
          else if (formikKey === "fr_rg_frequency") {
            el.value = donateIntrvl === "recurring" ? "12" : "0";
          } else if (formikKey === "transaction_ccnumber") {
            el.value = formik.values[formikKey].replace(/\s+/g, "");
          } else if (formikKey === "send_me_email_hk") {
            el.checked = formik.values[formikKey];
          } else if (formikKey === "send_me_email_tw") {
            el.checked = false;
          } else if (formikKey === "supporter_dateOfBirth") {
            // change date from yyyy-mm-dd to mm/dd/yyyy
            let tokens = formik.values[formikKey].split("-");
            if (tokens.length === 3) {
              let v = `${tokens[1]}/${tokens[2]}/${tokens[0]}`;
              el.value = v;
            } else {
              console.error(
                "Cannot convert to mm/dd/yyyy from date ${formik.values[formikKey]}"
              );
            }
          } else {
            el.value = formik.values[formikKey];
          }
        } else {
          throw new Error(
            "Cannot find the input element with name:" +
              FORMIK_KEY_TO_EN_KEY[formikKey]
          );
        }
      }
      // trigger the form submit
      document.querySelector("form.en__component").submit();
    }
  });
  return (
    <>
      {stepNo === 1 && (
        <motion.div
          initial="hidden"
          animate="show"
          exist="hidden"
          variants={motionStep}
          transition={springConfig}
        >
          <div className="step step-1">
            <DonateAmountChooser
              currency={CURRENCY}
              predefinedAmounts={{
                recurring: RECURRING_PRICES,
                onetime: ONETIME_PRICES
              }}
              amount={donateAmount}
              interval={donateIntrvl}
              suggested_amount={SUGGESTED_AMOUNT}
              onChange={({ interval, amount }) => {
                amount < SUGGESTED_AMOUNT
                  ? setDisableButton(true)
                  : setDisableButton(false);
                setDonateIntrvl(interval);
                setDonateAmount(amount);
              }}
            />
            {disableButton && (
              <div className="help">
                為維持最低行政支出，最低每月捐款金額為 HKD {SUGGESTED_AMOUNT}
              </div>
            )}
            <button
              className="button enform__button"
              disabled={disableButton}
              onClick={() => {
                // setStepNo(2);
                redirectToMC(donateAmount, donateIntrvl);
              }}
            >
              {props.isMobile ? "下一步 NEXT" : "立即捐助 DONATE NOW"}
            </button>
          </div>
        </motion.div>
      )}

      {stepNo === 2 && (
        <motion.div
          initial="hidden"
          animate="show"
          exist="hidden"
          variants={motionStep}
          transition={springConfig}
        >
          <div
            className={cx("step", "step-2", {
              "overlay--loading": formik.isSubmitting
            })}
          >
            <form onSubmit={formik.handleSubmit}>
              <div className="donate-amount-part">
                <div className="main-text">
                  {donateIntrvl === "recurring"
                    ? "每月捐款 Monthly"
                    : "單次捐款 One-time"}{" "}
                  <br />
                  <span className="donate-amount">
                    {CURRENCY}
                    <span className="amount">
                      {parseInt(donateAmount, 10).toLocaleString()}
                    </span>
                  </span>
                </div>
                <div
                  className="go-back-step1"
                  onClick={() => {
                    setStepNo(1);
                  }}
                >
                  更改金額 Edit
                </div>
              </div>

              <div className="form-part">
                <hr />
                <div className="step-explain">
                  <div>捐款人資料 Donor Details</div>
                </div>

                {errors.length > 0 && (
                  <div className="global-error help is-danger">
                    <ul>
                      {errors.map((s, idx) => {
                        return <li key={idx}>{s}</li>;
                      })}
                    </ul>
                  </div>
                )}

                <div className="is-flex-horizontal">
                  <div className="field">
                    <label className="label">姓氏 Last Name</label>
                    <div className="control">
                      <input
                        id="supporter_lastName"
                        name="supporter_lastName"
                        className={cx("input", {
                          "is-danger":
                            formik.errors["supporter_lastName"] &&
                            formik.touched["supporter_lastName"]
                        })}
                        type="text"
                        placeholder="姓氏 Last Name"
                        {...formik.getFieldProps("supporter_lastName")}
                        value={formik.values["supporter_lastName"]}
                      />
                    </div>
                    {formik.errors["supporter_lastName"] &&
                      formik.touched["supporter_lastName"] && (
                        <div className="help is-danger">
                          {formik.errors["supporter_lastName"]}
                        </div>
                      )}
                  </div>

                  <div className="field">
                    <label className="label">名字 First Name</label>
                    <div className="control">
                      <input
                        name="supporter_firstName"
                        className={cx("input", {
                          "is-danger":
                            formik.errors["supporter_firstName"] &&
                            formik.touched["supporter_firstName"]
                        })}
                        type="text"
                        placeholder="名字 First Name"
                        {...formik.getFieldProps("supporter_firstName")}
                      />
                    </div>
                    {formik.errors["supporter_firstName"] &&
                      formik.touched["supporter_firstName"] && (
                        <div className="help is-danger">
                          {formik.errors["supporter_firstName"]}
                        </div>
                      )}
                  </div>
                </div>

                <div className="field">
                  <label className="label">電郵地址 Email Address</label>
                  <div className="control">
                    <input
                      name="supporter_emailAddress"
                      className={cx("input", {
                        "is-danger":
                          formik.errors["supporter_emailAddress"] &&
                          formik.touched["supporter_emailAddress"]
                      })}
                      type="email"
                      placeholder="電郵地址 Email Address"
                      {...formik.getFieldProps("supporter_emailAddress")}
                    />
                  </div>
                  {formik.errors["supporter_emailAddress"] &&
                    formik.touched["supporter_emailAddress"] && (
                      <div className="help is-danger">
                        {formik.errors["supporter_emailAddress"]}
                      </div>
                    )}
                </div>

                <div className="field">
                  <label className="label">聯絡電話 Mobile Number</label>
                  <div className="control">
                    <input
                      name="supporter_phoneNumber"
                      className={cx("input", {
                        "is-danger":
                          formik.errors["supporter_phoneNumber"] &&
                          formik.touched["supporter_phoneNumber"]
                      })}
                      type="telephone"
                      placeholder="聯絡電話 Mobile Number"
                      {...formik.getFieldProps("supporter_phoneNumber")}
                    />
                  </div>
                  {formik.errors["supporter_phoneNumber"] &&
                    formik.touched["supporter_phoneNumber"] && (
                      <div className="help is-danger">
                        {formik.errors["supporter_phoneNumber"]}
                      </div>
                    )}
                </div>

                <div className="field">
                  <label className="label">出生日期 Birthday</label>
                  <div className="control">
                    <input
                      name="supporter_dateOfBirth"
                      className={cx("input", {
                        "is-danger":
                          formik.errors["supporter_dateOfBirth"] &&
                          formik.touched["supporter_dateOfBirth"]
                      })}
                      type="date"
                      placeholder="出生日期 Birthday"
                      {...formik.getFieldProps("supporter_dateOfBirth")}
                    />
                  </div>
                  {formik.errors["supporter_dateOfBirth"] &&
                    formik.touched["supporter_dateOfBirth"] && (
                      <div className="help is-danger">
                        {formik.errors["supporter_dateOfBirth"]}
                      </div>
                    )}
                </div>

                <div className="step-explain">
                  <div>信用卡資料 Credit Card Details</div>
                </div>

                <div className="field credit-field">
                  <label className="label">信用卡號碼 Credit Card Number</label>
                  <div className="control has-icons-right">
                    <input
                      name="transaction_ccnumber"
                      className={cx("input", {
                        "is-danger":
                          formik.errors["transaction_ccnumber"] &&
                          formik.touched["transaction_ccnumber"]
                      })}
                      type="text"
                      placeholder="5555 5555 5555 4444"
                      {...formik.getFieldProps("transaction_ccnumber")}
                      onChange={e => {
                        let raw = formatCreditCardNumber(e.target.value);
                        formik.setFieldValue("transaction_ccnumber", raw);
                      }}
                    />
                    <span className="icon is-small is-right">
                      {cctype === "Visa" && <i className="fab fa-cc-visa"></i>}
                      {cctype === "MasterCard" && (
                        <i className="fab fa-cc-mastercard"></i>
                      )}
                      {cctype === "American Express" && (
                        <i className="fab fa-cc-amex"></i>
                      )}
                    </span>
                  </div>
                  {formik.errors["transaction_ccnumber"] &&
                    formik.touched["transaction_ccnumber"] && (
                      <div className="help is-danger">
                        {formik.errors["transaction_ccnumber"]}
                      </div>
                    )}
                </div>

                <div className="is-flex-horizontal">
                  <div className="field">
                    <label className="label">有效期限 Expiry Date</label>
                    <div className="control">
                      <input
                        name="transaction_ccexpire"
                        className={cx("input", {
                          "is-danger":
                            formik.errors["transaction_ccexpire"] &&
                            formik.touched["transaction_ccexpire"]
                        })}
                        type="text"
                        placeholder="MM/YY"
                        {...formik.getFieldProps("transaction_ccexpire")}
                        onChange={e => {
                          let raw = e.target.value
                            .replace(/\s+/g, "")
                            .replace(/[^\d]+/g, "")
                            .slice(0, 4);
                          formik.setFieldValue(
                            "transaction_ccexpire",
                            (raw.match(/.{1,2}/g) || []).join("/")
                          );
                        }}
                      />
                    </div>
                    {formik.errors["transaction_ccexpire"] &&
                      formik.touched["transaction_ccexpire"] && (
                        <div className="help is-danger">
                          {formik.errors["transaction_ccexpire"]}
                        </div>
                      )}
                  </div>

                  <div className="field">
                    <label className="label">驗證碼 CVV</label>
                    <div className="control">
                      <input
                        name="transaction_ccvv"
                        className={cx("input", {
                          "is-danger":
                            formik.errors["transaction_ccvv"] &&
                            formik.touched["transaction_ccvv"]
                        })}
                        type="number"
                        placeholder="123"
                        {...formik.getFieldProps("transaction_ccvv")}
                        onChange={e => {
                          formik.setFieldValue(
                            "transaction_ccvv",
                            e.target.value.slice(0, 4)
                          );
                        }}
                      />
                    </div>
                    {formik.errors["transaction_ccvv"] &&
                      formik.touched["transaction_ccvv"] && (
                        <div className="help is-danger">
                          {formik.errors["transaction_ccvv"]}
                        </div>
                      )}
                  </div>
                </div>

                <div className="field send-me-email-part">
                  <input
                    type="checkbox"
                    id="send_me_email_hk"
                    {...formik.getFieldProps("send_me_email_hk")}
                    checked={formik.values["send_me_email_hk"]}
                  />
                  <label className="checkbox" htmlFor="send_me_email_hk">
                    我願意收到綠色和平發送的通訊，讓我能掌握環保工作的最新脈動！我同意綠色和平按照個人資料政策與我聯絡，包括提供環保工作資訊及捐款呼籲等。
                    <br />
                    Please send me important updates from Greenpeace.
                  </label>
                </div>
              </div>
              {errors.length > 0 && (
                <div className="global-error help is-danger">
                  <ul>
                    {errors.map((s, idx) => {
                      return <li key={idx}>{s}</li>;
                    })}
                  </ul>
                </div>
              )}

              <button
                type="submit"
                className={cx("button", "enform__button", {
                  "is-loading": formik.isSubmitting
                })}
              >
                立即捐助 DONATE NOW
              </button>
            </form>
          </div>
        </motion.div>
      )}

      {stepNo === 3 && (
        <motion.div
          initial="hidden"
          animate="show"
          exist="hidden"
          variants={motionStep}
          transition={springConfig}
        >
          <div className="step step-3">
            <div className="main-text">
              <p>
                您的{" "}
                <strong>
                  {window.thankyouPageIsRecurring === "Y" ? "每月" : "單次"}{" "}
                  {window.pageJson.currency}
                  {parseInt(window.pageJson.amount, 10).toLocaleString()}
                </strong>{" "}
                捐款已成功處理！我們已發送電子郵件提供進一步資料。
                <br />
                Your{" "}
                <strong>
                  {window.thankyouPageIsRecurring === "Y"
                    ? "Monthly"
                    : "One time"}{" "}
                  {window.pageJson.currency}
                  {parseInt(window.pageJson.amount, 10).toLocaleString()}
                </strong>{" "}
                donation has been processed.
              </p>
              <hr />
              <p>
                我們承諾謹慎善用一分一毫，確保將您的心意，轉化為改變環境的最大力量。群眾力量是促成改變的關鍵，請幫助分享此網頁給您的親友好友，讓我們在全年得到660位每月捐助者，合力共創走塑社區！
              </p>
              <button
                className="button button--share is-fullwidth"
                onClick={mainShare}
              >
                分享給朋友
              </button>
              <p>
                誠邀您加入Whatsapp群組與一眾熱心支持者，交流日常走塑tips、保護環境心得！
              </p>
              <ExternalLink
                href="https://chat.whatsapp.com/3M10Zp2ymdfH0D22DVU7EV"
                alt="加入 Whatsapp 群組"
              >
                <button className="button button--join is-fullwidth">
                  加入 Whatsapp 群組
                </button>
              </ExternalLink>
              <p>
                如果您有任何查詢，請於辦公時間致電會員服務熱線 (852) 2854 8318
                或電郵至
                <ExternalLink
                  href="emailto:donor.services.hk@greenpeace.org"
                  alt="donor.services.hk@greenpeace.org"
                >
                  donor.services.hk@greenpeace.org
                </ExternalLink>
                。
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};
