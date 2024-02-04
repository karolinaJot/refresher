import { Child } from "./Child";

const Parent = () => {
  return (
    <Child color="red" onClick={() => console.log("clicked")}>
      some kind of text
    </Child>
  );
};

export default Parent;
