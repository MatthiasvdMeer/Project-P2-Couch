
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

document.addEventListener("DOMContentLoaded", () => {
    const fromAccountSelect = document.getElementById("fromAccount");
    const toAccountSelect = document.getElementById("toAccount");
    const transferButton = document.getElementById("transferButton");
    const transactionHistory = document.getElementById("transactionHistory");

    // Geld overmaken
    transferButton.addEventListener("click", () => {
        const fromAccount = fromAccountSelect.value;
        const toAccount = toAccountSelect.value;
        const amount = parseFloat(document.getElementById("transferAmount").value);

        if (!fromAccount || !toAccount || isNaN(amount) || amount <= 0) {
            alert("Vul alle velden correct in.");
            return;
        }

        if (fromAccount === toAccount) {
            alert("Kan geen geld overmaken naar dezelfde rekening.");
            return;
        }

        // Log transactie
        logTransaction(fromAccount, toAccount, amount);
    });

    // Transactiegeschiedenis loggen
    function logTransaction(fromAccount, toAccount, amount) {
        const transactionItem = document.createElement("li");
        const timestamp = new Date().toLocaleString();

        transactionItem.textContent = `${timestamp}: Overgemaakt van ${fromAccount} naar ${toAccount} - Bedrag: €${amount.toFixed(2)}`;
        transactionHistory.appendChild(transactionItem);
    }
});


//Datum rechtsonderin de footer, laat current date zien.
function showCurrentDate() {
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-EN', options);
    document.getElementById('dateDisplay').textContent = formattedDate;
}
document.addEventListener("DOMContentLoaded", () => {
    const investmentTypeSelect = document.getElementById("investmentType");
    const investmentItemSelect = document.getElementById("investmentItem");
    const investmentAmountInput = document.getElementById("investmentAmount");
    const buyButton = document.getElementById("buyInvestmentButton");
    const sellButton = document.getElementById("sellInvestmentButton");
    const priceChangesList = document.getElementById("priceChangesList");

    const investments = {
        Stock: [
            { name: "AAPL (Apple)", price: 150 },
            { name: "GOOGL (Alphabet)", price: 2800 },
        ],
        Crypto: [
            { name: "Bitcoin", price: 40000 },
            { name: "Ethereum", price: 3000 },
        ],
    };

    const userPortfolio = [];

    function updateInvestmentItems() {
        const type = investmentTypeSelect.value;
        const items = investments[type];
        investmentItemSelect.innerHTML = "";
        items.forEach((item) => {
            const option = document.createElement("option");
            option.value = item.name;
            option.textContent = `${item.name} (€${item.price.toFixed(2)})`;
            option.dataset.price = item.price;
            investmentItemSelect.appendChild(option);
        });
    }

    function handleTransaction(type) {
        const selectedItem = investmentItemSelect.selectedOptions[0];
        const amount = parseFloat(investmentAmountInput.value);
        const balanceElement = document.querySelector(
            `.account-balance[data-name="Personal account"]`
        );

        if (!selectedItem || isNaN(amount) || amount <= 0) {
            alert("Vul alle velden correct in.");
            return;
        }

        const itemName = selectedItem.value;
        const itemPrice = parseFloat(selectedItem.dataset.price);
        const totalCost = amount * itemPrice;
        const balance = parseFloat(balanceElement.dataset.balance);

        if (type === "buy" && balance < totalCost) {
            alert("Onvoldoende saldo.");
            return;
        }

        // Aankoop of verkoop verwerken
        const portfolioItem = userPortfolio.find((item) => item.name === itemName);
        if (type === "buy") {
            balanceElement.dataset.balance = balance - totalCost;
            balanceElement.textContent = `€${(balance - totalCost).toFixed(2)}`;
            if (portfolioItem) {
                portfolioItem.amount += amount;
            } else {
                userPortfolio.push({ name: itemName, amount, price: itemPrice });
            }
            alert("Investering gekocht!");
        } else if (type === "sell") {
            if (!portfolioItem || portfolioItem.amount < amount) {
                alert("Onvoldoende hoeveelheid in portefeuille.");
                return;
            }
            balanceElement.dataset.balance = balance + totalCost;
            balanceElement.textContent = `€${(balance + totalCost).toFixed(2)}`;
            portfolioItem.amount -= amount;
            if (portfolioItem.amount === 0) {
                userPortfolio.splice(userPortfolio.indexOf(portfolioItem), 1);
            }
            alert("Investering verkocht!");
        }
        updatePortfolioList(); // Hier wordt de portefeuille bijgewerkt
    }

    function updatePortfolioList() {
        const portfolioList = document.getElementById("portfolioList");
        portfolioList.innerHTML = ""; // Wis de huidige lijst
    
        if (userPortfolio.length === 0) {
            const li = document.createElement("li");
            li.textContent = "Geen investeringen in portefeuille.";
            portfolioList.appendChild(li);
        } else {
            userPortfolio.forEach((item) => {
                const li = document.createElement("li");
                li.textContent = `${item.name}: ${item.amount} stuks à €${item.price.toFixed(2)}`;
                portfolioList.appendChild(li);
            });
        }
    }
    

    function simulatePriceChanges() {
        const type = investmentTypeSelect.value;
        const items = investments[type];
        priceChangesList.innerHTML = "";
        items.forEach((item) => {
            const priceChange = (Math.random() - 0.5) * 0.1 * item.price;
            item.price += priceChange;
            const li = document.createElement("li");
            li.textContent = `${item.name}: €${item.price.toFixed(2)} (${priceChange > 0 ? "+" : ""}${priceChange.toFixed(2)})`;
            priceChangesList.appendChild(li);
        });
        updateInvestmentItems();
    }

    investmentTypeSelect.addEventListener("change", updateInvestmentItems);
    buyButton.addEventListener("click", () => handleTransaction("buy"));
    sellButton.addEventListener("click", () => handleTransaction("sell"));

    setInterval(simulatePriceChanges, 5000); // Simuleer prijsveranderingen elke 5 seconden
    updateInvestmentItems();
});


window.onload = showCurrentDate;