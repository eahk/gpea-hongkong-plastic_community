import React, { useState } from "react";
import cx from "classnames";
//
import "./DonateAmountChooser.scss";

/**
 * This widget displays:
 * 1. Two buttons for the recurring and onetime donation
 * 2. Pre-defined donate amount for user to choose from.
 * 3. An input for user to directly input for.
 *
 * props.currency {string} Just for display
 * props.predefinedAmounts {recurring:[200,400,600], onetime:[500,1000,1500]}
 * props.amount {number|null}
 * props.interval {"recurring"|"onetime"|null}
 * props.onChange {function(interval:string, amount:number)}
 **/

// note the values should be in INT format
export default props => {
  const [isSuggesting, setIsSuggesting] = useState(false);
  const [isManuallyInputing, setIsManuallyInputing] = useState(false);

  // preprocess the amount into string
  const handleSwitchDonateInterval = (type = "recurring") => {
    props.onChange({
      interval: type,
      amount: props.predefinedAmounts[type][1]
    });
  };
  const handleChooseAmount = amount => {
    props.onChange({ interval: props.interval, amount: amount });
    setIsManuallyInputing(false);
  };
  const handleOtherAmountChange = e => {
    props.onChange({
      interval: props.interval,
      amount: parseInt(e.target.value, 10)
    });
    setIsManuallyInputing(true);
  };
  const handleOtherAmountBlur = e => {
    props.amount < props.suggested_amount
      ? setIsSuggesting(true)
      : setIsSuggesting(false);
  };
  // check current value is in predefined
  let isInPredefined = false;
  isInPredefined =
    props.predefinedAmounts[props.interval].indexOf(props.amount) > -1;

  return (
    <div className="donate-amount-chooser">
      <div className="buttons are-small has-addons">
        <button
          className={cx("button recurring", {
            "is-active": props.interval === "recurring"
          })}
          onClick={() => {
            handleSwitchDonateInterval("recurring");
          }}
        >
          每月捐款
          <br />
          Monthly
        </button>
        <button
          className={cx("button onetime", {
            "is-active": props.interval === "onetime"
          })}
          onClick={() => {
            handleSwitchDonateInterval("onetime");
          }}
        >
          單次捐款
          <br />
          One time
        </button>
      </div>

      <div className="step-explain">
        <div>請選擇捐款金額</div>
        <div>Choose an amount to give</div>
      </div>
      <div className="buttons available-amounts">
        {props.predefinedAmounts[props.interval].map((amount, idx) => {
          let isActive = amount === props.amount && !isManuallyInputing;
          return (
            <button
              className={cx("button", { "is-active": isActive })}
              onClick={() => {
                handleChooseAmount(amount);
              }}
              key={idx}
            >
              {isActive && (
                <span className="check">
                  <i className="fas fa-check"></i>
                </span>
              )}
              <span className="currency">{props.currency}</span>
              <span className="amount">{amount}</span>
            </button>
          );
        })}
      </div>
      <div className="other-amount-part">
        <input
          type="number"
          className="input"
          value={
            isInPredefined
              ? isManuallyInputing
                ? props.amount
                : ""
              : props.amount || ""
          }
          placeholder="其他金額 Other amount"
          onChange={handleOtherAmountChange}
          onBlur={handleOtherAmountBlur}
        />
        {isSuggesting && isManuallyInputing && (
          <div className="help is-danger">
            最低捐款金額為：HKD {props.suggested_amount}
          </div>
        )}
      </div>
    </div>
  );
};
