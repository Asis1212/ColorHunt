import React from 'react';
import styled from "styled-components";
import Button from './UI/Button';

import IconTextButton from './UI/IconTextButton';



const titlesOfButtons = [{ id: 1, text: 'New', icon:'star' }, { id: 2, text: 'Popular', icon: 'rocket' }, { id: 3, text: 'Random', icon: 'cycle' }];

const Sidebar = (props) => {

    const textButton = (text, iconName) => {
        return (
            <IconTextButton 
            text={text}
            icon={iconName} 
            isMenu={true} />
        )
    }
    return (
        <SidebarContainer>
            <SidebarMenu>
                {titlesOfButtons.map(title => (
                    <Button
                        key={title.id}
                        isMenu={true}
                        text={textButton(title.text, title.icon)}
                        id={title.id}
                        change={props.changeColor}
                        bg={props.clickedButton === title.id && true} />
                ))}
            </SidebarMenu>
        </SidebarContainer>
    )
}

export default Sidebar;

const SidebarContainer = styled.div`
    margin: 0.5rem;

    @media only screen and (max-width: 950px) {
        margin: 0.5rem;
    }
    @media only screen and (max-width: 715px) {
        background-color: #fff;
        position: fixed;
        bottom: 0;
        right: 0;
        width: 100%;
        margin: 0;
        padding-bottom: 1vh;
    }
    
`;

const SidebarMenu = styled.div`
  background-color: #fff;
  grid-row: 2/-1;

  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 715px) {

    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
`;