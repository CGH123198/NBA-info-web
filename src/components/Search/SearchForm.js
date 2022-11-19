import './SearchForm.scss';
import styled from 'styled-components';
import SearchInputContainer from './SearchInputContainer';
import Button from '../common/Button';


const SearchButton = styled(Button)`
    font-size: 20px;
    height: 57px;
    width: 130px;
    margin-left: -180px;
`;

const SearchForm = ({ placeholder, onSubmit }) => {
    return(
        <div className="search-form-box">
            <form className="search-form" onSubmit={onSubmit}>
                <div>
                    <SearchInputContainer placeholder={placeholder} />
                    <SearchButton>SEARCH</SearchButton>
                </div>
            </form>
        </div>
    )
};

export default SearchForm;