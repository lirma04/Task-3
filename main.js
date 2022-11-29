
document.querySelector("#button").addEventListener('click', getUsers);

function getUsers() {
    fetch ("https://api.github.com/users")
    .then(res => res.json())
    .then(data => outputUsers(data))
}

function outputUsers(data) {
    let output = "";
    data.forEach(user => {
        output += `<li>Login: <strong>${user.login}</strong>, image: <strong>${avatar_url}</strong></li>`
    })
    document.querySelector("#output").textContent = output;
}
