import styles from './UsersList.module.css'

import Card from '../UI/Card';

function UsersList(props) {

    return (
        <div>
            <Card style={{ display: !props.usersDataList.length ? 'none' : 'block' }}
                cssClasses={styles.users} >
                <ul>
                    {
                        props.usersDataList.map(user => {
                            return <li key={user.id}>{`${user.userName} (${user.userAge} years old)`}</li>
                        })
                    }
                </ul>
            </Card >
        </div>
    )
}

export default UsersList;