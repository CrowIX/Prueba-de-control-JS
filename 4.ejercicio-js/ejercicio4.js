'use strict';

const names = [
    'A-Jay',
    'Manuel',
    'Manuel',
    'Eddie',
    'A-Jay',
    'Su',
    'Reean',
    'Manuel',
    'A-Jay',
    'Zacharie',
    'Zacharie',
    'Tyra',
    'Rishi',
    'Arun',
    'Kenton',
];


function cleanDuplicates(array) {
    let cleanArray = array.filter((elemento, index) => {
        return array.indexOf(elemento) === index;
    })
    console.log(cleanArray);
}

cleanDuplicates(names);