import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { useParams, useNavigate } from 'react-router-dom';

import TermColorPage from '../components/TermColorPage';


const ColorPage = (props) => {
    let {id} = useParams();
    const navigate = useNavigate();

    const [listOfColors, setListOfColors] = useState([]);

    let itemColor = props.list.find((item) => {
        return item.id === parseInt(id);
    });
    
    useEffect(() => {
        setTimeout(() => {
            setListOfColors(itemColor.colors);  
        }, 0);
        
    }, [itemColor]);

    const newColor = (colorCode, index) => {
        const newArray = [...listOfColors];
        newArray[index] = colorCode;
        setListOfColors(newArray);
        itemColor.colors = [...newArray];
    }


    document.addEventListener('keyup', (event) => {
        
        if (event.code === 'Space') {
            id = parseInt(id) + 1;
            if(props.list.length >= id ) {
                navigate(`../pageColor/${id}`, {replace:true});
            } else {
                navigate(`../`, {replace:true});
            }
        }
    });

        return (
            <Container length={listOfColors.length}>
                {listOfColors.map((colorCode, index) => {
                    return <TermColorPage key={index} color={colorCode} index={index} changeColor={newColor} />
                })}
            </Container>
        )
    }

    export default ColorPage;

    const Container = styled.div`
overflow: hidden;
  display: grid;
  grid-template-rows: calc(100vh - 7rem);
  grid-template-columns: repeat(${props => props.length}, 1fr);

  @media only screen and (max-width: 715px) {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(${props => props.length}, calc(calc(100vh - 7rem) / ${props => props.length}));
    }
`;