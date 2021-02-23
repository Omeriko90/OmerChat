import "./App.css";
import Chat from "components/Chat/Chat";

function App(props) {
  console.log(props.users);
  return (
    <div className="App">
      <h1 style={{ color: "#009688" }}>Omer Chat</h1>
      <div
        style={{
          position: "absolute",
          margin: "0 auto",
          position: "relative",
        }}
      >
        <Chat />
      </div>
    </div>
  );
}

export default App;
