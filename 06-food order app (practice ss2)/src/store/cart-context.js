import React, { useReducer } from 'react';

/**
 * @typedef {Object} Cart
 * @property {Number} mealsAmount
 * @property {mealsInCart} meals
 * @property {Number} total
 */

/**
 * @typedef {Array.<mealObject>} mealsInCart
 */

/**
 * @typedef {Object} mealObject
 * @property {String} title 
 * @property {String} description
 * @property {Number} price
 * @property {Number} amount
 * @property {String|Number} id
 */

const CartContext = React.createContext({
    mealsAmount: 0,
    meals: [],
    total: 0,
    addNewMeals: () => { },
    removeMeal: () => { },
})


const CartReducer = function (state, action) {
    if (action.type === 'ADD') {
        const updatedAmount = state.mealsAmount + action.newMeal.amount
        const total = state.total + (action.newMeal.price * action.newMeal.amount)
        let updatedMeals = [...state.meals]
        const isNotDuplicated = state.meals.every((meal) => meal.id !== action.newMeal.id)

        if (state.meals.length === 0) {
            updatedMeals = [action.newMeal]
        } else {
            // Update the meals array
            isNotDuplicated && updatedMeals.push(action.newMeal)
            !isNotDuplicated && state.meals.forEach((meal, i) => {
                if (meal.id === action.newMeal.id) {
                    updatedMeals[i].amount += action.newMeal.amount
                }
            })

        }

        return {
            mealsAmount: updatedAmount,
            meals: [...new Set(updatedMeals)],
            total: total,
        }
    }

    if (action.type === 'REM') {
        let updatedMeals = state.meals
        const removedMealIndex = state.meals.findIndex((meal) => meal.id === action.removedMealID)
        const removedMeal = state.meals.find((meal) => meal.id === action.removedMealID)
        updatedMeals[removedMealIndex].amount -= 1
        updatedMeals[removedMealIndex].amount < 1 && updatedMeals.splice(removedMealIndex, 1)

        return {
            mealsAmount: state.mealsAmount - 1,
            meals: updatedMeals,
            total: state.total - removedMeal.price
        }
    }
}

export function CartContextProvider(props) {
    const [cartState, dispatchCartState] = useReducer(CartReducer,
        {
            mealsAmount: 0,
            meals: [],
            total: 0
        }
    )

    return (
        <CartContext.Provider value={{
            meals: cartState.meals,
            total: cartState.total,
            mealsAmount: cartState.mealsAmount,
            addNewMeals: function (newMeal) {
                dispatchCartState({
                    type: 'ADD',
                    newMeal: newMeal,
                })
            },
            removeMeal: function (removedMealID) {
                dispatchCartState({
                    type: 'REM',
                    removedMealID: removedMealID,
                })
            }
        }}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartContext;