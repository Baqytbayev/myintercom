import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import s from './getUsers.module.css'
import { AppDispatch, AppState } from '../../store/store'
import { useEffect } from 'react'
import { getUsers } from '../../store/postsSlice'
import OneUser from './oneUser/oneUser'

const GetUsers = () => {
    const users = useSelector((state: AppState) => state.users.users, shallowEqual)
    const dispatch: AppDispatch = useDispatch()
    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])
    return (
        <div >
            {users.length ? 
                users.map(p => {
                    return <OneUser 
                        key={p.id}
                        item={p}
                    />
                })
            : <h1 className={s['getUsers-error']}>No users</h1>}
        </div>
    )
}
export default GetUsers