import React from 'react';
import logo from '../icon/fromto.png'

function MyRides(props) {
    let {data}=props
    console.log(data);
    return (
      <div className="Rider">
        {
            data.map(function(riders){
                return(
                  <div className="all">
                    <div className="img_vh">
                      
                    <img src={riders.vh_img} className="car_img"></img>
                      </div>
                      <div className="container">
                      <p className="time">{riders.time}</p>
                      <p className="share">{riders.type}. {riders.crn}</p>
                         <div className="cont2">
                           <div>
                            <img src={logo} className="fromto"></img>
                            </div>
                                <div className="bde">
                                    <p>{riders.from}</p>
                                    <p>{riders.to}</p>
                                </div>
                          </div>
                      
                      
                      </div>
                      <div className="img_dr">
                        <h3>&#8377; {riders.price}</h3>
                        <img src={riders.dr_img} className="dr_img"></img>
                      </div>
                  </div>
                );
            })
        }
      </div>
    );
  }
  
  export default MyRides;

