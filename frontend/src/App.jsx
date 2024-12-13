import { useState } from "react";
import ChatScreen from "./screens/ChatScreen";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ChatScreen />
    </>
  );
}

export default App;
