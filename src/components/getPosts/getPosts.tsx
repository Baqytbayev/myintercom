import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import s from './getPosts.module.css'
import { AppDispatch, AppState } from '../../store/store'
import { useEffect } from 'react'
import { getPostsById } from '../../store/postsSlice'


const GetPosts = () => {
    const posts = useSelector((state: AppState) => state.users.posts, shallowEqual)
    const dispatch: AppDispatch = useDispatch()
    useEffect(() => {
        dispatch(getPostsById(1))
    }, [dispatch])
    console.log(posts)
    return (
        <div>
            Hello
        </div>
    )
}

export default GetPosts