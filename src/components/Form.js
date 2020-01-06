import React, { useReducer } from "react";
import styled from "styled-components";
//
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import { DateSingleInput } from "@datepicker-react/styled";

const initialState = {
  date: null,
  showDatepicker: false
};

function reducer(state, action) {
  switch (action.type) {
    case "focusChange":
      return { ...state, showDatepicker: action.payload };
    case "dateChange":
      return action.payload;
    default:
      throw new Error();
  }
}

const FormField = styled.div`
  > label {
    display: block;
    text-align: left;
    margin-bottom: 13px;
    margin-top: 20px;
    font-size: 14px;
    font-weight: 200;
  }
`;

function Form() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => {
    console.log(data);
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormField>
          <label>姓氏 Last name</label>
          <input className="input" type="text" placeholder="姓氏 Last name" />
        </FormField>
        <FormField>
          <label>名字 First name</label>
          <input className="input" type="text" placeholder="名字 First name" />
        </FormField>
        <FormField>
          <label>電郵地址 Email address</label>
          <input
            className="input"
            type="email"
            placeholder="電郵地址 Email address"
          />
        </FormField>
        <FormField>
          <label>聯絡電話 Mobile</label>
          <InputMask
            className="input"
            placeholder="聯絡電話 Mobile"
            mask="+852 9999-9999"
            maskChar={null}
          />
        </FormField>
        <FormField>
          <label>出生日期 Birthday</label>
          <DateSingleInput
            onDateChange={data =>
              dispatch({ type: "dateChange", payload: data })
            }
            onFocusChange={focusedInput =>
              dispatch({ type: "focusChange", payload: focusedInput })
            }
            date={state.date} // Date or null
            showDatepicker={state.showDatepicker} // Boolean
          />
        </FormField>
        <FormField>
          <label>信用卡號碼 Card number</label>
          <input name="example" ref={register} />
          <input name="exampleRequired" ref={register({ required: true })} />
          {errors.exampleRequired && <span>This field is required</span>}
        </FormField>

        <input type="submit" />
      </form>
    </div>
  );
}

export default Form;
