import React from 'react';
import styled from "styled-components";
import { NavLink } from 'react-router-dom';

import Search from './Search';

const Header = () => {
    return (
        <HeaderMenu>
            <NavLink to='/' style={{'textDecoration': 'none', color: 'black'}}>
                <Icon>
                    <ImgDiv>
                        <Img src='https://colorhunt.co/img/color-hunt-logo-face.svg' alt='icon-img'/>
                        <img src='https://colorhunt.co/img/color-hunt-logo-tongue.svg' alt='icon-img'/>
                    </ImgDiv>
                    <Title>Color Hunt</Title>
                </Icon>
            </NavLink>
            <Search/>
        </HeaderMenu>
        
    )
}

export default Header;

const HeaderMenu = styled.header`
  background-color: #fff;
  margin-bottom: 10px;
  display: flex;


  @media only screen and (max-width: 715px) {
    flex-direction: column;
  }
`;

const Icon = styled.div`
    margin-right: 1.5rem;
    box-sizing: border-box;
    display: flex;
    align-items: center;

     @media only screen and (max-width: 715px) {
        margin-right: 0;
        justify-content: center;
    } 
`;

const ImgDiv = styled.div`
    display: flex;
`;

const Img = styled.img`
    position: absolute;
`;

const Title = styled.span`
    white-space: nowrap;
    font-size: 1.3rem;
    font-weight: 600;
    font-family: 'poppins', sans-serif;
`;