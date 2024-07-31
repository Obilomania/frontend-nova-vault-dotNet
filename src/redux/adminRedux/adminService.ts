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



// *****************ADMIN EDIT USER DEPOSIT AND APPROVE*********************
export const adminEditAndApproveUserDeposit = async (id: any, theEditFeatures: any) => {

    try {
        const updatedDeposit = await axios.put(`${base_Url}admin/adminedituserdeposit/${id}`, theEditFeatures);
        if (updatedDeposit.data.statusCode === 200 || updatedDeposit.status === 200) {
            toast.success("Deposit Updated and Approved Successfully!!!")
        }
        return updatedDeposit?.data?.result;
    } catch (error: any) {
        return toast.error(error?.response?.data?.errorMessages?.$values[0])
    }
}


// *****************ADMIN EDIT USER DEPOSIT AND APPROVE*********************
export const adminDeleteOneDeposit = async (id: any) => {

    try {
        const deletedDeposit = await axios.delete(`${base_Url}admin/admindeletedeposit/${id}`);
        return deletedDeposit.data;
    } catch (error: any) {
        return toast.error(error?.response?.data?.errorMessages?.$values[0])
    }
}


// *****************ADMIN EDIT USER WITHDRAWAL AND APPROVE*********************
export const adminApproveUserWithdrawal = async (id: any) => {

    try {
        const approvedWithdrawal = await axios.put(`${base_Url}admin/adminedituserWithdrawal/${id}`);

        if (approvedWithdrawal.data.statusCode === 200 || approvedWithdrawal.status === 200) {
            toast.success("Withdrawal Approved Successfully")
        }
        return;
    } catch (error: any) {
        return toast.error(error?.response?.data?.errorMessages?.$values[0])
    }
}

// *****************ADMIN BLOCK USER*********************
export const adminBlockUser = async (id: any, blockBody: Boolean) => {
    // // console.log(id, blockBody);
    // console.log('====================================');
    // console.log(id, blockBody );
    // console.log('====================================');
    // return
    // return

    try {
        const toggleUserBlock = await axios.put(`${base_Url}auth/admin-toggle-blockuser/${id}`, blockBody);
        if (toggleUserBlock.data === true) {
            toast.success("User Blocked Successfully")
        }
        return toggleUserBlock;
    } catch (error: any) {
        return toast.error(error?.response?.data?.errorMessages?.$values[0])
    }
}



// *****************ADMIN UN-BLOCK USER*********************
export const adminUnBlockUser = async (id: any, blockBody: Boolean) => {

    try {
        const toggleUserUnBlock = await axios.put(`${base_Url}auth/admin-toggle-unblockuser/${id}`, blockBody);
        console.log(toggleUserUnBlock);
        if (toggleUserUnBlock.data === false) {
            toast.success("User Un-Blocked Successfully")
        }
    } catch (error: any) {
        return toast.error(error?.response?.data?.errorMessages?.$values[0])
    }
}


