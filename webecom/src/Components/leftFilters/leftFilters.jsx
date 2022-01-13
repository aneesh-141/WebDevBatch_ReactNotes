import React, { Component } from 'react';
import './leftFilters.css';

class LeftFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <React.Fragment>
           
                <h4>Search</h4>
                <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="search" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                <div className="input-group-append">
                    <button className="btn btn-primary text-white" type="button">Search</button>
                </div>

                <div style={{marginTop:"85px"}}>
                <h4>Select Tags</h4>
                        <a class="btn btn-primary btn-sm" href="#" role="button" style={{margin:"5px"}}>Apple</a>
                        <button class="btn btn-primary btn-sm" type="submit" style={{margin:"5px"}}>Samsung</button>
                        <input class="btn btn-primary btn-sm" type="button" value="Lenovo" style={{margin:"5px"}} />
                        <input class="btn btn-primary btn-sm" type="submit" value="Asus" style={{margin:"5px"}} />
                        <input class="btn btn-primary btn-sm" type="reset" value="Motorola" style={{margin:"5px"}} />
                        <input class="btn btn-primary btn-sm" type="button" value="Oppo" style={{margin:"5px"}} />
                        <input class="btn btn-primary btn-sm" type="submit" value="Vivo" style={{margin:"5px"}} />
                        <input class="btn btn-primary btn-sm" type="reset" value="onePlus" style={{margin:"5px"}} />
                        <input class="btn btn-primary btn-sm" type="button" value="RealMe" style={{margin:"5px"}} />
                        <input class="btn btn-primary btn-sm" type="submit" value="Redme" style={{margin:"5px"}} />
                        <input class="btn btn-primary btn-sm" type="reset" value="Sony" style={{margin:"5px"}} />
                        <input class="btn btn-primary btn-sm" type="submit" value="Vivo" style={{margin:"5px"}} />
                        <input class="btn btn-primary btn-sm" type="reset" value="onePlus" style={{margin:"5px"}} />
                        <input class="btn btn-primary btn-sm" type="button" value="RealMe" style={{margin:"5px"}} />
                        <input class="btn btn-primary btn-sm" type="submit" value="Redme" style={{margin:"5px"}} />
                        <input class="btn btn-primary btn-sm" type="reset" value="Sony" style={{margin:"5px"}} />
                </div>
                </div>

                <div style={{marginTop:"85px"}}>
                <h5>Select Price Range</h5>
                <form style={{marginTop:"28px"}}>
                <div className="form-group">
                    <input type="range" className="form-control-range" id="formControlRange"></input>
                </div>
                </form>
                </div>
            </React.Fragment>
        );
    }
}
 
export default LeftFilter;