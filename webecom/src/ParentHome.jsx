import React, { Component } from 'react';

import Card from './Components/Card/card';
import Introduction from './Components/Introduction/introDuction';
import LeftFilter from './Components/leftFilters/leftFilters';

class ParentHome extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <Introduction/>
          
          <div style={{marginBottom:"80px", marginLeft:"100px", marginRight:"100px"}}>
            <div className="row">
  
              {/* First Division */}
              <div className="col-md-3" style={{ borderRight: "0.2px solid grey"}}>
                <LeftFilter/>
              </div>
  
  
              {/* Second Division */}
              <div className="col-md-9">
              <ul style={{display:"block"}}>
                                  <li style={{display:"inline"}}><strong>SORT BY:</strong></li>
                                  <li style={{display:"inline", marginLeft:"20px"}}><a href="#">Price Low to High</a></li>
                                  <li style={{display:"inline", marginLeft:"20px"}}><a href="#">Price High to Low</a></li>
                                  <li style={{display:"inline", marginLeft:"20px"}}><a href="#">Alphabetically Low to High</a></li>
                                  <li style={{display:"inline", marginLeft:"20px"}}><a href="#">Alphabetically High to Low</a></li>
              </ul>
              <hr></hr>
  
              <div className="row" style={{marginBottom:"20px"}}>
              
              {/* Parent to Child Communication  */}
  
              <Card image="https://m.media-amazon.com/images/I/61l9ppRIiqL._SL1500_.jpg" name ="I Phone 10"  price ="Rs. 56,000"/>
              <Card image="https://images.samsung.com/is/image/samsung/p6pim/in/sm-e225flbdins/gallery/in-galaxy-f-sm-e225flbdins-sm-e---flbhins-470145911?$684_547_PNG$" name ="Samgsung 22"  price ="Rs. 11,999"/>
              <Card image="https://vlebazaar.in/image/cache/catalog//B073VLGL5Y/Mi-Max-2-Black-4GB-RAM-64GB-Storage-B073VLGL5Y-550x550h.jpg" name ="MI Max 2"  price ="Rs. 7,999"/>
              <Card image="https://images-eu.ssl-images-amazon.com/images/I/41jr5nrfFoL._SX300_SY300_QL70_FMwebp_.jpg" name ="Oppo Phone"  price ="Rs. 12,000"/>
              <Card image="https://m.media-amazon.com/images/I/61l9ppRIiqL._SL1500_.jpg" name ="I Phone 10"  price ="Rs. 56,000"/>
              <Card image="https://images.samsung.com/is/image/samsung/p6pim/in/sm-e225flbdins/gallery/in-galaxy-f-sm-e225flbdins-sm-e---flbhins-470145911?$684_547_PNG$" name ="Samgsung 22"  price ="Rs. 11,999"/>
              <Card image="https://vlebazaar.in/image/cache/catalog//B073VLGL5Y/Mi-Max-2-Black-4GB-RAM-64GB-Storage-B073VLGL5Y-550x550h.jpg" name ="MI Max 2"  price ="Rs. 7,999"/>
              <Card image="https://images-eu.ssl-images-amazon.com/images/I/41jr5nrfFoL._SX300_SY300_QL70_FMwebp_.jpg" name ="Oppo Phone"  price ="Rs. 12,000"/>
              </div>
  
              </div>
             
            </div>
          </div>   
            </React.Fragment>
         );
    }
}
 
export default ParentHome;