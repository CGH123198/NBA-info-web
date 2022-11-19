import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyleLink = styled(Link)`
    text-decoration: none;
    color: white;

    &:link, &:visited, &:hover {
        text-decoration: none;
    }
`;


const StyledLink = ({children, ...rest}) => {
    return (
        <StyleLink {...rest}>
            {children}
        </StyleLink>
    )
}

export default StyledLink;