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
       margin: 10px 1vw 10px auto;
       width: 350px;
    }

    @media screen and (max-width: 640px) {
        width: auto;
    }
`;

const LayoutHeader = ({ user }) => {
    const [nav, setNav] = useState(false);

    const closeNav = (e) => {
        setNav(false);
    }

    const openNav = () => {
        setNav(true);
    }

    return (
        <div style={{ position: "relative", zIndex: "100", width: "100%" }}>
            <Header onMouseOver={openNav}>
                <div style={{ display: "flex" }}>
                    <StyledLink to="/"><Logo /></StyledLink>
                    <TitleH1>NBA SEASONS 2015 - 22 DATA</TitleH1>   
                </div>
                { !user ?
                    <BtnWrapper>
                        <HeaderBtn>REGISTER</HeaderBtn>
                        <StyledLink to="/login"><HeaderBtn>LOG-IN</HeaderBtn></StyledLink>
                    </BtnWrapper>
                    :
                    <BtnWrapper style={{ margin: "auto 30px 10px auto" }}>
                        <div className="account-email" style={{ color: "white", margin:"0 auto 0 20px", display: "inline-block" }} >
                            { user.kakao_account.email }
                        </div>
                        <StyledLink to="/">
                            <HeaderBtn style={{ margin: "0 0 0 30px"}}>LOG-OUT</HeaderBtn>
                        </StyledLink>
                    </BtnWrapper>
                }
                
            </Header>
            <NavBar nav={nav} onMouseOut={closeNav} onMouseOver={openNav} user={user} />
        </div>
    )
}

export default LayoutHeader;