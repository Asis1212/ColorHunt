import React, { useState, useEffect, useContext } from 'react';
import styled from "styled-components";

import ColorsPart from './ColorsPart';
import Button from './UI/Button';
import { ColorsListContext } from '../context/colors-context';

const Box = (props) => {
  const {arrayOfColors, setArrayOfColors,
         likedBoxColors, setLikedBoxColors} = useContext(ColorsListContext);
  const [isClicked, setIsClicked] = useState(likedBoxColors.includes(props.item.id));
  const [periodOfTime, setPeriodOfTime] = useState(null);

  useEffect(() => {
    setPeriodOfTime(calcDate());
  }, [periodOfTime])

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
    const arrayOfColorsToSet = [...arrayOfColors];
    if(!isClicked) {
      arrayOfColorsToSet[props.index].upvotesCount++;
      setLikedBoxColors(prevLikedBoxColors => [...prevLikedBoxColors, props.item.id])
    } else {
      arrayOfColorsToSet[props.index].upvotesCount--;
      let copyArray = [...likedBoxColors];
      const index = copyArray.indexOf(props.item.id);
      copyArray.splice(index, 1);
      setLikedBoxColors([...copyArray]);
    }
    setArrayOfColors(arrayOfColorsToSet);
    setIsClicked(prevState => !prevState);
  }

  return (
    <ContainerBox>
      <ColorsPart colors={props.item.colors} id={props.item.id}/>
      <DetailPart>
        <Button 
         colorBoxButton={true}
         text={props.item.upvotesCount}
         icon={'heart-outlined'}
         isClicked={isClicked}
         onClick={clickHandler} />
        <SpanDetailPart>{periodOfTime}</SpanDetailPart>
      </DetailPart>
    </ContainerBox>
  )
}

export default Box;

const ContainerBox = styled.div`
    min-width: 145px;
    width: 100%;
    border-radius: 10px;
`;

const DetailPart = styled.div`
    margin-top: 1rem;
    
    display: flex;
    align-items: end;
    justify-content:space-between;
`;

const SpanDetailPart = styled.span`
    white-space: nowrap;
    padding-bottom: .3rem;
    color: #555;
    font-weight: 400;
    font-size: 120%;
`;