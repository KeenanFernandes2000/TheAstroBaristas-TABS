// "Krishna's imports"
import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import AboutScreen from "./pages/AboutScreen";
import LayoutRoute from "./LayoutRoute";
// "Krishna's imports end"
import GuestLayoutRoute from "./GuestLayoutRoute";
import RegistrationScreen from "./pages/RegistrationScreen";
import LoginScreen from "./pages/LoginScreen";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <LayoutRoute path="/" exact={true} component={HomeScreen} />
        <LayoutRoute path="/about" exact={true} component={AboutScreen} />
        {/* <LayoutRoute path="/contact" exact={true} component={ContactScreen} /> */}
        <GuestLayoutRoute
          path="/register"
          exact={true}
          component={RegistrationScreen}
        />
        <GuestLayoutRoute path="/login" exact={true} component={LoginScreen} />
      </Switch>
    </BrowserRouter>
  );
}

// import logo from "./logo.svg";
//
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
