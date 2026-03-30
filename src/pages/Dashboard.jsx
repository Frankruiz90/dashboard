import React, { useMemo, useState } from "react";
import { useUsers } from "../hooks/useUsers";

export default function Dashboard() {
  const { users, loading } = useUsers();
  const [search, setSearch] = useState("");
  const filteredUsers = useMemo(() => {
    return users.filter((user) =>
      user.name.toLowerCase().includes(search.toLocaleLowerCase()),
    );
  }, [users, search]);
  if (loading) return <p>Loading ...</p>;
  return (
    <div>
      <h1>Users</h1>
      <input
        placeholder="search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {filteredUsers.map((user) => (
        <div key={user.id}>s{user.name}</div>
      ))}
    </div>
  );
}
