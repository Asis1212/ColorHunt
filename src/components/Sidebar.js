import React from 'react';
import styled from "styled-components";
import Button from './UI/Button';

const titlesOfButtons = [{ id: 'date', text: 'New', icon:'star' }, { id: 'popular', text: 'Popular', icon: 'rocket' }, { id: 'rand', text: 'Random', icon: 'cycle' }];

const Sidebar = (props) => {
    return (
        <SidebarContainer>
            <SidebarMenu>
                {titlesOfButtons.map(title => (
                    <Button
                        key={title.id}
                        id={title.id}
                        text={title.text}
                        icon={title.icon} 
                        sidebarButton={true} />
                ))}
            </SidebarMenu>
        </SidebarContainer>
    )
}

export default Sidebar;

const SidebarContainer = styled.div`
    @media only screen and (max-width: 715px) {
        background-color: #fff;
        position: fixed;
        bottom: 0;
        right: 0;
        width: 100%;
        margin: 0;
        padding-bottom: 1vh;
        z-index: 20;
    }
`;

const SidebarMenu = styled.div`
  background-color: #fff;

  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 715px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;