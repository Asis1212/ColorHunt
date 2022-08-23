import React, {  useState } from 'react';
import styled from "styled-components";

import HomeColorPart from './HomeColorPart';
import Button from './UI/Button';
import IconTextButton from './UI/IconTextButton';

const Box = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  const calcDate = () => {

    const CurrentDate = new Date();
    const diffTime = Math.abs(CurrentDate - props.item.date);
    const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
    if (diffHours < 24) {
      return diffHours + ' hours';
    }
    const diffDays = Math.floor(diffHours / 24);
    if (diffDays < 7) {
      return diffDays + ' days';
    }
    const diffWeeks = Math.floor(diffDays / 7);
    return diffWeeks + ' weeks';
  }


  const clickHandler = () => {
    if(!isClicked) {
      props.item.upvotesCount++;
    } else {
      props.item.upvotesCount--;
    }
    setIsClicked(prevState => !prevState);
  }

  const context = (
    <IconTextButton 
     text={props.item.upvotesCount}
     icon={'heart-outlined'} 
     isClicked={isClicked}/>
  )

  return (
    <ContainerBox>
      <HomeColorPart colors={props.item.colors} id={props.item.id}/>
      <DetailPart>
        <Button isBox={true} text={context} onClick={clickHandler}/>
        <SpanDetailPart>{calcDate()}</SpanDetailPart>
      </DetailPart>
    </ContainerBox>
  )
}

export default Box;

const ContainerBox = styled.div`
    max-width: 100%;
    width: 19rem;
    height: 24rem;
    margin-left: 2rem;
    margin-top: 1rem;
    border-radius: 10px;

    display: grid;
    grid-template-rows: 80% 20%;

    @media only screen and (max-width: 1415px) {
        width: 17rem;
        height: 22rem;
    }

    @media only screen and (max-width: 950px) {
        width: 15rem;
        height: 20rem;
    }

    @media only screen and (max-width: 805px) {
        width: 13rem;
        height: 17rem;
    }

    @media only screen and (max-width: 715px) {
      width: 19rem;
      height: 24rem;
      
    }
`;

const DetailPart = styled.div`
    grid-row: 2 / 3;
    
    display: flex;
    align-items: center;
    justify-content:space-between;

`;

const SpanDetailPart = styled.span`
    color: #555;
    font-weight: 400;
    font-size: 0.9rem;
`;