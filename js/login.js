/*
checkbox* do you wanna stay logged in? 
- save token to localstorage or sessionstorage
(or? save token to localstorage in registration, then get token later?)

*/
const getEmail = document.querySelector("input#validationDefaultEmail");
const getPassword = document.querySelector("input#validationDefault01");
const loginBtn = document.querySelector("button#submitBtn");
const logoutBtn = document.querySelector("button#logoutBtn");
const loginContent = document.querySelector("#login-container");
const header = document.querySelector("header");
const loginForm = document.querySelector("section#login");
const API_BASE_URL = "https://nf-api.onrender.com";
const loginUrl = `${API_BASE_URL}/api/v1/social/auth/login`;

async function loginUser(url, userData) {
    try {
        // console.log(url, userData);
        const postData = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        };
        const response = await fetch(url, postData);
        // console.log(response);
        const json = await response.json();
        // console.log(json);
        // console.log(json.accessToken);
        const userName = json.name;
        const accessToken = json.accessToken;
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("userName", userName);
        if (response.ok) {
        window.location.href = "../home-page.html";
        } else {
            loginContent.innerHTML = "Password or Email is invalid";
        }
    } catch (error) {
        console.log(error);
    } 
};


loginBtn.addEventListener("click", (event) => {
    event.preventDefault();
    loginContent.innerHTML = '<img src="../images/Spinner-1s-79px.gif">';

    const email = getEmail.value.trim();
    const password = getPassword.value.trim();

    const userToLogin = {
        email: email,
        password: password,
    }
    loginUser(loginUrl, userToLogin);
});



// momi15465@stud.noroff.no
// 2266zany

// regnaa15465@stud.noroff.no
// 2266zanY