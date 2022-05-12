import logo from "./logo.svg";
import "./App.css";
import { UseState } from "./components/UseState/UseState";
import { UseReducer } from "./components/UseState/UseReducer/UseReducer";
import { ObjectUseState } from "./components/Immutable State/ObjectUseState";
import { ArrayUseState } from "./components/Immutable State/ArrayUseState";
import { Parent } from "./components/Parent Child/Parent";
import { ParentOne } from "./components/Optimization/ParentOne";
import { ChildOne } from "./components/Optimization/ChildOne";
import { GrandParent } from "./components/Optimization/GrandParent";
import { ParentTwo } from "./components/Optimization/ParentTwo";
import { ParentThree } from "./components/Incorrect Optimization/ParentThree";

function App() {
  return (
    <div className="App">
      {/* <UseState /> */}
      {/* <UseReducer /> */}
      {/* <ObjectUseState /> */}
      {/* <ArrayUseState /> */}
      {/* <Parent /> */}
      {/* <ParentOne>
        <ChildOne />
      </ParentOne> */}
      {/* <GrandParent /> */}
      {/* <ParentTwo /> */}
      <ParentThree />
    </div>
  );
}

export default App;
