import { createRoot } from "react-dom/client";
import GuestList from "./state/GuestList";
import UserFind from "./state/UserFind";
import EventComponent from "./events/EventComponent";

const element = document.getElementById("root");
const root = createRoot(element!);

const App = () => {
  return (
    <div>
      <UserFind />
      <br />
      <EventComponent />
    </div>
  );
};

root.render(<App />);
