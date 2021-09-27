import React from 'react'

const CartItem = (props) => {
    const { name, img } = props.pokemon;
    return (
        <div className="cart-item">
            <hr />
            <img src={img} className="img-fluid" />
            <h5><i>{name}</i></h5>
        </div>
    )
}

export default CartItem
