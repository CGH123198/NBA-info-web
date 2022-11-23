import styled from 'styled-components';
import color from '../../lib/styles/color';

const BasicButton = styled.button`
    background-color: ${color.red};
    font-weight: 700;
    border: 0;
    min-height: 30px;
    border-radius: 3px;
    color: white;
    cursor: pointer;
`;

const Button = ({children, ...rest}) => {
    return(
        <BasicButton {...rest} >
            {children}
        </BasicButton>
    )
}

export default Button;