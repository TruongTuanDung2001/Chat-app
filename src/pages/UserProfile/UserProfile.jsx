import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserById } from "../../api/api";

//
export default function UserProfilePage() {
  const { id } = useParams();
  const [user, setUser] = useState([]);
  useEffect(() => {
    async function fetchUser() {
      try {
        const data = await getUserById(id);
        if (!data) throw new Error("No data user");
        setUser(data);
      } catch (error) {
        throw error;
      }
    }

    //
    fetchUser();
  }, [id]);

  //
  if(!user) return <div><h1>Loading...</h1></div>
  //
  return (
    <div>
      <h1 className="text-center font-bold text-xl p-4">INFORMATION USER</h1>
      <div key={user.id} className="border border-2 p-4 bg-amber-200">
        <img src={user.avatar} alt={user.name} />
        <h3>Name user: {user.name}</h3>
        <h3>Email user: {user.email}</h3>
        <p>Name user: {user.bio}</p>
      </div>
    </div>
  );
}
