import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import s from './getPosts.module.css'
import { AppDispatch, AppState } from '../../store/store'
import { useEffect } from 'react'
import { getPostsById } from '../../store/postsSlice'
import OnePost from './onePost/onePost'
import { useParams } from 'react-router-dom'


const GetPosts = () => {
    const posts = useSelector((state: AppState) => state.users.posts, shallowEqual)
    const dispatch: AppDispatch = useDispatch()
    const params = useParams()
    useEffect(() => {
        const id = params.id ? parseInt(params.id, 10) : undefined;
        if (typeof id === 'number') {
        dispatch(getPostsById(id));
}
    }, [dispatch])
    return (
        <div className={s['getUsers']}>
            {posts.length ? 
                posts.map(p => {
                    return <OnePost
                        key={p.id}
                        item={p}
                    />
                })
            : <h1 className={s['getUsers-error']}>No users</h1>}
        </div>
    )
}

export default GetPosts