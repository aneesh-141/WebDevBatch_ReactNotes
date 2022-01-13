import React, {Component} from 'react';

class Card extends Component{

    constructor(props) {
        super(props);
        this.state = {name: "I Phone 13",
                      image:"https://m.media-amazon.com/images/I/61l9ppRIiqL._SL1500_.jpg",
                      price:"Rs. 56,000"
    };
      }
      
    render(){
        return(

            <div className="col-md-3">
                <div className="card" style={{marginTop:"12px"}}>
                <img className="card-img-top" src={this.state.image} alt="Card image cap"></img>
                <div className="card-body">
        <h5 className="card-title">{this.state.name}</h5>
        <p className ="card-text"><i class="fas fa-rupee-sign"></i>{this.state.price}</p>
                </div>
                </div>
            </div>
        );
    }
}

export default Card;