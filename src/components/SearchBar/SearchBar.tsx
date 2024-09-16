import { useState, FormEvent, FC, ChangeEvent } from 'react';
import { toast, Toaster } from 'react-hot-toast';

import { SearchBarProps } from '../../App/App.types';

import css from './SearchBar.module.css';

const SearchBar: FC<SearchBarProps> = ({ onSubmit }) => {
    const [searchQuery, setSearchQuery] = useState<string>('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!searchQuery.trim()) {
            return toast.error("Please enter search term!");
        }
        onSubmit(searchQuery);
        setSearchQuery('');
    };

    return (
        <header className={css.header}>
            <form onSubmit={handleSubmit} className={css.header}>
                <input
                    onChange={handleChange}
                    value={searchQuery}
                    type="text"
                    name="search"
                    autoComplete="off"
                    autoFocus
                    required
                    placeholder="Search images and photos"
                    className={css.input}
                />
                <button type="submit" className={css.button}>Search</button>
                <Toaster position="top-right" reverseOrder={false} />
            </form>
        </header>
    );
};

export default SearchBar;