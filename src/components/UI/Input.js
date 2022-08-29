import React,{useRef} from 'react';
import styled from "styled-components";

const Input = (props) => {
  const colorCode = useRef();

  const changeHandler = () => {
    props.changeFunction(colorCode.current.value);
  }
  const blurHandler = () => {
    props.exit();
  }
  const focusHandler = () => {
    props.focusHandler();
  }

  return (
    <InputElement
      ref={colorCode}
      type={props.type}
      value={props.value}
      onChange={changeHandler}
      onBlur={blurHandler}
      className={props.class === 'color' && 'color'}
      />
  )
}

export default Input;

const InputElement = styled.input`
  &.color {
    border-color: #fff;
    border-radius: 3px;
    width: 5rem;
    height: 3rem;
  }
`;
