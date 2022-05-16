import notFound from './Union.png'
import style from './ErrorUser.module.scss'

export const ErrorUser = () => {
    return(
        <div className={style.wrapper}>
            <img src={notFound} alt="not found"/>
            <span>User not found</span>
        </div>
    )
}