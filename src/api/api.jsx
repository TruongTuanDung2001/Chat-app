const API_URL = "http://localhost:3001";

// Get all users api
async function getUsers() {
  try {
    const response = await fetch(`${API_URL}/users`);

    if (!response.ok) throw new Error("No get data users");

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

// Get user by id_user
async function getUserById(id_user) {
  try {
    const response = await fetch(`${API_URL}/${id_user}}`);
    if (!response.ok) throw new Error("Get user by id fails");
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

//end
export { getUsers };
