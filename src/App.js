import Header from "./Header/Header";
import Main from "./MainComp/Main";
import Footer from "./Footer";
import Contact from "./Contact/Contact";
import Feedback from "./FeedBack/Feedback";
import Login from "./Login/Login"
import Logout from "./Logout/Logout"
import Log from "./Login/Log"
import { createContext, useReducer } from 'react'

import { initialState, reducer } from './Reducer/UseReducer'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export const UserContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <Router>
          <Header />
          <Switch>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/feedback">
              <Feedback />
            </Route>
            <Route path="/Login">
              <Login />
            </Route>
            <Route path="/Signup">
              <Log />
            </Route>
            <Route exact path="/Logout">
              <Logout />
            </Route>
            <Route exact path="/" >
              <Main />
            </Route>
          </Switch>
          <Footer />

        </Router>
      </UserContext.Provider>
    </>
  );
}

export default App;
