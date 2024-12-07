
//login wachtwoorden en usernames, alleen deze kunnen naar hun eigen pagina.
function login(){
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

if(username == "AdminUser" && password == "Admin123"){
    alert("If you're not a thief, Welcome in the Couch!");
    window.location.href = ("Admin.html")
}
 else if(username == "ParentUser" && password == "Parents123"){
    alert("If you're not a thief, Welcome in the Couch!");
    window.location.href = ("User1.html")
}
else if(username == "TeacherUser" && password == "Teacher123"){
    alert("If you're not a thief, Welcome in the Couch!");
    window.location.href = ("User2.html")
}

else{
    alert("DO IT AGAIN!!! YOU DID IT WRONG!!!!.");
        
}
}

//nieuw account aanmaken
let clickCount = 0;

document.getElementById("Btn").addEventListener("click", function() {
    clickCount++;
    const div1 = document.getElementById("r4");
    const div2 = document.getElementById("r5");

    if (clickCount === 1) {
        div1.style.display = "block";
        div2.style.display = "none";
    } else if (clickCount === 2) {
        div1.style.display = "block";
        div2.style.display = "block";
    }
});

//Datum rechtsonderin de footer, laat current date zien.
function showCurrentDate() {
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('nl-NL', options);
    document.getElementById('dateDisplay').textContent = formattedDate;
}


window.onload = showCurrentDate;