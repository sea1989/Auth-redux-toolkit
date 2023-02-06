import { Link } from 'react-router-dom';

const RegisterPage = () => {
    return (
        <div>
            <h1>
                Страница регистрации
            </h1>
            <p>
                В ТЗ не было, но если надо сделаю:)
            </p>
            <p>
                Уже есть аккаунт? <Link to='/'>Войти</Link>
            </p>
        </div>
    )
}

export default RegisterPage