import LoginModal from "./LoginModal";
import { useState } from 'react';
import * as OAuthAPI from '../../lib/APIs/OAuth';

const LoginModalContainer = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const getEmail = (e) => {
        setEmail(e.target.value);
    }

    const getPassword = (e) => {
        setPassword(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
    }
    
    return (
        <LoginModal
            getEmail={getEmail}
            getPassword={getPassword}
            email={email}
            password={password}    
            onSubmit={onSubmit}
        />
    )
}

export default LoginModalContainer;