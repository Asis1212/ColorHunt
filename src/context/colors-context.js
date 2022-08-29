import React,{useState, useEffect, useContext} from "react";

import colors from '../colors.json';
import { FilterContext } from "./search-content";

export const ColorsListContext = React.createContext({
    arrayOfColors: [],
    setArrayOfColors: () => {},
    likedBoxColors: [],
    setLikedBoxColors: () => {},
    clickedButton: 'rand',
    orderOfColors: () => {}
});

const ColorsContextProvider = (props) => {
    const {colorsFilter} = useContext(FilterContext);

    const [arrayOfColors, setArrayOfColors] = useState([]);
    const [clickedButton, setClickedButton] = useState('rand');
    const [likedBoxColors, setLikedBoxColors] = useState([]);

    useEffect(() => {
        let filterArray = [...colors];
        if(colorsFilter.length > 0) {
            let indexesToDelete = [];
            filterArray.forEach((item, index) => {
                let isAppear = colorsFilter.every(colorTag => item.tags.includes(colorTag));
                if(!isAppear) {
                    indexesToDelete.push(index);
                }
            });
            indexesToDelete.reverse().forEach((indexToDelete) => filterArray.splice(indexToDelete, 1));
        }
        
        filterArray.map((item) => {
            return item.date = new Date(item.date);
          });
          setArrayOfColors(filterArray);
    }, [colorsFilter])

    const orderOfColors = (clickedButton, prop) => {
        setClickedButton(clickedButton);
        let sortedArrayOfColors = [...arrayOfColors];
        if(clickedButton === 'rand') {
            for(let i=sortedArrayOfColors.length-1;i>0;i--) {
                const j = Math.floor(Math.random() * (i+1));
                const temp = sortedArrayOfColors[i];
                sortedArrayOfColors[i]=sortedArrayOfColors[j];
                sortedArrayOfColors[j]=temp;
            }
        } else {
            sortedArrayOfColors.sort((a,b) => b[prop] - a[prop]);
        }
        setArrayOfColors(sortedArrayOfColors);
    }

    const contextValues = {
        arrayOfColors: arrayOfColors,
        setArrayOfColors: setArrayOfColors,
        likedBoxColors: likedBoxColors,
        setLikedBoxColors: setLikedBoxColors,
        clickedButton: clickedButton,
        orderOfColors: orderOfColors
    };

    return (
        <ColorsListContext.Provider value={contextValues}>
            {props.children}
        </ColorsListContext.Provider>
    )
}

export default ColorsContextProvider;