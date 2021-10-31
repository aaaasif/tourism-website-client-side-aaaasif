import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faStreetView, faUserShield } from '@fortawesome/free-solid-svg-icons'
import Bounce from "react-reveal/Bounce";
import "./Revew.css"

const Revew = () => {
    const user = <FontAwesomeIcon icon={faUser} />
    const place = <FontAwesomeIcon icon={faStreetView} />
    const instractor = <FontAwesomeIcon icon={faUserShield} />
    return (
        <div>
            <Bounce left cascade>
            <div>
            <section className="icons-container">

                <div className="icons">
                    <i>{instractor}</i>
                    <h3>140+</h3>
                    <p>Tour Instractor</p>
                </div>
            
                <div className="icons">
                    <i>{user}</i>
                    <h3>1040+</h3>
                    <p>satisfied Client's</p>
                </div>
            
                <div className="icons">
                    <i> {place}</i>
                    <h3>5000+</h3>
                    <p>Tourisom Place</p>
                </div>
            </section>
        </div>
        </Bounce>
        </div>
    );
};

export default Revew;