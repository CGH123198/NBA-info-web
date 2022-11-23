import Loading from "../common/Loading/Loading";
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from '../../modules/auth';
import { getUserInfoAction } from "../../modules/user";
import { useEffect } from 'react';

const OAuthContainer = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search).get("code");
    const { auth, authError, user, userError } = useSelector(({auth, user}) => ({
        auth: auth.auth,
        authError: auth.error,
        user: user.user,
        userError: user.error,
    }))

    useEffect( () => {
        if(auth) { return; }
        if(!auth) {
            dispatch(loginAction(queryParams));
        }
    }, []);

    useEffect( () => {
        if(auth) { 
            dispatch(getUserInfoAction(auth.access_token));
            navigate("/", {replace: true});
        }
        else if(authError) { 
            alert(authError); 
            navigate('/', { replace: true });
        }
    }, [auth, authError]);

    useEffect( () => {
        if(user || userError) {
            navigate('/', { replace: true });
        }
    }, [user, userError])

    return (
        <div>
            <Loading />
        </div>
    )
}

export default OAuthContainer;