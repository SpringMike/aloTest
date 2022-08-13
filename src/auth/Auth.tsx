import axios, {AxiosError} from "axios";
import Swal from "sweetalert2";
import {getCurrentUserApi} from "../api/CallApi";


export class Auth {
    static login(username: string, password: string) {
        return axios
            .post(`${process.env.REACT_APP_API}auth/log-in`, {
                username,
                password
            }).catch((err: AxiosError) => {

            })
            .then(response => {
                if (response?.data) {
                    localStorage.setItem("token", JSON.stringify(response.data.token));
                    return true;
                }
                return false;
            })
    }

    static authHeader() {
        return { Authorization: 'Bearer ' + localStorage.getItem("token")?.replace(/"/g,"") };
    }
    static getCurrentUser(dispatch:any){
        getCurrentUserApi().then((user) => {
            const user2 = {
                fullName: user.data.fullName,
                username: user.data.username,
            }
            // dispatch(loginSuccess({
            //     user:user2,
            //     token:localStorage.getItem("token")?.replace(/"/g, "")
            // }))

        })
    }

    logout() {
        localStorage.removeItem("token");
        Swal.fire(
            'Success!',
            'You have log-out.',
            'success'
        )
        window.location.reload();
    }

}
