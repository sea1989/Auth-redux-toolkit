import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { useAuth } from '../hooks/use-auth';
import { removeUser } from '../store/slices/userSlice'

//Здесь позже подключу анимацию
import Lottie from 'lottie-react-web';
import animationData from '../assets/lottie/data2.json';

import '../pages/TimePage.css';

const TimePage = () => {
    const dispatch = useDispatch();

    const { isAuth, email, name } = useAuth();

    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    let hh = today.getHours();
    let min = today.getMinutes();

    today = dd + '/' + mm + '/' + yyyy + '   ' + hh + ':' + min;

    return isAuth ? (
        <main className='time-page'>
            <h1 className='time-page__title'>
                Получить экспертизу теперь <span>стало удобнее</span>
            </h1>

            <ul className='time-page__list'>
                <li>Привет,</li>
                <li>{email} {name}!</li>
                <li> Сейчас {today}.</li>
            </ul>

            <button
                className='btn-standart'
                onClick={() => dispatch(removeUser())}
            >
                Выйти
            </button>
        </main>
    ) : (
        <Navigate to='/' />
    )
}

export default TimePage;