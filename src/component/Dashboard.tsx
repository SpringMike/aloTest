import CategoryList from "./category/CategoryList";
import {useEffect} from "react";
import Navbar from "./Navbar";
import {getCurrentUser2, selectUser} from "../features/UserSlice";
import {useAppDispatch, useAppSelector} from "../app/hook";


const Dashboard = () => {
    // const location:any = useLocation();
    // const user = location.state?.user
    const dispatch = useAppDispatch()
    useEffect(() =>{
        dispatch(getCurrentUser2())
    },[])
    const user = useAppSelector(selectUser)

    return (
        <>
                {user ? (
                    <>
                    <Navbar/>
                    <div className='d-flex flex-column justify-content-center align-items-center'>
                        <CategoryList/>
                    </div>
                    </>
                ) : <h1>Not found...</h1>}

        </>
    )
}
export default Dashboard

