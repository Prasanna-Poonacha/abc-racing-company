import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { Racers } from './components/Racers';
import { Schedules } from './components/Schedules';
import { ContactUs } from './components/ContactUs';
import { Footer } from './components/Footer';
import { SignIn } from './components/SignIn';
import { SignUp } from './components/SignUp';
import { Gallery } from './components/Gallery';

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <div>
          <Switch>
            <Route exact path="/abc-racing-company" component={Home} />
            <Route exact path="/abc-racing-company/schedules" component={Schedules} />
            <Route exact path="/abc-racing-company/racers" component={Racers} />
            <Route exact path="/abc-racing-company/signin" component={SignIn} />
            <Route exact path="/abc-racing-company/signup" component={SignUp} />
            <Route exact path="/abc-racing-company/gallery" component={Gallery} />
            <Route exact path="/abc-racing-company/contact" component={ContactUs} />
            {/* <Home />
            <Racers />
            <Schedules />
            <ContactUs />
            <Footer /> */}
          </Switch>
        </div>
        <Footer />
      </Fragment>
    </Router>
  );
}

export default App;
