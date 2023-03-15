import './App.css'
import Stylings from "./components/Stylings"
import 'bootstrap/dist/css/bootstrap.min.css'
import ListsandKeys from './components/ListsandKeys'
import ClassComp from './components/ClassComp'
import ConditionalRender from './components/ConditionalRender'
import ContactUs from './components/ContactUs'
import LifeCycleMethods from './components/LifeCycleMethods'

const App=()=>{
  return(
    <div className="App">
      <h2>Welcome to React</h2>
      {/* <Stylings /> */}
      {/* <ListsandKeys title="ListsandKeys" items="10" /> */}
      {/* <ClassComp title="classComponent" /> */}
      {/* <ConditionalRender /> */}
      {/* <ContactUs /> */}
      <LifeCycleMethods />
    </div>
  )
}

export default App;