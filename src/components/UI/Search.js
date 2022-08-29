import React, {useState, useContext, useEffect} from 'react';
import styled from "styled-components";

import Icon from '../../Icon';
import DropDown from './DropDown';
import { FilterContext } from '../../context/search-content';

const Search = () => {
    const {colorsFilter, setColorsFilter} = useContext(FilterContext)
    const [isInputFocused, setIsInputFocused] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [placeholderText, setPlaceholderText] = useState('');

    useEffect(() => {
        if(colorsFilter.length > 0) {
            setPlaceholderText('Add tags');
        } else {
            setPlaceholderText('Search palettes');
        }
    }, [colorsFilter]);


    const onFocus = () => {
        setIsInputFocused(true);
    }
    const setFocusedToFalse = () => {
        setIsInputFocused(false);
    }

    const onBlur = () => {
        document.addEventListener('click', (e) => {
            if(!e.target.className.includes('windowOfFilters') &&
               !e.target.className.includes('inputFilters')) {
                setIsInputFocused(false);
            }
        });
    }

    const setInput = (e) => {
        setInputValue(e.target.value);
    }

    const deleteColorsFromFilters = (e) => {
        const updateColorsFilters = [...colorsFilter];
        const index = updateColorsFilters.indexOf(e.target.textContent);
        updateColorsFilters.splice(index, 1);
        setColorsFilter(updateColorsFilters);
    }


    return (
        <Form>
            <InputsDiv>
                {colorsFilter.length === 0 && (
                <IconStyle>
                    <Icon color='#444' size={18} icon='magnifying-glass' />
                </IconStyle>
                )}
                {colorsFilter.map((color) => {
                    return (
                        <Color onClick={deleteColorsFromFilters} key={color} circleColor={color}>{color}</Color>
                      )
                })}
                <Input placeholder={placeholderText} colorsFilter={colorsFilter} className='inputFilters' onChange={setInput} onFocus={onFocus} onBlur={onBlur}/>
            </InputsDiv>
            {isInputFocused && (
                <div className='windowColorsFilter'>
                <DropDown inputValue={inputValue} setFocusedToFalse={setFocusedToFalse}/>
                </div>
            )}
        </Form>
    )
}

export default Search;


const Form = styled.form`
    position: relative;
    width:100%;
    
    display: flex;
    flex-direction: column;
    justify-content: center;

    & .windowColorsFilter {
        animation: moveInBottom .4s ease-out;
    }

    @keyframes moveInBottom {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
        transition: opacity linear;
    }
}
`;

const InputsDiv = styled.div`
    width: 100%;
    border: 1px solid rgba(0,0,0,.1);
    border-radius: 100px;
    
    display:flex;
    justify-content: end;
    align-items: center;

    @media only screen and (max-width: 715px) {
        padding-left: 0;
        justify-content: end;
    }
`;

const Input = styled.input.attrs({
    type: 'text'
})`
    color: #777;
    background-color: #fff;
    border: none;
    border-radius: 100px;
    font-size: 1rem;
    padding: ${props => props.colorsFilter.length ===  0 ? '.7rem 2.1rem' : '.7rem .3rem'};
    width: 100%;
    transition: all .2s;
    box-sizing: border-box;
    z-index: 1;

    &:focus {
        z-index: 20;
        padding: ${props => props.colorsFilter.length ===  0 ? '.7rem 1rem' : '.7rem .3rem'};;

        @media only screen and (min-width: 715px) {
            outline: none;
        }
    }
`;

const IconStyle = styled.div`
    margin-right: -2rem;
    z-index: 10;
`;

const Color = styled.div`
  background-color: #EFEFEF;
  margin: 0 3px;
  font-size: 16px;
  cursor: pointer;
  border: 1px solid #ececec;
  border-radius: 40px;
  padding: 0px 14px;
  height: 85%;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 715px) {
        padding: 7px 14px;
  }

  &::before {
    content: "";
    display: inline-block;
    width: 14px;
    height: 14px;
    border-radius: 100%;
    border: ${props => props.circleColor === 'White' ? '1px solid #ececec' : 'none'};
    background-color: ${props => props.circleColor === 'Peach' ? '#ff7567' : props.circleColor};
    margin-right: 6px;
  }

  &::after {
      content: "x";
      margin-left: 8px;
      padding-left: 8px;
      padding-top: 7.5px;
      border-left: 1px solid #e5e5e5;
      height: 100%; 
      display: inline-block;
      box-sizing: border-box; 
      
      @media only screen and (max-width: 715px) {
        padding-top: 0;
      }
  }
`;