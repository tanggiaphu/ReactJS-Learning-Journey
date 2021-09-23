import React, { useRef } from 'react';
import Input from '../UI/Input';

import styles from './MealForm.module.css'

function MealForm(props) {
    const inputRef = useRef()

    function addMealHandler(e) {
        e.preventDefault()
        props.onAddMeals(inputRef.current.value)
    }

    return (
        <form className={styles.form} onSubmit={addMealHandler}>
            <Input label="Amount:" ref={inputRef} input={{
                type: "number",
                id: "amount",
                min: "1",
                max: "5",
                step: "1",
                defaultValue: "1"
            }} />
            <button>+ Add</button>
        </form>
    )
}

export default MealForm