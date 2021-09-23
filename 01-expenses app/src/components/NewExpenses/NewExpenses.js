import { useState } from 'react'

import './ExpensesForm'
import ExpensesForm from './ExpensesForm'
import './NewExpenses.css'

function NewExpense(props) {
    const [formOpen, setFormOpenState] = useState(false)

    const saveExpenseDataHandler = (expenseData) => {
        const expenseFullData = {
            ...expenseData,
            id: Math.random()
        }
        props.onAddExpense(expenseFullData)
        stopEditing()
    }

    const editing = () => {
        setFormOpenState(true)
    }

    const stopEditing = () => {
        setFormOpenState(false)
    }

    let formContent = <button onClick={editing}>Add New Expense</button>

    if (formOpen) {
        formContent = <ExpensesForm onCloseForm={stopEditing} onSaveExpenseData={saveExpenseDataHandler} />
    }

    return (
        <div className="new-expense">
            {formContent}
        </div>
    )
}

export default NewExpense;