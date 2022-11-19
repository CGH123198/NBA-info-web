import styled from 'styled-components';
import color from '../../styles/color';
import { useState, useCallback } from 'react';

const StyledInput = styled.input`
    outline: none;
    background-color: #303030;
    font-weight: 700;
    font-size: 21px;
    padding: 5px 15px 0;
    box-sizing: border-box;
    border: 0;
    border-bottom: #333 5px solid;
    border-radius: 5px 5px;
    width: 400px;
    height: 57px;
    color: ${color.blue};

    &:focus {
        outline: none;
        border-bottom: #006BB6 5px solid;
        background-color: #353535;
    }
`;

const PlaceholderLabel = styled.label`
    display: inline-block;
    position: relative;
    width: 175px;
    text-align: left;
    line-height: 20px;
    font-size: ${ props => props.color ? "13px" : "18px" };
    color: ${color.blue};
    font-weight: 700;
    left: -385px;
    top: ${ props => props.color ? "-20px" : "0" };
`;

const BasicInput = ({ placeholder }) => {

    const [color, setColor] = useState(false);
    const [value, setValue] = useState("");
    
    const focusColor = () => {
       setColor(true);
    }

    const blurColor = useCallback( () => {
        if(!value.length) {
            setColor(false);
        }
    }, [value]);

    const getInputValue = e => {
        setValue(e.target.value);
    }

    return (
        <label className="input-label">
            <StyledInput type="text" onFocus={focusColor}  onBlur={blurColor} onChange={getInputValue} value={value}/>
            <PlaceholderLabel color={color} >{placeholder}</PlaceholderLabel>
        </label>
    )
}

export default BasicInput;