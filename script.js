var test="username" //test

function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Liste des utilisateurs
    var sylow = {
        username: "sylow",
        password: "123"
    };
    var tom = {
        username: "tom",
        password: "123"
    };

    // condition si l'user est bon
    if ((username === sylow.username && password === sylow.password)||(username === tom.username && password === tom.password)) {
        // redirect sur la page menu
        window.location.href = "menu.html";
        test=username
    } else {
        // si l'user est invalid
        window.location.href = "index.html";
    }
}
//jessaie de faire en sorte que username et remplacer par le nom de l'utilisateur. (MENU.HTML)
document.querySelector('.prout').innerHTML = username;
