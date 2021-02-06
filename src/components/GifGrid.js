import { useState } from 'react';
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";


export const GifGrid = (words) => {

    const {data} = useFetchGifs(words);

    return(
            <ul>
                {
                    data.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </ul>
    );
}