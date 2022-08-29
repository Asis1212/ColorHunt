import React,{useContext} from 'react';
import styled from "styled-components";

import BoxColor from './BoxColor';
import { ColorsListContext } from '../context/colors-context';


const Colors = () => {
  const {arrayOfColors} = useContext(ColorsListContext);

  return (
    <ContainerPage>
        {arrayOfColors.map((item, index) => (
            <BoxColor key={item.id} item={item} index={index}/>
        ))}
    </ContainerPage>
  )
}

export default Colors;

const ContainerPage = styled.div`
    width: 100%;
    margin-left: 2.5rem;
    padding-bottom: 2rem;
    background-color: #fff;

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(250px, 1fr);
    column-gap: 2rem; 
    row-gap: 1rem;

    @media only screen and (max-width: 1100px) {
      grid-template-columns: repeat(3, 1fr);
    } 
    @media only screen and (max-width: 850px) {
      grid-template-columns: repeat(2, 1fr);
    } 

    @media only screen and (max-width: 715px) {
      margin-left: 0;
      padding-bottom: 5rem;
      justify-items: center;
    } 
`;