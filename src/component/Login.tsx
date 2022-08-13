import {useState} from "react";
import {useNavigate} from "react-router-dom";
import ToastCustom from "./Toast";
import {Auth} from "../auth/Auth";
import {useDispatch} from "react-redux";
import {SubmitHandler, useForm} from "react-hook-form";
import {User} from "../customType/IUser";
import {getCurrentUser2, loginUser2} from "../features/UserSlice";
import {useAppDispatch} from "../app/hook";

type TypeUser = {
    username: string,
    password: string
}
const Login = () => {

    const dispatch = useAppDispatch();
    const {register, handleSubmit, formState: {errors}} = useForm<TypeUser>();

    const navigate = useNavigate();

    const onSubmit: SubmitHandler<TypeUser> = async (user) => {
        const resultAction = await dispatch(loginUser2(user))
        if (loginUser2.fulfilled.match(resultAction)) {
            ToastCustom.fire({
                icon: 'success',
                title: 'Login thanh cong'
            }).then(r => {
            })

            navigate("/dashboard")
        } else {
            ToastCustom.fire({
                icon: 'error',
                title: 'username/password không đúng'
            }).then(r => {
            })
        }
        // if (correctUser) {
        //     ToastCustom.fire({
        //         icon: 'success',
        //         title: 'Login thanh cong'
        //     }).then(r => {
        //     })
        //     Auth.getCurrentUser(dispatch);
        //     navigate("/dashboard");
        // } else {
        //     ToastCustom.fire({
        //         icon: 'error',
        //         title: 'username/password không đúng'
        //     }).then(r => {
        //     })
        // }
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div className="card border-0 shadow rounded-3 my-5">
                        <div className="card-body p-4 p-sm-5 text-lg-start">
                            <h5 className="card-title text-center mb-5 fw-light fs-5">Sign In</h5>
                            <form id="form" onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-floating mb-3">
                                    <input
                                        {...register("username", {required: "this is required"})}
                                        name='username' type="text" className="form-control" id="floatingInput"
                                        placeholder="userName"/>
                                    <label htmlFor="floatingInput">User name</label>
                                    <p className='text-error'>{errors?.username?.message}</p>

                                </div>
                                <div className="form-floating mb-3">
                                    <input
                                        {...register("password", {
                                            required: "This is required",
                                            minLength: {
                                                value: 4,
                                                message: "Min-length is 4"
                                            }
                                        })}
                                        name='password' type="password" className="form-control"
                                        id="floatingPassword"
                                        placeholder="Password"/>
                                    <label htmlFor="floatingPassword">Password</label>
                                    <p className='text-error'>{errors?.password?.message}</p>
                                </div>
                                <div className="d-grid">
                                    <button className="btn btn-primary btn-login text-uppercase fw-bold"
                                            type="submit">Sign in
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login
