let accessToken = localStorage.getItem("token") || "";

// Auto login if token exists
if (accessToken) {
    document.getElementById("login-section").style.display = "none";
    document.getElementById("ticket-section").style.display = "block";
    loadTickets();
}

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    fetch("http://127.0.0.1:8000/api/token/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
    })
    .then(res => res.json())
    .then(data => {
        if (data.access) {
            accessToken = data.access;
            localStorage.setItem("token", accessToken);
            document.getElementById("login-section").style.display = "none";
            document.getElementById("ticket-section").style.display = "block";
            loadTickets();
        } else {
            document.getElementById("login-message").innerText = "Invalid login!";
        }
    });
}

function logout() {
    localStorage.removeItem("token");
    location.reload();
}

function createTicket() {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const category = document.getElementById("category").value;
    const priority = document.getElementById("priority").value;

    fetch("http://127.0.0.1:8000/tickets/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + accessToken
        },
        body: JSON.stringify({
            title,
            description,
            category,
            priority,
            status: "open"
        })
    })
    .then(() => loadTickets());
}

function loadTickets() {
    fetch("http://127.0.0.1:8000/tickets/", {
        headers: {
            "Authorization": "Bearer " + accessToken
        }
    })
    .then(res => res.json())
    .then(data => {
        const tickets = data.results || data;
        const container = document.getElementById("ticket-list");
        container.innerHTML = "";

        tickets.forEach(ticket => {
            const div = document.createElement("div");
            div.className = `ticket-card priority-${ticket.priority}`;
            div.innerHTML = `
                <h4>${ticket.title}</h4>
                <p>${ticket.description}</p>
                <small>Category: ${ticket.category}</small><br>
                <small>Priority: ${ticket.priority}</small><br><br>
                <button class="btn-danger" onclick="deleteTicket(${ticket.id})">Delete</button>
            `;
            container.appendChild(div);
        });
    });
}

function deleteTicket(id) {
    fetch(`http://127.0.0.1:8000/tickets/${id}/`, {
        method: "DELETE",
        headers: {
            "Authorization": "Bearer " + accessToken
        }
    })
    .then(() => loadTickets());
}