import axios from "axios";
import {Auth} from "../auth/Auth";


export const getCategories = async () => {
    return await axios.get(`${process.env.REACT_APP_API}categories/findAll`)
}
export const getCurrentUserApi = async ()=>{
    return axios.get(`${process.env.REACT_APP_API}auth/current-user`,{ headers: Auth.authHeader() })
}
export const addCategory = async (cate:object)=>{
    return axios.post(`${process.env.REACT_APP_API}categories`,cate,{ headers: Auth.authHeader() })
}
export const deleteCategory = async (id:number)=>{
    return axios.delete(`${process.env.REACT_APP_API}categories/${id}`,{ headers: Auth.authHeader() })
}
export const updateCategory = async (cate:object)=>{
    return axios.put(`${process.env.REACT_APP_API}categories`,cate,{ headers: Auth.authHeader() })
}
export const findCategoryById = async (id:number) => {
    return await axios.get(`${process.env.REACT_APP_API}categories/${id}`)
}
export const getPaginatedPageCategories = async (pageNumber:number,pageSize:number)=>{
    return await axios.get(`${process.env.REACT_APP_API}categories?pageNumber=${pageNumber}&pageSize=${pageSize}&sortBy=id&sortDir=desc`)
}
