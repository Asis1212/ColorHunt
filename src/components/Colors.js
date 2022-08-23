import React from 'react';
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import Box from './Box';

const Colors = (props) => {
  let listColors = props.list.slice();
  if(props.clickedButton === 3) {
    listColors = props.list;
  }
  else if(props.clickedButton === 2) {
    listColors.sort((a,b) => {
      return b.upvotesCount - a.upvotesCount;
    });
  } else if(props.clickedButton === 1) {
    listColors.sort((a,b) => {
      return b.date - a.date;
    });
  }

  return (
    <ContainerPage>
        {listColors.map(item => (
            <Box key={item.id} item={item}/>
        ))}
    </ContainerPage>
  )
}

export default Colors;

const ContainerPage = styled.div`
    grid-column: 2/11;
    margin-top: 1rem ;
    margin-left: 2rem;
    background-color: #fff;

    display: flex;
    justify-content: start;
    align-items: center;
    flex-wrap: wrap;

    @media only screen and (max-width: 715px) {
        margin-left: -1rem;
    }
    @media only screen and (max-width: 660px) {
        justify-content: center;
        margin-right: 1rem;
    }
`;