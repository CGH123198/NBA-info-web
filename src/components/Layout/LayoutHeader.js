import Header from '../common/Header';
import Logo from '../common/Logo/Logo';
import TitleH1 from '../common/HeaderText';
import Button from '../common/Button';
import NavBar from '../common/NavBar';
import StyledLink from '../common/StyledLink';
import styled from 'styled-components';
import { useState } from 'react';

const HeaderBtn = styled(Button)`
    margin: 45px 3px 0;
    width: 100px;

    @media screen and (max-width: 1100px) {
        margin-top: 0;
    }
`;

const BtnWrapper = styled.div`
    margin-left: auto;
    margin-right: 3vw;
    
    @media screen and (max-width: 1100px) {
       margin: 10px 0 10px auto;
       width: 220px;
    }
`;

const LayoutHeader = () => {
    const [nav, setNav] = useState(false);

    const closeNav = (e) => {
        setNav(false);
    }

    const openNav = () => {
        setNav(true);
    }

    return (
        <div style={{ position: "relative", zIndex: "100" }}>
            <Header onMouseOver={openNav}>
                <div style={{ display: "flex" }}>
                    <StyledLink to="/"><Logo /></StyledLink>
                    <TitleH1>NBA SEASONS 2015 - 22 DATA</TitleH1>   
                </div>
                <BtnWrapper>
                    <HeaderBtn>REGISTER</HeaderBtn>
                    <StyledLink to="/login"><HeaderBtn>LOG-IN</HeaderBtn></StyledLink>
                </BtnWrapper>
            </Header>
            <NavBar nav={nav} onMouseOut={closeNav} onMouseOver={openNav} />
        </div>
    )
}

export default LayoutHeader;