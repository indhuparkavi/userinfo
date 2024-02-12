import { useEffect } from "react";
import "./App.css";
import { ViewUser } from "./module/user/viewer";
import Emitter from "./emitter";

function App() {
  useEffect(() => {
    Emitter.subscribe("error", (newMessage: string) => {
      if (newMessage) {
        alert("Try again later");
      }
    });
  }, []);

  return <div className="app">
    <ViewUser />;
  </div>
}

export default App;
