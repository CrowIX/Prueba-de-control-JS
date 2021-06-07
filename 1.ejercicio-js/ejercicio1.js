'use strict';

const getUsers = async (numUsuarios) => {
    const users = [];
    try {
    const response = await fetch(`https://randomuser.me/api/?page=1&results=${numUsuarios}&inc=login,name,gender,location,email`);
    const data = await response.json();
    for (let i = 0; i < data.results.length; i++) {
        const user = {};
        user.username = data.results[i].login.username;
        user.first = data.results[i].name.first;
        user.last = data.results[i].name.last;
        user.gender = data.results[i].gender;
        user.country = data.results[i].location.country;
        user.email = data.results[i].email;
        users.push(user);
    }
    console.log(users);
   } catch (error) {
    console.error(error);
   } 
};

getUsers(50);