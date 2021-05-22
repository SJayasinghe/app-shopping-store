import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import {Route} from 'react-router-dom';
import Header from './shared/Navigation/Header'
import Section from './shared/Navigation/Section'
import {DataProvider} from './Products/components/Context'
import PaymentGateway from './Payment/payment-gateway';

class App extends React.Component{
  render(){
    return(
      <DataProvider>
        <div className="app">
          <Router>
            <Section />
            <Route path="/payment" exact>
              <PaymentGateway />
            </Route>
          </Router>
        </div>
      </DataProvider>
    );
  }
}

export default App;
