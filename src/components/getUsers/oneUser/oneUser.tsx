import { FunctionComponent, ReactElement } from 'react'
import IUser from '../../../interface/iUser'
import s from './oneUser.module.css'
import { NavLink } from 'react-router-dom'

interface IPropsUser {
    item: IUser
}

const OneUser: FunctionComponent<IPropsUser> = (props): ReactElement => {
    return (
        <div  className={s['oneUser']}>
            <h1 className={s['oneUser-name']}>
                {props.item.name}
            </h1>
            <p className={s['oneUser-email']}>
                {props.item.email}
            </p>
            <button className={s['oneUser-button']}>
                <NavLink className={s['oneUser-button']} to={`/users/posts/${props.item.id}`} end>
                    Go to Post
                </NavLink>
            </button>
        </div>
    )
}

export default OneUser