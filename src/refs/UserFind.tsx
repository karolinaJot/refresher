import { useState, useRef, useEffect } from "react";

const users = [
  { name: "Maciej", age: 30 },
  { name: "Ola", age: 23 },
  { name: "Tom", age: 35 },
];

const UserFind = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState("");
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  useEffect(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.focus();
  }, []);

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
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
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
