import { FORMIK_KEY_TO_EN_KEY, RECURRING_PRICES } from "./config";

/**
 * Resolve the en page status by checking the pageJson
 *
 * @return {string} FRESH | SUCC | ERROR
 */
export const resolveEnPageStatus = () => {
  let status = "FRESH";

  if (window.pageJson.giftProcess) {
    if (window.pageJson.pageNumber === 1) {
      status = "ERROR"; // error page
    } else if (window.pageJson.pageNumber === 2) {
      status = "SUCC"; // succ page
    }
  } else {
    status = "FRESH"; // start page
  }

  return status;
};

export const getUrlParams = () => {
  const { searchParams } = new URL(window.location.href);
  let p = {};
  for (let [k, v] of searchParams.entries()) {
    p[k] = v;
  }
  return p;
};

// prepare form init values
const getInputValueByFormilKey = k => {
  let found = document.querySelector(`[name="${FORMIK_KEY_TO_EN_KEY[k]}"]`);
  return found ? found.value : "";
};
const getCheckboxValueByFormilKey = k => {
  let found = document.querySelector(`[name="${FORMIK_KEY_TO_EN_KEY[k]}"]`);
  return found ? found.checked : "";
};
/**
 * Resolve the initial values for formik
 * @return {object}
 */
export const resolveInitFormValues = () => {
  const pageStatus = resolveEnPageStatus();
  const params = getUrlParams();
  const values = {};
  const extraInfos = {}; // useUrlAmount, useUrlIntrvl

  // accept url params: donate_amount=200&payment_sf=s|m
  // transaction_donationAmt
  values.transaction_donationAmt = parseInt(
    getInputValueByFormilKey("transaction_donationAmt"),
    10
  );
  if (pageStatus === "FRESH" && params.donate_amount) {
    // read from url if its fresh page
    let v = parseInt(params.donate_amount, 10);
    if (v) {
      values.transaction_donationAmt = v;
      extraInfos.useUrlAmount = true;
    }
  }
  if (!values.transaction_donationAmt) {
    // use default value
    values.transaction_donationAmt = RECURRING_PRICES[1];
  }

  // recurring_payment_sf
  values.recurring_payment_sf = getInputValueByFormilKey(
    "recurring_payment_sf"
  );
  if (pageStatus === "FRESH" && params.payment_sf) {
    if (["m", "s"].indexOf(params.payment_sf) > -1) {
      values.recurring_payment_sf = params.payment_sf === "m" ? "Y" : "N";
      extraInfos.useUrlIntrvl = true;
    }
  }
  if (!values.recurring_payment_sf) {
    values.recurring_payment_sf = "Y";
  }

  // transaction_ccnumber
  values.transaction_ccnumber = getInputValueByFormilKey(
    "transaction_ccnumber"
  );
  values.transaction_ccexpire = getInputValueByFormilKey(
    "transaction_ccexpire"
  );
  values.transaction_ccvv = getInputValueByFormilKey("transaction_ccvv");
  if (process.env.NODE_ENV !== "production") {
    values.transaction_ccnumber = "4222222222222220";
    values.transaction_ccexpire = "12/34";
    values.transaction_ccvv = "123";
  }
  values.transaction_ccnumber = formatCreditCardNumber(
    values.transaction_ccnumber
  );

  values.supporter_firstName = getInputValueByFormilKey("supporter_firstName");
  values.supporter_lastName = getInputValueByFormilKey("supporter_lastName");
  values.supporter_emailAddress = getInputValueByFormilKey(
    "supporter_emailAddress"
  );
  values.supporter_phoneNumber = getInputValueByFormilKey(
    "supporter_phoneNumber"
  );
  values.supporter_dateOfBirth = getInputValueByFormilKey(
    "supporter_dateOfBirth"
  );
  // supporter_NOT_TAGGED_6
  values.send_me_email_hk = getCheckboxValueByFormilKey("send_me_email_hk");
  // supporter.questions.7275
  values.send_me_email_tw = getCheckboxValueByFormilKey("send_me_email_tw");
  // supporter.questions.7276
  return [values, extraInfos];
};

/**
 * format creadit card number into XXXX XXXX XXXX XXXX format
 *
 * @params v {string}
 * @return {string}
 */
export const formatCreditCardNumber = v => {
  let raw = v
    .replace(/\s+/g, "")
    .replace(/[^\d]+/g, "")
    .slice(0, 16);
  return (raw.match(/.{1,4}/g) || []).join(" ");
};
