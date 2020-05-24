import React from 'react';
import styled from 'styled-components';
import HomeIcon from '@material-ui/icons/Home';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import EmailIcon from '@material-ui/icons/Email';
const Footer = () => {
    return (
        <Container>
            <About>典登 科技股份有限公司 - ACEUP TECHNOLOGY CO.,LTD. | 統一編號:53330825</About>
            <Contact>
                <ContactBlock>
                    <HomeIcon />
                    <div>台灣-台北市內湖區內湖路一段611號5樓</div>
                </ContactBlock>
                <ContactBlock>
                    <PhoneIphoneIcon />
                    <div>+886-2-2627-4767</div>
                </ContactBlock>
                <ContactBlock>
                    <EmailIcon />
                    <a href="mailto:service@dian-deng.com"> service@dian-deng.com </a>
                </ContactBlock>
            </Contact>
        </Container>
    );
};
export default Footer;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 815px;
`;

const About = styled.div`
`;

const Contact = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const ContactBlock = styled.div`
    display: flex;
`;