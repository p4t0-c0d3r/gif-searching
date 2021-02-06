
export const getGifs = async(words) => {
    
    /*
        Template literals
        Await
    */
    const url = `https://api.giphy.com/v1/gifs/search?api_key=iPt0mjDBGc8G5CZSOBjFYjrcTz65SmKG&q=${encodeURI(words)}&limit=2`;
    const response  = await fetch(url);

    /*
        Object Destructuring
    */
    const {data} = await response.json();

    /*
        Mapping
    */
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });

    return gifs;
}