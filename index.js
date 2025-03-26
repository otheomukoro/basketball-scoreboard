let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")
let homecount = 0
let guestcount = 0
console.log(homeEl)
console.log(guestEl)

//Home Increment
function homeincrement1(){
    homecount += 1
    homeEl.textContent = homecount
    console.log("Home button +1 was clicked.")
}

function homeincrement2(){
    homecount += 2
    homeEl.textContent = homecount
    console.log("Home button +2 was clicked.")
}

function homeincrement3(){
    homecount += 3
    homeEl.textContent = homecount
    console.log("Home button +3 was clicked.")
}

//Home Reduction
function homereudction1(){
    homecount -= 1
    homeEl.textContent = homecount
    console.log("Home button -1 was clicked.")
}

function homereudction2(){
    homecount -= 2
    homeEl.textContent = homecount
    console.log("Home button -2 was clicked.")
}

function homereudction3(){
    homecount -= 3
    homeEl.textContent = homecount
    console.log("Home button 93 was clicked.")
}

//Guest Increment
function guestincrement1(){
    guestcount += 1
    guestEl.textContent = guestcount
    console.log("Guest button +1 was clicked.")
}

function guestincrement2(){
    guestcount += 2
    guestEl.textContent = guestcount
    console.log("Guest button +2 was clicked.")
}

function guestincrement3(){
    guestcount += 3
    guestEl.textContent = guestcount
    console.log("Guest button +3 was clicked.")
}

//Guest Reduction
function guestreudction1(){
    guestcount -= 1
    guestEl.textContent = guestcount
    console.log("Guest button -1 was clicked.")
}

function guestreudction2(){
    guestcount -= 2
    guestEl.textContent = guestcount
    console.log("Guest button -2 was clicked.")
}

function guestreudction3(){
    guestcount -= 3
    guestEl.textContent = guestcount
    console.log("Guest button -3 was clicked.")
}