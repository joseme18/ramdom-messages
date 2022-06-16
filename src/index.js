const messages = [
    "Oscar",
    "Ana",
    "Jose",
    "Nicolay",
    "Yesica",
    "Laura",
    "Carolina",
    "Rafael"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
return console.log(message);
};

module.exports = { randomMsg };