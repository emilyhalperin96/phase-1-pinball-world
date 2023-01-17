fetch('http://localhost:3000/games')
.then(response => response.json())
.then((games) => {
    renderGameList(games)
    firstGame = games[0]
    let image = document.querySelector('#detail-image')
    image.src = firstGame.image
    let name = document.querySelector('#detail-title')
    name.textContent = firstGame.name
    let highScore = document.querySelector('#detail-high-score')
    highScore.textContent = firstGame.high_score


})

function renderGameList(games){
    const gameList = document.querySelector('.game-list')
    games.forEach(game => {
        const gameElement = document.createElement('h5')
        gameElement.textContent = `${game.name} (${game.manufacturer_name})`
        gameElement.addEventListener('click', (e) => {
            let image = document.querySelector('#detail-image')
            image.src = game.image
            let name = document.querySelector('#detail-title')
            name.textContent = game.name
            let highScore = document.querySelector('#detail-high-score')
            highScore.textContent = game.high_score 
        })

        gameList.append(gameElement)
    })
}

function changeHighScore() {
    let scoreForm = document.querySelector('#high-score-form')
    let inputScore = document.querySelector('#score-input')
    let detailHighScore = document.querySelector('#detail-high-score')
    scoreForm.addEventListener('submit', (e) => {
        e.preventDefault()
        detailHighScore.textContent = inputScore.value
    })
}
changeHighScore()





