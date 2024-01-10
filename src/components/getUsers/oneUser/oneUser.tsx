import { FunctionComponent, ReactElement } from 'react'
import IUser from '../../../interface/iUser'
import s from './oneUser.module.css'

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
        </div>
    )
}

export default OneUser