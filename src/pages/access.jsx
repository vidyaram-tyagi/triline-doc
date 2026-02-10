import React, { useState } from "react";
import users from "../../data/users.json";

export default function Access() {
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");

  const submit = () => {
    const user = users[mobile];

    if (!user) {
      setError("Access denied");
      return;
    }

    localStorage.setItem("role", user.role);
    localStorage.setItem("name", user.name);

    window.location.href = `/${user.role}/docs/tutorial-basics`;
  };

  return (
    <div style={{ marginTop: 100, textAlign: "center" }}>
      <h2>Enter Mobile Number</h2>

      <input
        placeholder="Mobile number"
        onChange={(e) => setMobile(e.target.value)}
      />

      <button onClick={submit}>Continue</button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
