import React from "react";
//
export default props => {
  const handleChooseMonthlyDonate = amount => {
    window.ee.emit("SHOULD_CHOOSE_MONTHLY_AMOUNT", amount);
  };

  return (
    <section className="section">
      <div>
        <button
          className="button is-medium is-fullwidth"
          onClick={() => {
            handleChooseMonthlyDonate(200);
          }}
        >
          每月資助$200
        </button>
        <button
          className="button is-medium is-fullwidth"
          onClick={() => {
            handleChooseMonthlyDonate(400);
          }}
        >
          每月資助$400
        </button>
        <button
          className="button is-medium is-fullwidth"
          onClick={() => {
            handleChooseMonthlyDonate(600);
          }}
        >
          每月資助$600
        </button>
      </div>
    </section>
  );
};
