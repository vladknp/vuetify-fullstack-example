class ClientService {
  getAll() {
    return fetch("/clients")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return [];
      })
      .catch(console.error);
  }

  updateById(clientId, payload) {
    const { phone, ...otherKeys } = payload;
    if (Object.keys(otherKeys).length > 0) {
      throw new Error(`Доступні ключі ['phone']`);
    }
    return fetch(`/clients/${clientId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phone }),
    });
  }
}

export default new ClientService();
