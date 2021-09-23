import ExpenseItem from "./ExpenseItem";

import './ExpensesList.css'

const ExpensesList = props => {
    if (props.expenses.length === 0) {
        return <h2 className="expenses-list__fallback">No expenses found.</h2>
    }

    return (
        <ul className="expenses-list">
            {props.expenses.map(exp => {
                return <ExpenseItem
                    key={exp.id}
                    title={exp.title}
                    amount={exp.amount}
                    date={exp.date} />
            })}
        </ul>
    )
}

export default ExpensesList;