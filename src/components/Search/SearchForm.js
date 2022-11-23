import './SearchForm.scss';
import styled from 'styled-components';
import Input from '../Input/Input';
import Button from '../common/Button';
import color from '../../lib/styles/color';


const SearchButton = styled(Button)`
    position: relative;
    z-index: 3;
    font-size: 20px;
    height: 61px;
    width: 130px;
    margin-left: -20px;
    
    @media screen and (max-width: 640px) {
        margin-top: 30px;
    }
`;

const SearchSelectBox = styled.div`
    display: flex;
    position: relative;
    width: 150px;
    height: 60px;
    font-weight: 700px;
    border: 2px solid #555;
    border-radius: 5px 5px;
    margin-right: -18px;
    margin-left: 8px;
    background-color: ${color.blue};
    box-sizing: border-box;

    &::after {
        position: relative;
        content: '▼';
        color: white;
        top: 14px;
        margin-left: -25px;
        margin-right: 10px;
        font-size: 23px;
    }
    
    & select {
        z-index: 3;
        appearance: none;
        -moz-appearance: none;
        -webkit-appearance: none;
        height: 100%;
        padding-right: 18px;
        color: white;
        font-size: 21px;
        text-align: center;
        background-color: rgba(23, 64, 139, .5);
        width: 150px;
        border: 0;
        border-radius: 3px 3px;

        &:focus {
            outline: none;
        }
    }


`;


const SearchForm = ({ 
    placeholder, 
    onSubmit, 
    value, 
    getInputValue, 
    getSelectValue, 
    page, 
    selectRef 
}) => {
    return(
        <div className="search-form-box">
            <form className="search-form" onSubmit={onSubmit}>
                <SearchSelectBox>
                    <select onChange={getSelectValue} ref={selectRef}>
                        {   page === "players" &&
                            <>
                                <option value="lastName" defaultValue>LastName</option>
                                <option value="country">Country</option>
                            </>
                        }
                        {
                            page  === "teams" &&
                            <>
                                <option value="teamName" defaultValue>TeamName</option>
                                <option value="conference">Conference</option>
                                <option value="division">Division</option>
                            </>
                        }
                    </select>
                </SearchSelectBox>
                <div className="search-input-box">
                    <Input
                        type="text"   
                        placeholder={placeholder} 
                        value={value}
                        onChange={getInputValue} 
                    />
                    <SearchButton>SEARCH</SearchButton>
                </div>
            </form>
        </div>
    )
};

export default SearchForm;