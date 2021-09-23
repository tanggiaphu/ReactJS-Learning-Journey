import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';

import styles from './Cart.module.css'
import CartItem from './CartItem';

function Cart(props) {
    const cxt = useContext(CartContext)

    const total = `$${cxt.total.toFixed(2)}`

    const addMealHandler = (meal) => {
        cxt.addNewMeals({ ...meal, amount: 1 })
    }

    const removeMealHandler = (id) => {
        cxt.removeMeal(id)
    }

    return (
        <Modal>
            <ul className={styles['cart-items']}>
                {cxt.meals.map((meal) => {
                    return (
                        <CartItem
                            title={meal.title}
                            price={meal.price}
                            amount={+meal.amount}
                            key={meal.id}
                            onAdd={addMealHandler.bind(null, meal)}
                            onRemove={removeMealHandler.bind(null, meal.id)} />
                    )
                })}
            </ul>
            <div>
                <div className={styles.total}>
                    <span>Total:</span>
                    <span>{total}</span>
                </div>
                <div className={styles.actions}>
                    <button onClick={props.onClose} className={styles['button--alt']}>Close</button>
                    <button className={styles.button}>Order</button>
                </div>
            </div>
        </Modal >
    );
}

export default Cart;