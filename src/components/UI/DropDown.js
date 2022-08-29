import React, {useState, useEffect, useContext} from 'react';
import styled from "styled-components";

import { FilterContext } from '../../context/search-content';

const colorsToSearch = ['Blue', 'Green', 'Red', 'Pink', 'Black', 'Yellow', 'Grey', 'Orange', 'White',
                        'Brown', 'Purple', 'Beige', 'Navy', 'Peach', 'Teal', 'Maroon'];

const DropDown = (props) => {
  const {setColorsFilter} = useContext(FilterContext)
  const [search, setSearch] = useState(colorsToSearch);

  useEffect(() => {
    setSearch(colorsToSearch.filter(color => color.toLowerCase().startsWith(props.inputValue)));
  }, [props.inputValue]);

  const addColorToList = (event) => {
    setColorsFilter(prevColorsFilter => [...prevColorsFilter, event.target.textContent]);
    props.setFocusedToFalse();
  }

  return (
    <Container className='windowOfFilters'>
      <div className='searchContent windowOfFilters'>
        <Title className='windowOfFilters'>Colors</Title>
        <DivOfColors className='windowOfFilters'>
          {search.map((color) => {
            return (
              <Color onClick={addColorToList} key={color} circleColor={color}>{color}</Color>
            )
          })}
        </DivOfColors>
      </div>

    </Container>
  )
}

export default DropDown;

const Container = styled.div`
    border: 1px solid #ECECEC;
    width: 100%;
    padding: 22px 0;
    position: absolute;
    top: 60px;
    border-radius: 0 0 10px 10px;
    background-color: white;
    box-shadow: 0 10px 20px 0 rgb(0 0 0 / 5%);

    & .searchContent {
      padding: 0 22px;
    }
`;

const Title = styled.div`
    font-size: 1rem;
    margin-bottom: 10px;
`;

const DivOfColors = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;

`;

const Color = styled.div`
  margin: 0 0.3rem 0.5rem 0;
  font-size: 12px;
  cursor: pointer;
  border: 1px solid #ececec;
  border-radius: 40px;
  padding: 8px 14px;
  display: flex;
  align-items: center;

  &::before {
    content: " ";
    display: inline-block;
    width: 14px;
    height: 14px;
    border-radius: 100%;
    border: ${props => props.circleColor === 'White' ? '1px solid #ececec' : 'none'};
    background-color: ${props => props.circleColor === 'Peach' ? '#ff7567' : props.circleColor};
    margin-right: 4px;
  }
`;
