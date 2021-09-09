//internal imports
import './App.css';
import OpenTorque from "./OpenTorque";
import CloseTorque from "./CloseTorque";

function App() {
  return (
    <div >
      <div className="GraphItem"> <OpenTorque/></div>
      <div className="GraphItem"> <CloseTorque/></div>

   
    </div>
  );
}

export default App;
