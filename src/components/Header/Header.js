import React from 'react'
import logo from '../../images/pokemon-logo.png'
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFireAlt } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <div>
            <div className="container header">
                <div className="row">
                    <div className="col-sm-8 col-md-8 mx-auto">
                        <img src={logo} alt="Pokemon" className="img-fluid mb-5 mt-5" />
                        <h1>Choose <span>Pokémon</span> For Battle</h1>
                        <h2>Total Power 1560 <span><FontAwesomeIcon icon={faFireAlt} /></span></h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
