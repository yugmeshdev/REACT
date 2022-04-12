import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import StyleSheet from "./components/StyleSheet";
import Inline from "./components/Inline";
import "./appStyles.css";
import styles from "./appStyles.module.css";
import Form from "./components/Form";
import LifeCycleA from "./components/LifeCycleA";
import FragmentDemo from "./components/FragmentDemo";
import Tables from "./components/Tables";
import PureComp from "./components/PureComp";
import ParentComp from "./components/ParentComp";
import RefsDemo from "./components/RefsDemo";
import Input from "./components/Input";
import FocusInput from "./components/FocusInput";
import FRInput from "./components/FRInput";

function App() {
  return (
    <div className="App">
      {/* <h1 className="error">Error</h1>
      <h1 className={styles.success}>Success</h1> */}
      {/* <Greet name="Bruce" heroName="Batman" >
        <p>This is children</p>
      </Greet>
      <Greet name="Chris" heroName="Superman">
        <button>Action</button>
      </Greet>
      
 
       <Welcome name="Chris" heroName="Superman"/> 
       <Welcome name="Jorden" heroName="Wonder woman"/>  */}
      {/* <Welcome />
     <Hello /> */}
      {/* <Message /> */}
      {/* <Counter /> */}
      {/* <Greet name="Jorden" heroName="Wonder woman"/>
     <Welcome name="Bruce" heroName="Batman" /> */}
      {/* <FunctionClick />
     <ClassClick /> */}

      {/* <EventBind /> */}
      {/* <ParentComponent /> */}
      {/* <UserGreeting /> */}
      {/* <NameList /> */}
      {/* <StyleSheet primary={false} /> */}
      {/* <Inline /> */}
      {/* <Form /> */}
      {/* <LifeCycleA /> */}
      {/* <FragmentDemo />
<Tables /> */}
      {/* <ParentComp /> */}
      {/* <RefsDemo /> */}
      {/* <Input /> */}
      {/* <FocusInput /> */}
      <FRInput />
    </div>
  );
}

export default App;
