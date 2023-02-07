import { useState, useCallback } from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import { IconButton, InputAdornment } from '@material-ui/core';

import Invisible from '../assets/img/invisible.svg';
import Visible from '../assets/img/visible.svg'

const Form = ({ title, handleClick }) => {
    const [login, setLogin] = useState('');
    const [pass, setPass] = useState('');

    const [showPassword, setShowPassword] = useState(false);

    const onClick = useCallback(() => handleClick({ login: login, password: pass }), [handleClick, login, pass]);
    const onChangeLog = useCallback((e) => setLogin(e.target.value), []);
    const onChangePass = useCallback((e) => setPass(e.target.value), []);

    return (

        <Box component="form" sx={{ mt: 1 }}>
            <TextField
                margin="normal"
                required
                fullWidth
                id="login"
                label="Логин"
                name="login"
                autoComplete="логин"
                autoFocus
                variant="outlined"
                value={login}
                onChange={onChangeLog}

            // для проверки пустого поля
            // error={login === ""}
            // helperText={login === "" ? 'Обязательно для заполнения!' : ' '}
            />

            <TextField
                className="field-pass"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Пароль"
                type={showPassword ? 'text' : 'password'}
                id="password"
                autoComplete="current-password"
                variant="outlined"
                value={pass}
                onChange={onChangePass}

                // для проверки пустого поля
                // error={pass === ""}
                // helperText={pass === "" ? 'Обязательно для заполнения!' : ' '}

                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                className="icon-pass"
                                onClick={() => setShowPassword(!showPassword)}
                                edge="end">
                                {showPassword ?
                                    <img src={Invisible} alt="invisible" />
                                    :
                                    <img src={Visible} alt="visible" />
                                }
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />

            <Button
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 3, mb: 2 }}
                onClick={onClick}
            >
                {title}
            </Button>
        </Box>

    )
}

export { Form }