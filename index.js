// get elements to feed each score into 
const scoreCountHome = document.getElementById('home-score')
const scoreCountGuest = document.getElementById('guest-score')

// increment home score
let homeScore = 0
scoreCountHome.textContent = homeScore

// increment guest score
let guestScore = 0 
scoreCountGuest.textContent = guestScore


// FUNCTION FOR HOME SCORE BUTTONS 
function plusHome(score){
    homeScore += score
    scoreCountHome.textContent = homeScore
}

// FUNCTION FOR GUEST SCORE BUTTONS 
function plusGuest(score){
    guestScore += score
    scoreCountGuest.textContent = guestScore
}


// RESET BUTTON TO CHANGE BOTH HOME SCORE AND GUEST SCORE TO ZERO
function reset() {
    guestScore = 0
    scoreCountGuest.textContent = guestScore
    homeScore = 0
    scoreCountHome.textContent = homeScore
    
}