interface ChildProps {
  color: string;
  onClick: () => void;
  children: React.ReactNode;
}

export const Child = ({ color, onClick, children }: ChildProps) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>Click me</button>
    </div>
  );
};

Child.displayName = "it works?";

export const ChildFC: React.FC<ChildProps> = ({ color, onClick, children }) => {
  return (
    <div>
      <button onClick={onClick}>Click me</button>
      {color}
    </div>
  );
};

ChildFC.displayName = "this works fine";
