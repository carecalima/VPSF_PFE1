// This file manages client-related functionalities.
// It includes functions for adding, updating, and deleting client information, as well as displaying the client list.

const clients = [];

function addClient(name, email) {
    const client = { id: clients.length + 1, name, email };
    clients.push(client);
    displayClients();
}

function updateClient(id, name, email) {
    const client = clients.find(client => client.id === id);
    if (client) {
        client.name = name;
        client.email = email;
        displayClients();
    }
}

function deleteClient(id) {
    const index = clients.findIndex(client => client.id === id);
    if (index !== -1) {
        clients.splice(index, 1);
        displayClients();
    }
}

function displayClients() {
    const clientList = document.getElementById('client-list');
    clientList.innerHTML = '';
    clients.forEach(client => {
        const listItem = document.createElement('li');
        listItem.textContent = `${client.name} - ${client.email}`;
        clientList.appendChild(listItem);
    });
}

// Example usage
// addClient('John Doe', 'john@example.com');
// updateClient(1, 'John Smith', 'johnsmith@example.com');
// deleteClient(1);