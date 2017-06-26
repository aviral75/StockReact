import React, { Component } from 'react';
import './App.css';
import Stock from './Components/Stock';
import $ from 'jquery';
import Toggle from './Components/Toggle'; 

class App extends Component {

  constructor(){
  super();
  this.state = {
      stocks: [],
      symbols:[
          "MSFT","TWLO","AMD","AMZN","GOOGL","AAPL"
      ]
    };
  }

  componentWillMount() {

    const listItems = this.state.symbols.map((symbl) =>
     $.get('https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol='+symbl+'&apikey=LMESVCWE9IGDQ3HU').done((loadedData) => {
            this.setState({ 
                        stocks: this.state.stocks.concat([loadedData])
            })
    })
  );    
   

  //  $.get('https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=TWLO&apikey=LMESVCWE9IGDQ3HU').done((loadedData) => {
  //           this.setState({ 
  //                       stocks: this.state.stocks.concat([loadedData])
  //           })
  //   });

  //    $.get('https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=AMD&apikey=LMESVCWE9IGDQ3HU').done((loadedData) => {
  //           this.setState({ 
  //                       stocks: this.state.stocks.concat([loadedData])
  //           })
  //   });
  }
  render() {
    return (
      <div className="App">
        Stock App
        <Stock stocks={this.state.stocks}/>
        <Toggle />
      </div>
    );
}
}
export default App;
