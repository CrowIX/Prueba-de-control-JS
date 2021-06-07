//Consigue una lista con los nombres de los personajes de la serie Rick and Morty 
//que aparecen en los episodios lanzados en el mes de enero (el año no importa).
'use strict';

const getCharacters = async () => {
    try {
    const filteredCharacters = [];
    const characters = [];
    const episodes = [];
    const response = await fetch(`https://rickandmortyapi.com/api/episode/`);
    const data = await response.json();
    for(let i = 0; i < data.info.pages; i++) {
        const response2 = await fetch(`https://rickandmortyapi.com/api/episode/?pages=${i}`);
        const data2 = await response2.json();
        episodes.push(...data2.results.filter((episode) => episode.air_date.includes('January')));
    }
    for(let i = 0; i < episodes.length; i++) {
        filteredCharacters.push(...episodes[i].characters);
    }

    for (let i = 0; i < filteredCharacters.length; i++) {
        const response3 = await fetch(filteredCharacters[i]);
        const data3 = await response3.json();
        characters.push(data3);
    }
    console.log(characters);
   } catch (error) {
    console.error(error);
   } 
};

getCharacters();