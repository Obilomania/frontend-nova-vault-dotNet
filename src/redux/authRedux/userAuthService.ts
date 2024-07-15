import axios from "axios";
import { toast } from "react-toastify";
import registrationData from "../../interfaces/registrationModel";

export const validateEmail = async (email: string) => {
    return email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
}

export const base_Url = "https://localhost:44338/api/"

// *****************REGISTRATION SERVICE*********************

export const registerNewUser = async (userData: registrationData) => {
    try {
        const response = await axios.post(`${base_Url}auth/register`, userData)
        if (response.status === 200) {
            toast.success("Registration is successful")
        }
        return response.data.result
    } catch (error: any) {
        return toast.error(error.response.data.errorMessages.$values[0])
    }
}


// *****************LOGIN SERVICE*********************
export default interface loginData {
    email: string;
    password: string;
}
export const loginUser = async (userData: loginData) => {
    try {
        const response = await axios.post(`${base_Url}auth/login`, userData, { withCredentials: true })
        return response.data.result
    } catch (error: any) {
      return  toast.error(error?.response?.data?.errorMessages?.$values[0])
    }
}


// *****************LOGIN SERVICE*********************
interface recoverPassword {
    email: string;
    clientUrl: string;
}
export const recoverUserPassword = async (userData: recoverPassword) => {
    try {
        const response = await axios.post(`${base_Url}auth/forgot-password`, userData)
        if (response.status === 200) {
            toast.success(response.data.result)
        }
        return response
    } catch (error: any) {
        return toast.error(error?.response?.data?.errorMessages?.$values[0])
    }
}