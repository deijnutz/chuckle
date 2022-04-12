document.querySelector('button').addEventListener('click', chuckle)

const chuckle = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com',
        'X-RapidAPI-Key': 'b61d271c4amsh09f72ade5cfdd6cp15ff7djsn315312e11c02'
    }
};

fetch('https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random', chuckle)
    .then(response => response.json())

.then(response => console.log(response))
document.querySelector('h3').innerText = response




    .catch(err => console.error(err));





// document.querySelector('button').addEventListener('click', chuckle)

// function chuckle() {


//     fetch(``)
//         .then(res => res.json()) //saying:parse response as json
//         .then(data => {
//             console.log(data.drinks[0])
//             document.querySelector('h2').innerText = data.drinks[0].strDrink
//             document.querySelector('img').src = data.drinks[0].strDrinkThumb
//             document.querySelector('h3').innerText = data.drinks[0].strInstructions

//         })

//     .catch(err => {
//         console.log(`error ${err}`)
//     })
// }