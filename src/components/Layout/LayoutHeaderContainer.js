import LayoutHeader from "./LayoutHeader";
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const LayoutHeaderContainer = () => {
    const { user, userError, auth } = useSelector(({ user, auth }) => ({
        user: user.user,
        userError: user.error,
        auth: auth
    }))
    console.log(auth);
    useEffect( () => {
        if(userError) {
            alert("login 실패: ", userError);
        }

        if(user) {
            console.log(user);
        }
    }, [user, userError])

    return (
        <LayoutHeader user={user}/>
    )
}

export default LayoutHeaderContainer;

