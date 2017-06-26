import React, { Component } from 'react';
import StockItem from './StockItem';


class Stock extends Component {
constructor(){
    super();
    this.state={
        stockItem:{}
    }
}

  render() {
      console.log(this.props.stocks);

var stockItems= this.props.stocks.map(stock =>{
    return( 
      stock["Realtime Global Securities Quote"]
    );
})

  
 
 

if(stockItems !==undefined && stockItems[0]!==undefined && stockItems[0]["01. Symbol"]){
return (
      <div className="Stock">
     {

  <div id="table" className="row row-content">
    <div className="col-xs-12 col-sm-10">
        <h2>Stock Information</h2>
         <div className="table-responsive">
            <table className="table table-bordered">
            <tr>
                <th>Name</th>
                <th>symbl</th>
                <th>price</th>
                <th>price change</th>
                <th>% change</th>
                <th>volume</th>
                <th>last updated</th>
            </tr>

         {stockItems.map(function(stockItem, index){
               return <tr key={stockItem["01. Symbol"]}>
                
                 <td> {stockItem["01. Symbol"] + "??"}</td>
                <td> {stockItem["01. Symbol"]}</td>
                <td> {stockItem["03. Latest Price"]}</td>
                <td> {stockItem["08. Price Change"]}</td>
                <td> {stockItem["09. Price Change Percentage"]}</td>
                <td> {stockItem["10. Volume (Current Trading Day)"]}</td>
                <td> {stockItem["11. Last Updated"]}</td>
                </tr>;
                  })}
                    
            </table>
        </div>
    </div>

    
</div>
     
        }
      </div>
    );
}else{
return (
      <div className="Stock">
        Stock Table Empty
        <StockItem/>

    <div id="table" className="row row-content">
    <div className="col-xs-12 col-sm-10">
        <h2>Stock Information</h2>
         <div className="table-responsive">
            <table className="table table-bordered">
            <tr>
                <th>Name</th>
                <th>symbl</th>
                <th>price</th>
                <th>price change</th>
                <th>% change</th>
                <th>volume</th>
                <th>last updated</th>
            </tr>
                <tr>
                 <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                </tr>
                    
            </table>
        </div>
    </div>
</div>

      </div>


    );
}
    
  }
}

export default Stock;