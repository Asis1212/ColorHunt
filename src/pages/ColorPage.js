import React, { useEffect, useState, useContext } from 'react';
import styled from "styled-components";
import { useParams, useNavigate } from 'react-router-dom';

import EditColorsPage from '../components/EditColorsPage';
import { ColorsListContext } from '../context/colors-context';


const ColorPage = () => {
    const {arrayOfColors, setArrayOfColors} = useContext(ColorsListContext);

    let {id} = useParams();
    const navigate = useNavigate();

    const [listOfColors, setListOfColors] = useState([]);

    let itemColor = arrayOfColors.find((item) => {
        return item.id === parseInt(id);
    });
    let index = arrayOfColors.indexOf(itemColor);
    
    useEffect(() => {
        setListOfColors(itemColor.colors);  
    }, [itemColor]);

    const newColor = (colorCode, indexColor) => {
        const newArrayOfColors = [...arrayOfColors];
        const colors = [...listOfColors];
        colors[indexColor] = colorCode;
        setListOfColors(colors);
        newArrayOfColors[index].colors = [...colors];
        setArrayOfColors(newArrayOfColors);
    }


    document.addEventListener('keyup', (event) => {
        if (event.code === 'Space') {
            index++;
            if(arrayOfColors.length === index) {
                index = 0;
            }
            id = arrayOfColors[index].id;
            navigate(`../pageColor/${id}`, {replace:true});
        }
    });

        return (
            <Container length={listOfColors.length}>
                {listOfColors.map((colorCode, index) => {
                    return <EditColorsPage key={index} color={colorCode} index={index} changeColor={newColor} />
                })}
            </Container>
        )
    }

    export default ColorPage;

const Container = styled.div`
  height: 95vh;
  border-radius: 5px;
  overflow: hidden;
  display: flex;

  @media only screen and (max-width: 715px) {
        flex-direction: column;
    }
`;