import styled from 'styled-components';
import color from '../../lib/styles/color';
import { useState, useCallback } from 'react';

export const SearchInputDiv = styled.div`
    display: block;
    background-color: ${ props => props.colors ? "#353535" : "#303030" };
    box-sizing: border-box;
    border: 0;
    width: 430px;
    height: 60px;
    margin: 0 auto 0 30px;
    border-radius: 5px 5px;

    @media screen and (max-width: 640px) {
        width: 360px;
        margin-right: 30px;
    }
`;

export const StyledInput = styled.input`
    outline: none;
    background-color: transparent;
    font-weight: 700;
    font-size: 21px;
    padding: 5px 15px 0;
    box-sizing: border-box;
    border: 0;
    border-radius: 5px 5px;
    width: 100%;
    height: 100%;
    color: ${color.blue};
    position: relative;
    z-index: 1;

    &:focus {
        outline: none;
        border-bottom: #006BB6 5px solid;
    }
`;

export const PlaceholderLabel = styled.label`
    display: inline-block;
    position: relative;
    width: 150px;
    text-align: left;
    line-height: 20px;
    font-size: ${ props => props.colors ? "12px" : "16px" };
    color: ${color.blue};
    font-weight: 700;
    left: -79px;
    top: ${ props => props.colors ? "-60px" : "-40px" };

    @media screen and (max-width: 640px) {
        left: -90px;
    }
`;

const Input = ({ placeholder, value, ...rest }) => {

    const [color, setColor] = useState(false);
    
    const focusColor = () => {
       setColor(true);
    }

    const blurColor = useCallback( () => {
        if(!value.length) {
            setColor(false);
        }
    }, [value]);

    return (
        <SearchInputDiv colors={color}>
            <label className="input-label">
                <StyledInput onFocus={focusColor}  onBlur={blurColor} value={value} {...rest}/>
                <PlaceholderLabel colors={color} >{placeholder}</PlaceholderLabel>
            </label>
        </SearchInputDiv>
    )
}

export default Input;