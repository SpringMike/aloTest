import {Outlet} from "react-router-dom";
import Login from "../component/Login";
import {useAppSelector} from "../app/hook";
import {selectToken} from "../features/UserSlice";

const useAuth = () =>{
    const token = useAppSelector(selectToken)
    let isLogin = false;
    if (token){
        isLogin = true
    }
    return isLogin
}

const ProtectedRoutes = () =>{
    const isAuth = useAuth()
    return isAuth ? <Outlet/> : <Login/>
}
export default ProtectedRoutes
