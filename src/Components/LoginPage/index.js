import {Link} from 'react-router-dom';

const Login = (props) => {
    const {validateUser} = props;
    return(
        < >
                <Link to="/homepage">
                <button onClick={() => validateUser()}>
                    Login
                </button>
                </Link>
        </>
    )
}

export default Login;