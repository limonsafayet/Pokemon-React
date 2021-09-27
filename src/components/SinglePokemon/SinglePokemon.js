import React from 'react'
import "./SinglePokemon.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFireAlt } from '@fortawesome/free-solid-svg-icons'


const SinglePokemon = (props) => {
    const { name, category, abilities, type, img, power } = props.pokemon;
    return (
        <div className="col-md-4 mb-4">
            <div className="card single-pokimon">
                <img src={img} className="card-img-top mb-2" alt={name} />
                <p>Name: {name}</p>
                <p>Category: {category}</p>
                <p>Abilities: {abilities}</p>
                <p>Type: {type}</p>
                <p>Power: {power}</p>
                <button onClick={() => props.handleAddToCart(props.pokemon)}
                    className="mb-4 btn btn-warning">
                    <FontAwesomeIcon icon={faFireAlt} /> Add to Battle
                </button>
            </div>
        </div>
    )
}

export default SinglePokemon
