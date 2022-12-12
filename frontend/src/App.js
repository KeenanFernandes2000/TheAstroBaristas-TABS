// "Krishna's imports"
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomeScreen from "./HomeScreen";
import AboutScreen from "./AboutScreen";
import LayoutRoute from "./LayoutRoute";
// "Krishna's imports end"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <LayoutRoute path="/" exact={true} component={HomeScreen} />
        <LayoutRoute path="/about" exact={true} component={AboutScreen} />
      </Switch>
    </BrowserRouter>
  );
}

// import logo from "./logo.svg";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>

//       {/* Jay */}

//       {/* Krishna */}

//       {/* Keenan */}
//     </div>
//   );
//}

export default App;
