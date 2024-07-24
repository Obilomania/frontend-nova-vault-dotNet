export default interface CurrentUser {
    fullName: string;
    id: string;
    email: string;
    role: string;
    isBlocked: boolean;
    btcWallet: string;
}