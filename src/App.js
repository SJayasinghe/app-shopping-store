import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import Header from './shared/Navigation/Header'
import Section from './shared/Navigation/Section'
import DeliveryDetails from './DeliveryDetails/DeliveryDetails'
import {DataProvider} from './Products/components/Context'


class App extends React.Component{
  render(){
    return(
      <DataProvider>
        <div className="app">
          <Router>
            <Header />
            <Section />
            
          </Router>
          <Router>
            <DeliveryDetails/>
          </Router>


        
        </div>
      </DataProvider>
    );
  }
}

export default App;
