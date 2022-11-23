import color from '../../lib/styles/color'
import styled from 'styled-components';
import './LoginModal.scss';
import KAKAOBUTTON from '../../assets/kakao_login/en/kakao_login_large_wide.png';
import LoginInput from '../Input/LoginInput';
import StyledLink from '../common/StyledLink';
import { KAKAO_OAUTH_URL } from '../../lib/APIs/OAuth';

const LoginBackground = styled.div`
    background-color: ${color.redBackground};
    width: 100%;
    padding: 90px 0;

    & h1 {
        margin: 20px 0 -50px;
        text-align: center;
        color: white;
        font-weight: 700px;
    }

    & h3 {
        text-align: right;
        width: 75%;
        margin: -30px auto 30px;
        color: ${color.blue};
        text-decoration: underline;
        font-size: 14px;
    }

    @media screen and (max-width: 640px) {
        & h3 {
            width: 88%;
        }
    }
`;

const OAUTHLINK = styled.a`
`;

const LoginModal = ({ getEmail, getPassword, email, password, onSubmit }) => {
    return (
        <LoginBackground>
            <h1>LOG - IN</h1>
            <div className="login-modal-container">
                <form className="login-modal-form" onSubmit={onSubmit} >
                    <LoginInput placeholder="email" inputType="email" value={email} onChange={getEmail} />
                    <LoginInput placeholder="password" inputType="password" value={password} onChange={getPassword} />
                    <StyledLink to="/"><h3>go home</h3></StyledLink>
                    <div className="kakao-login-button">
                        <button style={{ backgroundColor: `${color.blue}`, borderRadius: "8px" }}>
                            LOGIN
                        </button>
                        <OAUTHLINK href={KAKAO_OAUTH_URL} >
                            <img src={KAKAOBUTTON} alt="login" />
                        </OAUTHLINK>
                    </div>
                </form>
            </div>
        </LoginBackground>
    )
}

export default LoginModal;