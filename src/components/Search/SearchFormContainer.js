import SearchForm from './SearchForm';
import { useSearchParams, } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

const SearchFormContainer = ({ placeholder, page }) => {
    const [value, setValue] = useState("");
    const [criteria, setCriteria] = useState();
    const [searchParams, setSearchParams] = useSearchParams();
    const selectRef = useRef();

    const onSubmit = e => {
        e.preventDefault();
        setSearchParams({
            value: value,
            criteria: criteria
        })
    }

    const getInputValue = e => {
        setValue(e.target.value);
    }

    const getSelectValue = e => {
        setCriteria(e.target.value);
    }

    useEffect( () => {
        setCriteria(selectRef.current.value);
    }, []);

    return (
        <SearchForm 
            page={page}
            placeholder={placeholder} 
            onSubmit={onSubmit} 
            value={value}
            getInputValue={getInputValue}
            getSelectValue={getSelectValue}
            selectRef={selectRef}
        />
    )
}

export default SearchFormContainer;