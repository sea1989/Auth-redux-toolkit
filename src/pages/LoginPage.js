import { Link } from 'react-router-dom';
import { Login } from '../components/Login';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';

import Ava from '../assets/img/gge.jpg'

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const LoginPage = () => {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <img className='ava-img' src={Ava} alt='ava' />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Войти
                </Typography>
                <Login />
                <p>
                    или <Link to='/register'>зарегистрироваться</Link>
                </p>
            </div>
        </Container>
    )
}

export default LoginPage;