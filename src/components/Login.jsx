import axios from "axios";

import { USERS_DATA } from '../pass';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Form } from './Form';
import { setUser } from '../store/slices/userSlice';



const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async ({ login, password }) => {
        const hasSuchUser = USERS_DATA.some(user => user.login === login && user.password === password);

        if (!hasSuchUser) {
            alert('Incorrect login or password');
            return;
        }

        // check if login and password are correct
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/users/1");
            // store the email and name in the global state
            const setUserAction = setUser({
                email: response.data.email,
                name: response.data.name,
            });
            dispatch(setUserAction);
            // redirect to /time page
            navigate('/time');
        } catch (error) {
            alert(`Error while fetching user data ${error.message}`);
        }
    }

    // const handleLogin = async (login, password) => {

    //     // check if login and password are correct
    //     if (login === "admin" && password === "123456") {
    //         // make the API call
    //         try {
    //             const response = await axios.get("https://jsonplaceholder.typicode.com/users/1");
    //             // store the email and name in the global state
    //             dispatch(setUser({
    //                 email: response.data.email,
    //                 name: response.data.name,
    //             }));
    //             // redirect to /time page
    //             navigate('/time');
    //         } catch (error) {
    //             alert("Error while fetching user data");
    //         }
    //     } else {
    //         alert("Incorrect login or password");
    //     }
    // }

    return (
        <Form
            title="Войти"
            handleClick={handleLogin}
        />
    )
}

export { Login }
