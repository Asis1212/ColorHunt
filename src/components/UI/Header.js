import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { NavLink, useLocation } from 'react-router-dom';

import Search from './Search';

const Header = () => {
    const location = useLocation();
    const [isHomepage, setIsHomepage] = useState(true);

    useEffect(() => {
        if(location.pathname !== '/') {
            setIsHomepage(false);
        } else {
            setIsHomepage(true);
        }
    }, [location.pathname]);

    return (
        <HeaderMenu>
            <NavLink to='/' style={{'textDecoration': 'none', color: 'black'}}>
                <Icon isHomepage={isHomepage}>
                    <ImgDiv>
                        <Img src='https://colorhunt.co/img/color-hunt-logo-face.svg' alt='icon-img'/>
                        <img src='https://colorhunt.co/img/color-hunt-logo-tongue.svg' alt='icon-img'/>
                    </ImgDiv>
                    <Title>Color Hunt</Title>
                </Icon>
            </NavLink>
            {isHomepage && <Search/>}

        </HeaderMenu>
    )
}

export default Header;

const HeaderMenu = styled.header`
  background-color: #fff;
  grid-column: 1/-1;
  padding-top: 0.75rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(0,0,0, .1);
  

  display: grid;
  grid-template-columns: max-content 1fr ;
  align-items: center;
  grid-column-gap: 3vw;

  @media only screen and (max-width: 715px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Icon = styled.div`
    font-size: 1.75rem;
    font-weight: 500;
    font-family: 'sans-serif';
    padding-left: 5.5rem;
    grid-column: 1 / 2;

    display: flex;
    justify-content: space-between;
    align-items: center;

    @media only screen and (max-width: 715px) {
        padding-left: 0;
        justify-content: center;
        margin-top: ${props => !props.isHomepage ? '1rem' : ''};
    }
`;

const ImgDiv = styled.div`
    display: grid;
    grid-template-rows: repeat(2, min-content);
`;

const Img = styled.img`
    position: absolute;
`;

const Title = styled.span`
    font-family: poppins, sans-serif;
`;