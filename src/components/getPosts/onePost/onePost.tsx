import { FunctionComponent, ReactElement } from 'react'
import IPost from '../../../interface/IPosts'
import s from './onePost.module.css'

interface IPropsPost {
    item: IPost
}

const OnePost: FunctionComponent<IPropsPost> = (props): ReactElement => {
    return (
        <div className={s['onePost']}>
            <h2 className={s['onePost-title']}>
                {props.item.title}
            </h2>
            <p className={s['onePost-body']}>
                {props.item.body}
            </p>
        </div>
    )
}

export default OnePost