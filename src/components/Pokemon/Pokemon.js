import React, { useState, useEffect } from 'react'
import Cart from '../Cart/Cart'
import SinglePokemon from '../SinglePokemon/SinglePokemon'

const Pokemon = () => {
    const [pokemons, setPokemons] = useState([])
    const [cartData, setCartData] = useState([]);
    useEffect(() => {
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setPokemons(data));
    }, [])

    const handleAddToCart = (pokemon) => {
        const newCart = [...cartData, pokemon];
        setCartData(newCart);
    }
    return (
        <div className="container">
            <div className="row mt-5 mb-5">
                <div className="col-md-9">
                    <div className="row">
                        {
                            pokemons.map(pokemon => <SinglePokemon
                                key={pokemon._id}
                                pokemon={pokemon}
                                handleAddToCart={handleAddToCart}
                            >
                            </SinglePokemon>)
                        }
                    </div>
                </div>
                <div className="col-md-3">
                    <Cart cartData={cartData}></Cart>
                </div>
            </div>
        </div>


    )
}

export default Pokemon
