import { useDispatch } from "react-redux";
import * as sessionActions from '../../store/session';

const DemoLogin = () => {
    const dispatch = useDispatch();

    const handleClick = e => {
        e.preventDefault();
        return dispatch(sessionActions.login({email: 'peepo@hungry.io', password: 'password'}))
    }

    return (
        <button id="demo" onClick={handleClick}>Demo Login</button>
    )
}

export default DemoLogin;