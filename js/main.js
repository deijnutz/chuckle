document.querySelector('button').addEventListener('click', chuckle)

function chuckle() {

    const url = `https://api.chucknorris.io/jokes/random`

    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data)
            document.querySelector('h3').innerText = data.value

        })
        .catch(err => {
            console.log(`error ${err}`)
        })
}