import {Link, useNavigate} from "react-router-dom";
import {useContext, useEffect} from "react";
import {UserContext} from "../context/UserContext";
import Swal from "sweetalert2";
import {useAppDispatch, useAppSelector} from "../app/hook";
import {getCurrentUser2, logout, selectUser} from "../features/UserSlice";

const Navbar =() =>{
    const user = useAppSelector(selectUser)

    const navigate = useNavigate();

    const handleLogOut = () =>{
        localStorage.removeItem("token")
        navigate("/")
        window?.location.reload()
    }

    return(
        <div className="d-flex justify-content-center w-100 bg-light mb-2">
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <p className="nav-item nav-link">
                            <button className="btn btn-primary">
                            Dashboard: Hello {user?.username}
                            </button>
                        </p>
                        <Link className="nav-item nav-link" to="/category/add">
                            <button className="btn btn-primary">Add category</button>
                        </Link>
                        <Link className="nav-item nav-link" to="#">
                            <button onClick={handleLogOut} className="btn btn-danger">Logout</button>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar
