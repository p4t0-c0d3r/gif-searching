import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (words) => {

    const [state, setState] = useState({
        data: []
    });

    useEffect(() => {
        getGifs(words)
            .then(imgs => {
                setState({
                    data: imgs
                })
            });
    }, []);

    return state;
}