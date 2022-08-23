import React, { Fragment } from 'react';
import styled from "styled-components";
import Button from './Button';

import Icon from '../../Icon';

const Search = () => {

    const context = (
        <Icon color='#444' size={20} icon='magnifying-glass' />
    );

  return (
    <Fragment>
        <Form>
            <Input/>
            <Button text={context} />
        </Form>
    </Fragment>
  )
}

export default Search;

const Form = styled.form`
    margin-left: 8rem;
    transition: all .4s;

    @media only screen and (min-width: 715px) {
        margin-left: 0;
    }

    flex: 0 0 40%;

    display:flex;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 1415px) {
        margin-left: 4rem;
        justify-content: start;
    }
    @media only screen and (max-width: 805px) {
        display: flex;
        justify-content: center;
        width: 100%;
        margin-left: -2.5rem;
    }
`;

const Input = styled.input.attrs({
    type: 'text',
    placeholder: 'Search palettes'
})`
    color: #777;
    background-color: #f4f2f2;
    border: none;
    border-radius: 100px;
    font-size: 1rem;
    padding: .7rem 2rem;
    width: 70%;
    transition: all .4s;

    &:focus {
        @media only screen and (min-width: 715px) {
            outline: none;
            width: 80%;
        }

    }
`;