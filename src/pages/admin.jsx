import React, { useState } from "react";
import usersData from "../../data/users.json";

export default function AdminPanel() {
  const [users, setUsers] = useState(usersData);
  const [mobile, setMobile] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("user");

  const addUser = () => {
    if (!mobile || !name) return;

    setUsers({
      ...users,
      [mobile]: { name, role }
    });

    setMobile("");
    setName("");
  };

  return (
    <div style={{ maxWidth: 700, margin: "50px auto" }}>
      <h2>Admin Panel – Manage Users</h2>

      <input
        placeholder="Mobile Number"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />

      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="user">User</option>
        <option value="internal">Internal</option>
        <option value="admin">Admin</option>
      </select>

      <button onClick={addUser}>Add / Update</button>

      <h3>Current Users</h3>
      <pre>{JSON.stringify(users, null, 2)}</pre>

      <p>
        📌 Copy this JSON into <code>data/users.json</code>
      </p>
    </div>
  );
}
