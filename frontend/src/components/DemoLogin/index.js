import { useDispatch } from "react-redux";
import * as sessionActions from '../../store/session';

const DemoLogin = () => {
    const dispatch = useDispatch();

    const handleClick = e => {
        e.preventDefault();
        return dispatch(sessionActions.login({email: 'peepo@hungry.io', password: 'password'}))
    }

    return (
        <a id="session-btn" onClick={handleClick}>Demo Login</a>
    )
}

export default DemoLogin;