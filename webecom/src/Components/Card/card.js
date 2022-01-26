import React, {Component} from 'react';

class Card extends Component{

    constructor(props) {
        super(props);
        this.state = {
            data:"Cards"
    };
}
      
    render(){
        return(

            <div className="col-md-3">
                <div className="card" style={{marginTop:"12px"}}>
                <img className="card-img-top" src={this.props.image} alt="Card image cap" style={{width:"200px", height:"200px"}}></img>
                <div className="card-body">
        <h5 className="card-title">{this.props.name}</h5>
        <p className ="card-text"><i class="fas fa-rupee-sign"></i>{this.props.price}</p>
                </div>
                </div>
            </div>
        );
    }
}

export default Card;