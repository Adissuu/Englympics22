import React from "react";
import data from "./tickets.json";
import "./tickets.css";

function Tickets() {
  return(
    <div className="tickets-container">
        {data.map(ticket => {
            return(
                <>
                <div className="ticket">
                    <div className="money">
                        <button>
                            <i class='bx bxs-cart-add' ></i>
                        </button>
                        <h4>{ticket.price}</h4>
                    </div> 
                    <div className="info">   
                        <h4>{ticket.display_name}</h4>
                        <p>{ticket.description_en}</p>
                    </div>
                </div>
               </>
            )
        })}
    </div>
  );
}


export default Tickets;
