import SearchForm from './SearchForm';

const SearchFormContainer = ({ placeholder }) => {
    const onSubmit = e => {
        e.preventDefault();
    }

    return (
        <SearchForm placeholder={placeholder} onSubmit={onSubmit} />
    )
}

export default SearchFormContainer;