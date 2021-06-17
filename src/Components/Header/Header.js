import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom'

function Header(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark ">
                <div className="container-fluid">
                    <Link className="navbar-brand nav-text text-white" to="/"> {props.title} </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active nav-text text-white" aria-current="page" to="/">Home <span className="badge bg-success" > {props.todosCount} </span> </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active nav-text text-white" aria-current="page" to="/done">Done <span className="badge bg-dark" > {props.doneTodosCount} </span> </Link>
                            </li>
                            
                            
                        </ul>
                    </div>
                </div>
            </nav>
            
        </div>
    )
}

export default Header
