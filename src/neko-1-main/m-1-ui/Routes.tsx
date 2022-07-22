import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import SignInPage from '../../neko-2-features/f-1-authorization/a-1-sign-in/s-1-ui/SignInPage';
import RegisterPage
    from '../../neko-2-features/f-1-authorization/a-2-register/r-1-ui/RegisterPage';
import ForgotPage from '../../neko-2-features/f-1-authorization/a-3-forgot/f-1-ui/ForgotPage';
import NekoPage from "../../neko-2-features/f-4-social/s-1-neko/n-1-ui/NekoPage";

// all project paths
export const SIGN_IN_PATH = '/sign-in';
export const REGISTER_PATH = '/register';
export const FORGOT_PATH = '/forgot';
export const NEKO_PATH = '/neko'; // profile

const RoutesElement: React.FC = () => {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Navigate to={SIGN_IN_PATH}/>}/>

                <Route path={SIGN_IN_PATH} element={<SignInPage/>}/>
                <Route path={REGISTER_PATH} element={<RegisterPage/>}/>
                <Route path={FORGOT_PATH} element={<ForgotPage/>}/>
                <Route path={NEKO_PATH} element={<NekoPage/>}/>
            </Routes>
        </>
    );
};

export default RoutesElement;
