import axios from "axios";
import { toast } from "react-toastify";
import { base_Url } from "../authRedux/userAuthService";


// *****************ALL ROLES*********************
export const getAllApplicationUser = async () => {
    try {
        const appUsers = await axios.get(`${base_Url}auth/get-all-app-users`);
        return appUsers.data;
    } catch (error: any) {
        return toast.error(error?.response?.data?.errorMessages?.$values[0])
    }
}



// *****************ALL DEPOSITS*********************
export const getAllDeposits = async () => {
    try {
        const deposits = await axios.get(`${base_Url}admin/allDeposit`);
        return deposits?.data?.result?.$values;
    } catch (error: any) {
        return toast.error(error?.response?.data?.errorMessages?.$values[0])
    }
}



// *****************ALL WITHDRAWALS*********************
export const getAllWithdrawals = async () => {
    try {
        const withdrawals = await axios.get(`${base_Url}admin/allwithdrawals`);
        return withdrawals?.data?.result?.$values;
    } catch (error: any) {
        return toast.error(error?.response?.data?.errorMessages?.$values[0])
    }
}