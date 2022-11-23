import styled from 'styled-components';
import color from '../../lib/styles/color';

const HeaderWrapper = styled.div`
    background-color: ${color.blue};
    min-height: 120px;
    display: flex;
    position: relative;
    z-index: 100;

    @media screen and (max-width: 1100px) {
        flex-direction: column;
    }
`;

const Header = ({children, ...rest}) => {
    return (
        <HeaderWrapper {...rest}>
            {children}
        </HeaderWrapper>
    )
}

export default Header;