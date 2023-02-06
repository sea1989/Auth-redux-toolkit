import { useState } from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import { IconButton, InputAdornment } from '@material-ui/core';

const Form = ({ title, handleClick }) => {
    const [login, setLogin] = useState('');
    const [pass, setPass] = useState('');

    const [showPassword, setShowPassword] = useState(false);

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
                onChange={(e) => setLogin(e.target.value)}
            />
            <TextField
                className='field-pass'
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
                onChange={(e) => setPass(e.target.value)}

                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                className='icon-pass'
                                onClick={() => setShowPassword(!showPassword)}
                                edge="end">
                                {showPassword ?
                                    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M8 13.078c4.418 0 8-5 8-5s-3.582-5-8-5-8 5-8 5 3.582 5 8 5zm0-2a3 3 0 100-6 3 3 0 000 6zm0-1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" fill="#000"></path>
                                    </svg>
                                    :
                                    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M15.406 1.125l-3.229 3.229C14.47 5.834 16 7.969 16 7.969s-3.582 5-8 5c-1.244 0-2.422-.397-3.472-.966l-3.372 3.372-.707-.707 3.2-3.2C1.451 9.997 0 7.969 0 7.969s3.582-5 8-5c1.17 0 2.28.351 3.282.867L14.7.418l.707.707zM8 4.969c.61 0 1.179.182 1.653.496L8.546 6.57a1.5 1.5 0 00-1.943 1.943L5.495 9.622A3 3 0 018 4.968zm-.742 4.304l-1.08 1.08a3 3 0 004.205-4.205l-1.079 1.08a1.5 1.5 0 01-2.046 2.046z" fill="#000"></path>
                                    </svg>
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
                onClick={() => handleClick(login, pass)}
            >
                {title}
            </Button>
        </Box>

    )
}

export { Form }