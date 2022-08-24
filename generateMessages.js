const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];

const friendsName = (name) =>{
    return `Hi ${name} ! 50% off our best candies for you today!`;
};

const generateMessages = names.map(friendsName );

console.log(generateMessages);