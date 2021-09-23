import React from 'react';
import CartContext from '../../store/cart-context';

import styles from './CartItem.module.css';

const CartItem = (props) => {
    const price = `$${props.price.toFixed(2)}`;

    function addMeal() {
        props.onAdd()
    }

    function removeMeal() {
        props.onRemove()
    }

    return (
        <li className={styles['cart-item']}>
            <div>
                <h2>{props.title}</h2>
                <div className={styles.summary}>
                    <span className={styles.price}>{price}</span>
                    <span className={styles.amount}>x {props.amount}</span>
                </div>
            </div>
            <div className={styles.actions}>
                <button onClick={removeMeal}>−</button>
                <button onClick={addMeal} >+</button>
            </div>
        </li>
    );
};

export default CartItem;