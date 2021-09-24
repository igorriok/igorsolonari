import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import HomePage from './pages/homepage/HomePage';
import ContactsPage from "./pages/contacts/ContactsPage";
import Toolbar from "./elements/toolbar/Toolbar";
import './App.css';

function App() {
  
  const [ lang, setLang ] = useState<string>(localStorage.getItem('lang') || "EN");
  
  
  return (
    <div className="App">
  
      <Router>
    
        <Toolbar
            lang={lang}
            setLang={setLang}
        />
    
        <div className="appContent">
      
          <Switch>
        
            <Route exact path="/home">
              <HomePage
                  lang={lang}
              />
            </Route>
        
            <Route exact path="/contacts">
              <ContactsPage
                  lang={lang}
              />
            </Route>
        
        
            <Route path="*">
              <Redirect to="/home"/>
            </Route>
      
          </Switch>
    
        </div>
  
      </Router>
      
    </div>
  );
}

export default App;
