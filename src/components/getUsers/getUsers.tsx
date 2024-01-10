import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import s from './getUsers.module.css'
import { AppDispatch, AppState } from '../../store/store'
import { useEffect } from 'react'
import { getUsers } from '../../store/postsSlice'

const GetUsers = () => {
    const users = useSelector((state: AppState) => state.users.users, shallowEqual)
    const dispatch: AppDispatch = useDispatch()
    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])
    console.log(users)
    return (
        <div>
            Hello
        </div>
    )
}
export default GetUsers