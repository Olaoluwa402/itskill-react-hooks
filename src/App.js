import './App.css';
import Router from './Router'
import { Provider } from './components/ContextAPI/ContextAPI';
import ParentComponent from './components/ContextAPI/ParentComponent';
function App() {
   const user = {firstName:'John', lastName:'Boe', email:'link@example.com'}
   const lists = [1,2,3,4,5]

   const GlobalData = {user:user, lists:lists}
  return (
    <div className="App">
      {/* 2. step to context setup - provide a value to the context provider */}
      <Provider value={GlobalData}>
        <ParentComponent />
        {/* <Router /> */}
      </Provider>
    </div>
  );
}

export default App;
