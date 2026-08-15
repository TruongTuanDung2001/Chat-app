const API_URL = "http://localhost:3001";

async function getUsers() {
    try {
        const response = await fetch(`${API_URL}/users`);

        if(!response.ok) throw new Error("No get data users");
        
        const data = await response.json();        
        return data;
    } catch (error) {
        throw error;
    }
}

export { getUsers };
