import { useEffect, useState } from "react";
import { getUsers } from "../../api/api";

//
export default function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function fetchUsers() {
      try {
        const data = await getUsers();
        if (!data) return;
        setUsers(data);
      } catch (error) {
        throw error;
      }
    }
    
    //
    fetchUsers();
  }, []);
  return (
    <div className="list-users">
        <h1 className="text-xl font-bold text-center p-2">LIST USERS PAGE</h1>
      {users.map((u) => (
        <div key={u.id} className="border border-2 my-4 p-4 bg-amber-200">
            <img src={u.avatar} alt={u.name} />
            <h3>Name user: ${u.name}</h3>
            <h3>Email user: ${u.email}</h3>
            <h5>Bio: ${u.bio}</h5>
        </div>
      ))}
    </div>
  );
}
