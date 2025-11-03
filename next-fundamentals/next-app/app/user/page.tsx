import React from "react";

interface Users {
  id: number;
  name: String;
}

const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store", // don't use cache
    next: { revalidate: 122 }, // time limit of the freshness of the data
  });
  const users: Users[] = await res.json();
  return (
    <div>
      <h1>users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;
