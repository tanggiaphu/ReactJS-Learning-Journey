import { useState, useRef } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

import styles from './AddUser.module.css'

function AddUser(props) {
    const nameInputRef = useRef()
    const ageInputRef = useRef()

    const [error, setError] = useState()

    const addUserHandler = function (e) {
        e.preventDefault();

        const enteredUserName = nameInputRef.current.value
        const enteredUserAge = ageInputRef.current.value

        if (enteredUserName.trim().length === 0 || enteredUserAge.trim().length === 0) {
            setError({
                title: "Invalid Value.",
                content: "You did not enter enough values, please try again.",
            })
            return;
        }

        if (enteredUserAge < 1) {
            setError({
                title: "Invalid Value.",
                content: "You can not enter a negative age's value.",
            })
            return;
        }

        const user = {
            userName: enteredUserName,
            userAge: enteredUserAge,
            id: Math.random().toFixed(2)
        }

        props.onAddNewUser(user)
    }

    const closeErrorHandlerModal = function () {
        setError(null)
    }

    return (
        <Card cssClasses={styles.input}>
            {error && <ErrorModal onCloseErrorModal={closeErrorHandlerModal} title={error.title} content={error.content} />}
            <div>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username:</label>
                    <input ref={nameInputRef} type="text" id="username" />
                    <label htmlFor="age">Age (Years):</label>
                    <input ref={ageInputRef} type="number" id="age" />
                    <Button btnType="submit">Add User</Button>
                </form>
            </div>
        </Card>
    )
}

export default AddUser;