import { useState } from 'react';

import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem'
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart'

import './Expenses.css'
import { filter } from 'async';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2021')
    const filtered = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    const changeYearHandler = (year) => {
        setFilteredYear(year)
    }

    return (
        <Card className="expenses">
            <ExpensesChart expenses={filtered} />
            <ExpensesFilter onChangeYear={changeYearHandler} filteredYear={filteredYear} />
            <ExpensesList expenses={filtered} />
        </Card >
    )
}

export default Expenses;