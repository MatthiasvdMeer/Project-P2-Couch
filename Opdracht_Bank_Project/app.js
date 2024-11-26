function login(){
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if(username == "AdminUser" && password == "Admin123"){
        alert("Welcome in the Couch!");
        window.location.href = ("page1.html")
}
    else{
        alert("Please try again.");
        
}
}

function showCurrentDate() {
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('nl-NL', options);
    document.getElementById('dateDisplay').textContent = formattedDate;
}


window.onload = showCurrentDate;