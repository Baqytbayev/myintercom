import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import s from './getPosts.module.css'
import { AppDispatch, AppState } from '../../store/store'
import { useEffect } from 'react'
import { getPostsById } from '../../store/postsSlice'
import OnePost from './onePost/onePost'


const GetPosts = () => {
    const posts = useSelector((state: AppState) => state.users.posts, shallowEqual)
    const dispatch: AppDispatch = useDispatch()
    useEffect(() => {
        dispatch(getPostsById(1))
    }, [dispatch])
    console.log(posts)
    return (
        <div>
            {posts.length ? 
                posts.map(p => {
                    return <OnePost
                        key={p.id}
                        item={p}
                    />
                })
            : <h1>No users</h1>}
        </div>
    )
}

export default GetPosts