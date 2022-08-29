import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

import FilterContextProvider from './context/search-content';
import ColorsContextProvider from './context/colors-context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <FilterContextProvider>
            <ColorsContextProvider>
                <App />
            </ColorsContextProvider>
        </FilterContextProvider>
    </BrowserRouter>);
