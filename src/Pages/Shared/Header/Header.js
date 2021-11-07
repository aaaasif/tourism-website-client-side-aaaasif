import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeartbeat } from '@fortawesome/free-solid-svg-icons'
import './Header.css';


const Header = () => {
    const { user, logOut } = useAuth();
    console.log(user);
    const heartIcon = <FontAwesomeIcon icon={faHeartbeat} />

    return (
        <div className="sticky-top">
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-lg p-3 mt-1bg-body rounded">
                <div className="container-fluid d-flex justify-content-between">
                    <div className="d-flex justify-content-center align-items-center">            
                      <Link className="navbar-brand nav-logo fw-bold" to="/home"><span className="header-brand">{heartIcon} TOURISM</span> </Link>
                    </div>
                    <div className="">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <Link className="nav-link fw-bold" to="/home">Home</Link>
                                {user.email &&
                                    <Link className="nav-link fw-bold" to="/addservice">Add Your Own Service</Link>
                                }
                                {user.email &&
                                    <Link className="nav-link fw-bold" to="/cartadded">Cart</Link>
                                }
                                {user.email &&
                                    <Link className="nav-link fw-bold" to="/allorder">All Orders</Link>
                                }
                                {user.email &&
                                    <Link className="nav-link fw-bold" to="/about">About Us</Link>
                                }

                            </div>
                        </div>
                    </div>
                    <div className="d-flex align-items-center">
                        <div>
                            {user.email &&
                                <div className="d-flex">
                                    <p className="my-auto">{user.displayName}</p>
                                    <img className="user-img mx-2" src={user.photoURL} alt="" />
                                </div>
                            }
                        </div>
                        <div>
                            {user?.email ?
                                <button className="button logout-button" onClick={logOut}>Sign Out</button> :
                                <Link className="nav-link" to="/signin"><button className=" common-button">SIGN IN</button></Link>
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;