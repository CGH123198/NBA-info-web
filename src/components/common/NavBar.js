import styled from 'styled-components';
import color from '../../styles/color';
import StyledLink from './StyledLink';

const StyledNav = styled.nav`
    position: absolute;
    color: #ccc;
    background-color: ${color.red};
    width: 100vw;
    transition: .5s;
    display: flex;

    & ul {
        display: flex;
        width: 100%; 
        justify-content: space-evenly;
        margin-top: ${ props => props.nav ? "0" : "-455px" };
        margin-bottom: 0;
        list-style: none;
        height: ${props => props.nav ? "100%" : "0" };
        transition: .5s;
        padding: 0 20px;
    }

    & ul li {
        text-align: center;
        opacity: ${ props => props.nav ? "1" : "0" };
        z-index: ${ props => props.nav ? "10" : "-10" };
        padding: 25px 10px;
        font-weight: 700;
        font-size: 25px;
        transition: ${ props => props.nav ? ".3s" : ".2s" };;
        transition-delay: ${ props => props.nav ? ".3s" : "0" };;
    }

    @media screen and (min-width: 1500px) {
        & ul {
            justify-content: center;
        }

        & ul li {
            margin: 0 45px;
        }
    }

    @media screen and (max-width: 740px) {
        width: 100vw;

        & ul {
            display: block;
            margin-right: 30px;
            margin-left: 30px;
        }

        & ul li {
            border-bottom: 3px solid white;
            font-size: 22px;
        }

        & ul a:last-child li {
            border: 0;
        }
    }
`;

const NavBar = ({ nav, ...rest }) => {
    return (
        <StyledNav nav={nav} {...rest}>
            <ul>
                <StyledLink to="/players"><li>Player</li></StyledLink>
                <StyledLink to="/teams"><li>Teams</li></StyledLink>
                <StyledLink to="/match-data"><li>MatchData</li></StyledLink>
                <StyledLink to="/live"><li>Live</li></StyledLink>
                <StyledLink to="/standings"><li>NBA Standings</li></StyledLink>
            </ul>
        </StyledNav>
    )
}

export default NavBar;