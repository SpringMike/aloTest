import {useEffect} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import {findCategoryById, updateCategory} from "../../api/CallApi";
import ToastCustom from "../Toast";
import Navbar from "../Navbar";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {useForm} from "react-hook-form";
import {TypeCategory} from "../../customType/ICategory";
import {validationOpt} from "../../customType/ValidateType";


const CategoryUpdate = () => {

    const {id} = useParams();

    useEffect(() => {
        findCategoryById(parseInt(id as string)).then((cate) => {
            // setValue("name", cate.data.name)
            // setValue("code", cate.data.code)
            // setValue("description", cate.data.description)
            reset({
                name: cate.data.name,
                code: cate.data.code,
                description: cate.data.description
            });
        })
    }, [])


    const navigate = useNavigate();



    const {
        register,
        reset,
        handleSubmit,
        formState: {errors},
        setValue,
    } = useForm<TypeCategory>(validationOpt);


    const onFormSubmit = (category: TypeCategory) => {
        const cate = {
            id: id,
            ...category
        }
        updateCategory(cate).then(() => {
            ToastCustom.fire({
                icon: 'success',
                title: 'Update category successfully'
            }).then()
            navigate("/dashboard")
        })
    }
    return (
        <div className="container">
            <Navbar/>
            <div className="row">
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div className="card border-0 shadow rounded-3 my-5">
                        <div className="card-body p-4 p-sm-5 text-lg-start">
                            <h5 className="card-title text-center mb-5 fw-light fs-5">Update category</h5>
                            <form id="form" onSubmit={handleSubmit(onFormSubmit)}>
                                <div className="form-floating mb-3">
                                    <input  {...register("name")} name='name' type="text" className="form-control"
                                            id="floatingInput"
                                            placeholder="name"/>
                                    <label htmlFor="floatingInput">Category name</label>
                                    <p className='text-error'>{errors?.name?.message}</p>
                                </div>
                                <div className="form-floating mb-3">
                                    <input {...register("code")} name='code' disabled type="text"
                                           className="form-control"
                                           id="floatingInput"
                                           placeholder="code"/>
                                    <label htmlFor="floatingInput">Category code</label>
                                    <p className='text-error'>{errors?.code?.message}</p>

                                </div>
                                <div className="form-floating mb-3">
                                    <input {...register("description")} name='description' type="text"
                                           className="form-control"
                                           id="floatingInput"
                                           placeholder="Password"/>
                                    <label htmlFor="floatingInput">Category description</label>
                                    <p className='text-error'>{errors?.description?.message}</p>

                                </div>
                                <div className="d-grid">
                                    <button className="btn btn-primary btn-login text-uppercase fw-bold"
                                            type="submit">Update
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
export default CategoryUpdate
