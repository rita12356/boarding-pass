// рандомные талоны.
function getRandomInt(min, max) {
    let number = Math.floor(Math.random() * (max - min)) + min;
    return number;
}
// котейнер талонов и вывод талонов.
let ticket = document.querySelector(`.ticket`);
let result = document.querySelector(`.result`);


ticket.addEventListener(`click`, function() {
    let i = getRandomInt(1, 11);
   result.textContent = `Талон #${i}`;
});


