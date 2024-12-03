import axios from "axios";
import { toast } from "react-toastify";
import registrationData from "../../interfaces/registrationModel";

export const validateEmail = async (email: string) => {
    return email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
}

export const base_Url = "https://nova-vault-ventures-api.azurewebsites.net/api/"
// export const base_Url = "https://localhost:44338/api/"

// *****************REGISTRATION SERVICE*********************

export const registerNewUser = async (userData: registrationData) => {
    try {
        const response = await axios.post(`${base_Url}auth/register`, userData)
        if (response.status === 200) {
            toast.success("Registration is successful")
        }
        return response?.data?.isSuccess
    } catch (error: any) {
        return toast.error(error?.response?.data?.errorMessages[0])
    }
}
// export const userProfile = async (userData: any) => {
//     try {
//         const response = await axios.post(`${base_Url}auth/register`, userData)
//         if (response.status === 200) {
//             toast.success("Registration is successful")
//         }
//         return response.data.result
//     } catch (error: any) {
//         return toast.error(error.response.data.errorMessages.$values[0])
//     }
// }

// *****************RECOVER PASSWORD SERVICE*********************
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

// *****************RESET PASSWORD SERVICE*********************
interface resetPassword {
    newPassword: string;
    openPasswordChange: string;
    email: any;
    token: any;
}
export const resetUserPassword = async (userData: resetPassword) => {
    try {
        const response = await axios.post(`${base_Url}auth/reset-password`, userData)
        if (response.status === 200) {
            toast.success(response.data.result)
        }
        return response
    } catch (error: any) {
        return toast.error(error?.response?.data?.errorMessages?.$values[0])
    }
}


// *****************UPDATE PROFILE*********************
interface userProfile {
    fullname: string
    appUserId: string
}
export const updateUserProfile = async (userData: userProfile) => {
    try {
        const response = await axios.put(`${base_Url}auth/edit-profile`, userData);
        if (response.status === 200 || response.statusText === "OK") {
            toast.success("Login is successful");
        }
        return response;
    } catch (error: any) {
        return toast.error(error?.response?.data?.errorMessages?.$values[0])
    }
}


// *****************ALL ROLES*********************
export const getAllRoles = async () => {
    try {
        const response = await axios.get(`${base_Url}auth/all-Roles`);
        return response;
    } catch (error: any) {
        return error?.response?.data?.errorMessages?.$values[0]
    }
}

// *****************CREATE WITHDRAWAL SERVICE*********************
export const makeAWithdrawal = async (Body: any) => {
    try {
        const response = await axios.post(`${base_Url}withdraw`, Body, {
            withCredentials: true,
        })
        if (response.status === 200) {
            toast.success("Withdrawal is successful")
        }
        return response.data.result
    } catch (error: any) {
        return toast.error(error)
    }
}



// *****************CREATE Deposit SERVICE*********************
export const makeADeposit = async (Body: any) => {
    try {
        const response = await axios.post(`${base_Url}deposit`, Body, {
            withCredentials: true,
        })
        if (response.status === 200) {
            toast.success("Deposit is successful")
        }
        return response.data.result
    } catch (error: any) {
        return toast.error(error)
    }
}



export const addToAccountBalance = async ({UserBonus, id} :any) => {
    try {
        const response = await axios.put(`${base_Url}transactions/adminedituserbalance/${id}`, UserBonus)
        if (response.status === 200) {
            toast.success("Successful")
        }
        return response.data.result
    } catch (error: any) {
        return toast.error(error.response.data.errorMessages?.$values[0])
    }
}