import { useState } from "react";

const users = [
  { name: "Maciej", age: 30 },
  { name: "Ola", age: 23 },
  { name: "Tom", age: 35 },
];

const UserFind = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });

    // console.log(foundUser);
    setUser(foundUser);
  };

  return (
    <div>
      User Search
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Find User</button>
      <div>
        {/* {user?.name} */}
        {user && user.name}
        {user && user.age}
      </div>
    </div>
  );
};

export default UserFind;
