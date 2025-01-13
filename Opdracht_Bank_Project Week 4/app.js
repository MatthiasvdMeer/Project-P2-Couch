
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
    const accountList = document.querySelector(".account-list");
    const newAccountButton = document.querySelector(".new-account-btn");
    const fromAccountSelect = document.getElementById("fromAccount");
    const toAccountSelect = document.getElementById("toAccount");
    const transferButton = document.getElementById("transferButton");

    // Voeg standaard rekeningen toe
    function initializeDefaultAccounts() {
        const defaultAccounts = [
            { name: "Personal account", balance: 1000 },
            { name: "Savings", balance: 500 },
        ];

        defaultAccounts.forEach((account) => {
            const newAccount = document.createElement("div");
            newAccount.classList.add("account-item");
            const accountLabel = document.createElement("label");
            accountLabel.textContent = account.name;
            const accountButton = document.createElement("button");
            accountButton.classList.add("account-balance");
            accountButton.textContent = `€${account.balance.toFixed(2)}`;
            accountButton.dataset.balance = account.balance;
            accountButton.dataset.name = account.name;

            newAccount.appendChild(accountLabel);
            newAccount.appendChild(accountButton);
            accountList.appendChild(newAccount);
        });
    }

    // Voeg nieuwe rekening toe
    newAccountButton.addEventListener("click", () => {
        const accountName = prompt("Voer de naam van de nieuwe rekening in:");
        const accountBalance = parseFloat(prompt("Voer het startsaldo in:"));

        if (accountName && !isNaN(accountBalance)) {
            const newAccount = document.createElement("div");
            newAccount.classList.add("account-item");
            const accountLabel = document.createElement("label");
            accountLabel.textContent = accountName;
            const accountButton = document.createElement("button");
            accountButton.classList.add("account-balance");
            accountButton.textContent = `€${accountBalance.toFixed(2)}`;
            accountButton.dataset.balance = accountBalance;
            accountButton.dataset.name = accountName;

            newAccount.appendChild(accountLabel);
            newAccount.appendChild(accountButton);
            accountList.appendChild(newAccount);
            updateDropdowns();
            alert("Rekening toegevoegd!");
        } else {
            alert("Ongeldige gegevens ingevoerd.");
        }
    });

    // Geld overmaken
    transferButton.addEventListener("click", () => {
        const fromAccountName = fromAccountSelect.value;
        const toAccountName = toAccountSelect.value;
        const transferAmount = parseFloat(document.getElementById("transferAmount").value);

        if (!fromAccountName || !toAccountName || isNaN(transferAmount) || transferAmount <= 0) {
            alert("Vul alle velden correct in.");
            return;
        }

        if (fromAccountName === toAccountName) {
            alert("Kan geen geld overmaken naar dezelfde rekening.");
            return;
        }

        const fromAccount = [...document.querySelectorAll(".account-balance")].find(
            (button) => button.dataset.name === fromAccountName
        );
        const toAccount = [...document.querySelectorAll(".account-balance")].find(
            (button) => button.dataset.name === toAccountName
        );

        const fromBalance = parseFloat(fromAccount.dataset.balance);
        const toBalance = parseFloat(toAccount.dataset.balance);

        if (fromBalance < transferAmount) {
            alert("Onvoldoende saldo.");
            return;
        }

        // Saldo's bijwerken
        fromAccount.dataset.balance = fromBalance - transferAmount;
        fromAccount.textContent = `€${(fromBalance - transferAmount).toFixed(2)}`;
        toAccount.dataset.balance = toBalance + transferAmount;
        toAccount.textContent = `€${(toBalance + transferAmount).toFixed(2)}`;

        alert("Overdracht voltooid!");
    });

    // Werk de dropdowns bij
    function updateDropdowns() {
        const accounts = document.querySelectorAll(".account-balance");
        fromAccountSelect.innerHTML = "";
        toAccountSelect.innerHTML = "";

        accounts.forEach((account) => {
            const optionFrom = document.createElement("option");
            optionFrom.value = account.dataset.name;
            optionFrom.textContent = account.dataset.name;
            fromAccountSelect.appendChild(optionFrom);

            const optionTo = document.createElement("option");
            optionTo.value = account.dataset.name;
            optionTo.textContent = account.dataset.name;
            toAccountSelect.appendChild(optionTo);
        });
    }

    // Initialiseer standaardrekeningen en dropdowns
    initializeDefaultAccounts();
    updateDropdowns();
});

















//Datum rechtsonderin de footer, laat current date zien.
function showCurrentDate() {
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-EN', options);
    document.getElementById('dateDisplay').textContent = formattedDate;
}


window.onload = showCurrentDate;