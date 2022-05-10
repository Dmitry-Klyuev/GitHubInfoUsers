import rep from './img/rep.png';
import style from './empty.module.scss';

export const EmptyList = () => {
    return (
        <div className={style.empty}>
            <img src={rep} alt="union"/>
            <span>Repository list is empty</span>
        </div>
    );
};