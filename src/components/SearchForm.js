import React from 'react';
import { useState, useEffect } from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';


/*
    Function Component
    Arrow Function Component
*/
export const SearchForm = () => {

    /*
        React Hook
        Destructuring Array
    */
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("HandleSubmit");
    }

    const handleInputChange = (e)  => {
        setInputValue(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value= {inputValue}
                onChange={handleInputChange}
            />
            <button>Buscar</button>
        </form>
    );
}