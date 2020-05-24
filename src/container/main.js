// core
import React, { useState } from 'react';
import styled from 'styled-components';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Footer from './footer';
import img from '../assets/images/logo.jpg';
const DEFAULT_ACTION_CONFIG = {
    page: 0
};
const Main = () => {
    const [actionConfig, setActionConfig] = useState(DEFAULT_ACTION_CONFIG);
    const onMenuPageChange = (event, newValue) => {
        setActionConfig({
            ...actionConfig,
            page: newValue
        })
    };
    const { page } = actionConfig;
    // render
    return (
        <MainContainer>
            <LogoContainer>
                <LogoImage />
            </LogoContainer>
            <Container>
                <Tabs
                    value={page}
                    onChange={onMenuPageChange}
                    indicatorColor="primary"
                    textColor="primary"
                >
                    <Tab label="首頁" />
                    <Tab label="關於我們" />
                </Tabs>
                <Content>
                {
                    page === 0 && 123
                }
                {
                    page === 1 && 123333
                }
                </Content>
            </Container>
            <Footer />
        </MainContainer>
    );
};

export default Main;

const MainContainer = styled.div`
    min-height: 740px;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 815px;
`;

const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    min-height: 150px;
    min-width: 815px;
`;

const Content = styled.div`
    /* padding: 8px; */
`;

const LogoImage = styled.div`
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: 100% auto;
    min-height: 150px;
    min-width: 815px;
    max-width: 960px;
`;
