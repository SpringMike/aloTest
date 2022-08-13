import {useState} from "react";
import {addCategory} from "../../api/CallApi";
import ToastCustom from "../Toast";
import {Link, useNavigate} from "react-router-dom";
import Navbar from "../Navbar";
import {SubmitHandler, useForm} from "react-hook-form";
import {Category, TypeCategory} from "../../customType/ICategory";
import * as yup from 'yup';
import {yupResolver} from "@hookform/resolvers/yup";
import {validationOpt} from "../../customType/ValidateType";



const CategoryAdd = () => {



    const {register, handleSubmit,setError, formState: { errors }} = useForm<TypeCategory>(validationOpt);

    const navigate = useNavigate();

    const onFormSubmit = (category:TypeCategory) => {
        addCategory(category).then(() => {
            ToastCustom.fire({
                icon: 'success',
                title: 'Add category successfully'
            }).then(r => {
            })
            navigate("/dashboard")
        }).catch((err) => {
            const error = err.response.data.message
            ToastCustom.fire({
                icon: 'error',
                title: "Add category failed",
                html: `${error}`
            }).then(r => {
            })
            if (error === "code has already exits"){
                setError('code',{type:'server',message:'Code has already exits'})
            }
        })
    }



    return (
        <div className="container">
            <Navbar/>
            <div className="row">
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div className="card border-0 shadow rounded-3 my-5">
                        <div className="card-body p-4 p-sm-5 text-lg-start">
                            <h5 className="card-title text-center mb-5 fw-light fs-5">Add category</h5>
                            <form id="form" onSubmit={handleSubmit(onFormSubmit)}>
                                <div className="form-floating mb-3">
                                    <input
                                        {...register("name")}
                                        name='name' type="text" className="form-control" id="floatingInput"
                                        placeholder="name"/>
                                    <label htmlFor="floatingInput">Category name</label>
                                    <p className='text-error'>{errors?.name?.message}</p>

                                </div>
                                <div className="form-floating mb-3">
                                    <input
                                        {...register("code")}
                                        name='code' type="text" className="form-control"
                                        id="floatingInput"
                                        placeholder="code" />
                                    <label htmlFor="floatingInput">Category code</label>
                                    <p className='text-error'>{errors?.code?.message}</p>

                                </div>
                                <div className="form-floating mb-3">
                                    <input
                                        {...register("description")}
                                        name='description' type="text" className="form-control"
                                        id="floatingInput"
                                        placeholder="Password" />
                                    <label htmlFor="floatingInput">Category description</label>
                                    <p className='text-error'>{errors?.description?.message}</p>

                                </div>

                                <div className="d-grid">
                                    <button className="btn btn-primary btn-login text-uppercase fw-bold"
                                            type="submit">Add
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <Link to="/dashboard">
                        <button className="btn btn-primary">Back</button>
                    </Link>

                </div>

            </div>
        </div>
    )
}
export default CategoryAdd;
