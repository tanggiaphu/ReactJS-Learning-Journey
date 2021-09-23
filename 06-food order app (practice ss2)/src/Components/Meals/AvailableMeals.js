import React from 'react';
import Card from '../UI/Card';
import MealsItem from './MealsItem';

import styles from './AvailableMeals.module.css'

function AvailableMeals(props) {
    const mealsItemsComponents = props.meals.map((meal) => {
        return (
            <MealsItem
                key={meal.id}
                id={meal.id}
                title={meal.name}
                price={meal.price}
                description={meal.description} />
        )
    })

    return (
        <div className={styles.meals}>
            <Card>
                <ul>{mealsItemsComponents}</ul>
            </Card>
        </div>
    )
}

export default AvailableMeals;