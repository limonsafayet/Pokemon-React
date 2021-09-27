import React from 'react'
import CartItem from '../CartItem/CartItem';

const Cart = (props) => {
    const { cartData } = props;
    console.log(cartData)
    let totalPower = 0;
    for (const pokemon of cartData) {
        totalPower = totalPower + pokemon.power;
    }
    return (
        <div className="card">
            <h4 className="mt-3">Total Pokémon : {cartData.length}</h4>
            <h4 className="mb-5">Total Power : {totalPower}</h4>
            {
                cartData.map(pokemon => <CartItem
                    key={pokemon._id}
                    pokemon={pokemon}
                >
                </CartItem>)
            }
        </div>
    )
}

export default Cart
