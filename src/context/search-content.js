import React,{useState} from "react";

export const FilterContext=React.createContext({
    colorsFilter: [],
    setColorsFilter: () => {}
});

const FilterContextProvider = (props) => {
    const [colorsFilter, setColorsFilter] = useState([]);

    const contextValues = {
        colorsFilter:colorsFilter,
        setColorsFilter:setColorsFilter
    }

    return (
        <FilterContext.Provider value={contextValues}>
            {props.children}
        </FilterContext.Provider>
    )
}

export default FilterContextProvider;