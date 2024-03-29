import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";


function User() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  console.log(id)

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => setUser(res.data))
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, [id]);
  return (
    <div>
      {loading && <div>Loading...</div>}
      <h1>User Detail</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      {!loading && <code>{JSON.stringify(user)}</code>}
      <p>id: {id}</p>
      <Link to={`/users/${parseInt(id) + 1}`}>
        Next User ({parseInt(id) + 1})
      </Link>
    </div>
  );
}

export default User;
