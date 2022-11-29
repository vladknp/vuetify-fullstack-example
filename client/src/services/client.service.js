class ClientService {
  getAllClients() {
    return fetch("/clients").then((res) => res.json());
  }
}

export default new ClientService();
