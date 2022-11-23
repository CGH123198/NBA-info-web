import styled from 'styled-components';
import { SearchInputDiv, StyledInput, PlaceholderLabel } from './Input';
import { useState, useCallback } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'


const Div = styled(SearchInputDiv)`
    margin: 30px auto;

    @media screen and (max-width: 640px) {
        width: 90%;
    }
`;

const Label = styled(PlaceholderLabel)`
    left: 14px;
`;

const LoginInput = ({ placeholder, value, inputType, ...rest }) => {
    const [color, setColor] = useState(false);
    const [pwShow, setPwShow] = useState(false);

    const changePwShow = () => {
        pwShow ? setPwShow(false) : setPwShow(true);
    }

    const focusColor = () => {
       setColor(true);
    }

    const blurColor = useCallback( () => {
        if(!value.length) {
            setColor(false);
        }
    }, [value]);

    if(inputType === "email") {
        return (
            <Div colors={color}>
                <label className="input-label">
                    <StyledInput onFocus={focusColor}  onBlur={blurColor} value={value} type="email" {...rest} autoComplete='off'/>
                    <Label colors={color} >{placeholder}</Label>
                </label>
            </Div>
        )
    } else {
        return (
            <Div colors={color}>
                <label className="input-label">
                    {
                        pwShow ?
                        <StyledInput onFocus={focusColor}  onBlur={blurColor} value={value} {...rest} type="text"  />
                        :
                        <StyledInput onFocus={focusColor}  onBlur={blurColor} value={value} {...rest} type="password" />
                    }
                    <Label colors={color} >{placeholder}</Label>
                </label>
                <div className="password-show-check" >
                    {   !pwShow ?
                        <FontAwesomeIcon icon={faEye} onClick={changePwShow}/>
                        :
                        <FontAwesomeIcon icon={faEyeSlash} onClick={changePwShow}/>   
                    }
                </div>
            </Div>
        )
    }
};

export default LoginInput;