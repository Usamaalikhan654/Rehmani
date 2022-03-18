import React from 'react'
import Home from './pages/Home/home';
import Get from './pages/Get In Touch/Get';
import { BrowserRouter as Router, Route, Switch , Redirect } from "react-router-dom";
import Amenit from './pages/Amenities/Amenit';
import project from './pages/Projects/project';
import ScrollToTop from 'react-router-scroll-top';
import Contact from './pages/Contact Us/Contact';



function RouterLink() {
  return (
      <>
    <Router>
      <Switch>
      <ScrollToTop>
        <Route exact path='/' component={Home}/>
        <Route exact path='/get' component={Get}/>
        <Route exact path='/amenities' component={Amenit}/>
        <Route exact path='/project' component={project}/>
        <Route exact path='/contact' component={Contact}/>
        </ScrollToTop>
      </Switch>
    </Router>
</>
  )
}

export default RouterLink;