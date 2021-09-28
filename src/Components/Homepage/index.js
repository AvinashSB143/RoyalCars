import {Link} from 'react-router-dom';

const HomePage = (props) => {
    const {validateUser} = props;
    return(
        < >
                <Link to="/homepage">
                <button onClick={() => validateUser()}>
                    HomePage
                </button>
                </Link>
        </>
    )
}

export default HomePage;