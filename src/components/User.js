import React, { useState } from "react";

const User = ({ name, location }) => {
  const [count, setCount] = useState(0);
  return (
    <div className="user">
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Count:{count}</button>
      <h3>{name}</h3>
      <h3>{location}</h3>
    </div>
  );
};

export default User;
