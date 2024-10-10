import axios from "axios";
import { toast } from "react-toastify";
import { base_Url } from "../authRedux/userAuthService";


// *****************ALL ROLES*********************
export const getAllApplicationUser = async () => {
    try {
        const appUsers = await axios.get(`${base_Url}auth/get-all-app-users`);
        return appUsers?.data;
    } catch (error: any) {
        return error?.response?.data?.message

    }
}



// *****************ALL DEPOSITS*********************
export const getallAppDepositss = async () => {
    try {
        const deposits = await axios.get(`${base_Url}admin/admin-get-all-deposits`);
        return deposits?.data?.$values;
    } catch (error: any) {
        return error?.response?.data?.message

    }
}



// *****************ALL WITHDRAWALS*********************
export const getAllWithdrawals = async () => {
    try {
        const withdrawals = await axios.get(`${base_Url}admin/allwithdrawals`);
        return withdrawals?.data?.$values;
    } catch (error: any) {
        return error?.response?.data?.message
    }
}



// *****************ADMIN EDIT USER DEPOSIT AND APPROVE*********************
export const adminEditAndApproveUserDeposit = async (id: any, theEditFeatures: any) => {
  
    try {
        const updatedDeposit = await axios.put(`${base_Url}admin/admin-update-user-deposit/${id}`, theEditFeatures);
        if (updatedDeposit.data.statusCode === 200 || updatedDeposit.status === 200) {
            toast.success("Deposit Updated and Approved Successfully!!!")
        }
        return updatedDeposit?.data;
    } catch (error: any) {
        console.log(error);
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
        if (toggleUserUnBlock.data === false) {
            toast.success("User Un-Blocked Successfully")
        }
    } catch (error: any) {
        return toast.error(error?.response?.data?.errorMessages?.$values[0])
    }
}



// *****************ADMIN CREATE PROMO CODE*********************
export const adminCreatePromoCode = async (thePromoCode: any) => {
  
    try {
        const promoCodeCreate = await axios.post(`${base_Url}admin/create-promo-code`, thePromoCode);
        if (promoCodeCreate.status === 200 || promoCodeCreate) {
            toast.success("Promo Code Created Successfully")
        }
    } catch (error: any) {
        return toast.error(error?.response?.data?.errorMessages?.$values[0])
    }
}




// *****************ADMIN VIEW ALL PROMO CODE*********************
export const adminViewAllPromoCode = async () => {
  
    try {
        const allPromoCodes = await axios.get(`${base_Url}admin/all-promo-codes`);
        return allPromoCodes
    } catch (error: any) {
        return toast.error(error?.response?.data?.errorMessages?.$values[0])
    }
}



// *****************ADMIN DELETE PROMO CODE*********************
export const adminDeletePromoCode = async (id: any) => {
    try {
        const promoCodeDelete = await axios.delete(`${base_Url}admin/delete-promo-code/${id}`);
        if (promoCodeDelete.status === 200 ) {
            toast.success("Promo Code Deleted Successfully")
        }
    } catch (error: any) {
        return toast.error(error?.response?.data?.errorMessages?.$values[0])
    }
}
