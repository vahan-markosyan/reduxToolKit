import { useDispatch, useSelector } from "react-redux"
import { deleteUser, salaryDown, salaryUp, swipeDown, swipeUp } from "./users.slice"

export const Users = () => {
    const users = useSelector(state => state.items)
    const dispatch = useDispatch()
    console.log(users)
    return <>
    <h1>Users</h1>
    <table>
        <thead>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>gender</th>
                <th>salary</th>
                <th>actions</th>
            </tr>
        </thead>
        <tbody>
            {
                users.map(user =>
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.gender}</td>
                        <td>{user.salary}</td>
                        <td>
                        <button onClick={() => dispatch(salaryUp(user.id))}>Salary Up</button>
                        <button onClick={() => dispatch(salaryDown(user.id))}>Salary Down</button>
                        <button onClick={() => dispatch(deleteUser(user.id))}>Delete</button>
                        <button onClick={() => dispatch(swipeUp(user.id))}>Swipe Up</button>
                        <button onClick={() => dispatch(swipeDown(user.id))}>Swipe Down</button>
                        </td>
                        
                    </tr>
                    
                    
                )
            }
        </tbody>
    </table>
    </>
}