import React, { useContext } from 'react';
import AuthContext from '../../store/cart-context';
import MealForm from './MealForm';

import styles from './MealsItem.module.css'

function MealsItem(props) {
    const cxt = useContext(AuthContext)

    const price = `$${props.price.toFixed(2)}`

    function addMealsHandler(mealAmount) {
        const newMeal = {
            amount: +mealAmount,
            title: props.title,
            price: props.price,
            id: props.id,
            description: props.description
        }

        cxt.addNewMeals(newMeal)
    }

    return (
        <li className={styles.meal}>
            <div>
                <h3>{props.title}</h3>
                <div className={styles.description}>{props.description}</div>
                <span className={styles.price}>{price}</span>
            </div>
            <MealForm onAddMeals={addMealsHandler} />
        </li>
    )
}

export default MealsItem