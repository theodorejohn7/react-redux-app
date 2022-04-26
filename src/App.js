import store from "./redux-demo/store";
import { Provider } from "react-redux";

import "./App.css";
import UserContainer from "./components/UserContainer";
 

function App() {
  return (
    <Provider store={store}>
      <div className="App">
       
      <UserContainer />
      
      </div>
    </Provider>
  );
}

export default App;
