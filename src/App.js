import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
let name = "Akash";
function App() {
  return (
    <>
      <Navbar title="textUtils2" aboutText="know_more" />
      <div className="container my-3">
      <TextForm heading = "Here comes the heading"/>
      </div>
     
    </>
  );
}

export default App;
