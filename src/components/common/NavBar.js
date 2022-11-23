import styled from 'styled-components';
import color from '../../lib/styles/color';
import StyledLink from './StyledLink';

const StyledNav = styled.nav`
    position: absolute;
    color: #ccc;
    background-color: ${color.red};
    width: 100%;
    transition: .5s;
    display: flex;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;

    & ul {
        display: flex;
        width: 100%; 
        justify-content: space-evenly;
        margin-top: ${ props => props.nav ? "0" : "-455px" };
        padding-left: 0;
        margin-bottom: 0;
        list-style: none;
        height: ${props => props.nav ? "100%" : "0" };
        transition: .5s;
    }

    & ul li {
        text-align: center;
        opacity: ${ props => props.nav ? "1" : "0" };
        z-index: ${ props => props.nav ? "10" : "-10" };
        padding: 25px 10px;
        font-weight: 700;
        font-size: 25px;
        transition: ${ props => props.nav ? ".3s" : ".2s" };
        transition-delay: ${ props => props.nav ? ".3s" : "0" };
    }

    @media screen and (min-width: 1500px) {
        & ul {
            justify-content: center;
        }

        & ul li {
            margin: 0 45px;
        }
    }

    @media screen and (max-width: 640px) {
        width: 100%;

        & ul {
            display: block;
            margin-right: 30px;
            margin-left: 30px;
        }

        & ul li {
            margin-left: auto;
            margin-right: auto;
            border-bottom: 3px solid white;
            width: 400px;
            font-size: 22px;
        }

        & ul a:last-child li {
            border: 0;
        }
    }
`;

const NavBar = ({ nav, user, ...rest }) => {
    return (
        <StyledNav nav={nav} {...rest}>
            { user ?
                <ul>
                    <StyledLink to="/"><li>Home</li></StyledLink>
                    <StyledLink to="/players"><li>Player</li></StyledLink>
                    <StyledLink to="/teams"><li>Teams</li></StyledLink>
                    <StyledLink to="/match-data"><li>MatchData</li></StyledLink>
                    <StyledLink to="/live"><li>Live</li></StyledLink>
                    <StyledLink to="/standings"><li>Standings</li></StyledLink>
                </ul>
                :
                <ul>
                    <StyledLink to="/"><li>Home</li></StyledLink>
                    <StyledLink to="/login"><li>Player</li></StyledLink>
                    <StyledLink to="/login"><li>Teams</li></StyledLink>
                    <StyledLink to="/login"><li>MatchData</li></StyledLink>
                    <StyledLink to="/login"><li>Live</li></StyledLink>
                    <StyledLink to="/login"><li>Standings</li></StyledLink>
                </ul>
            }
        </StyledNav>
    )
}

export default NavBar;