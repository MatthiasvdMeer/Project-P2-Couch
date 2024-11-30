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

function showCurrentDate() {
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('nl-NL', options);
    document.getElementById('dateDisplay').textContent = formattedDate;
}


window.onload = showCurrentDate;