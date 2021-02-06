import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { GifGrid } from './components/GifGrid';
import { SearchForm } from './components/SearchForm';

import './styles/index.css';


export const GifSearching = () => {

    const [words, setWords] = useState('Samurai');

    return(
        <>
            <SearchForm />
            <GifGrid word={words}/>
        </>
    );
}
