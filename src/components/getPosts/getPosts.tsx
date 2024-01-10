import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import s from './getPosts.module.css'
import { AppDispatch, AppState } from '../../store/store'
import { useEffect, useState } from 'react'
import { getPostsById } from '../../store/postsSlice'
import OnePost from './onePost/onePost'
import { useParams } from 'react-router-dom'


const GetPosts = () => {
    const posts = useSelector((state: AppState) => state.users.posts, shallowEqual)
    const dispatch: AppDispatch = useDispatch()
    const params = useParams()
    const [page, setPage] = useState(1)
    const postsNumber = 5
    useEffect(() => {
        const id = params.id ? parseInt(params.id, 10) : undefined;
        if (typeof id === 'number') {
        dispatch(getPostsById(id));
}
    }, [dispatch, params.id])

    const lastPage = page * postsNumber
    const indexPost = lastPage - postsNumber
    const currentPage = posts.slice(indexPost, lastPage)
    const numbersPage = [];
    for (let i = 1; i <= Math.ceil(posts.length / postsNumber); i++) {
        numbersPage.push(i);
    }
    const render = numbersPage.map((number) => (
        <button
                key={number}
                onClick={() => setPage(number)}
            className={currentPage.length === number ? s['active'] : ''}
            >
            {number}
        </button>
    ))


    return (
        <div className={s['getUsers']}>
            {currentPage.length ? 
                currentPage.map((p) => (
                    <OnePost key={p.id} item={p}/>
                ))    
                : <h1 className={s['getUsers-error']}>No Posts</h1>
        }
        <div className={s['getUsers-pagination']}>{render}</div>
            
        </div>
    )
}

export default GetPosts