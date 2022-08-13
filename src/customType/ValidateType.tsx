import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";

let schema = yup.object().shape({
    code: yup.string().min(3).required('Code is required'),
    name: yup.string().max(20).required('Name is required'),
    description: yup.string().required("Description is required")
});

export const validationOpt = {resolver: yupResolver(schema)}
