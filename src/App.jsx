import './App.css'
import ProductTab from "./ProductTab.jsx";
import Msg from './Msg.jsx';

function App() {
  return (
  <>
  <ProductTab />
  <Msg userName="Favas" textColor="green"/>
  <Msg userName="person2" textColor="red"/>
  <Msg userName="Person3" textColor="blue"/>
  </>
)
}

export default App
