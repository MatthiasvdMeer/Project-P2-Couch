
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

document.addEventListener("DOMContentLoaded", () => {
    const newAccountButton = document.querySelector(".new-account-btn");
    const accountList = document.querySelector(".account-list");

    newAccountButton.addEventListener("click", () => {
        const accountName = prompt("Voer de naam van de nieuwe rekening in:");
        const accountBalance = prompt("Voer het startsaldo in:");

        if (accountName && accountBalance) {
            const newAccountItem = document.createElement("div");
            newAccountItem.classList.add("account-item");

            const accountNameElement = document.createElement("span");
            accountNameElement.classList.add("account-name");
            accountNameElement.textContent = accountName;

            const accountBalanceElement = document.createElement("span");
            accountBalanceElement.classList.add("account-balance");
            accountBalanceElement.textContent = ` €${parseFloat(accountBalance).toFixed(2)}`;

            newAccountItem.appendChild(accountNameElement);
            newAccountItem.appendChild(accountBalanceElement);
            accountList.appendChild(newAccountItem);

            alert("Nieuwe rekening succesvol toegevoegd!");
        } else {
            alert("Rekeninggegevens zijn niet volledig ingevuld.");
        }
    });
});


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
    const formattedDate = date.toLocaleDateString('en-EN', options);
    document.getElementById('dateDisplay').textContent = formattedDate;
}


window.onload = showCurrentDate;

