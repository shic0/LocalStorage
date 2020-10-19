window.addEventListener("load", function() {
document.getElementById("loginButton").addEventListener("click", login)
})

function initSite() {

}

function login ( ){
    const usernameToCheck = document.getElementById("username").Value
    const passwordToCheck = document.getElementById("password").Value

    console.log(usernameToCheck, passwordToCheck) {


    if(usernamnToCheck == usernamn && passswordToCheck == passwordToCheck) {
        sessionStorage.setItem("loggedInUser", usernameToCheck)

    } else {
        let feedbackContainer = document.getElementById("loginFeedback")
        feedbackContainer.innerHTML = ""
        

        let loginFeedback = document.getElementById("logIn")
        let loginFeedback = documentCreateElement("h3")
        loginFeedback.innerText = "Fel uppgifter..." 
        
        loginForm.appendChild(loginFeedback)
    }

}