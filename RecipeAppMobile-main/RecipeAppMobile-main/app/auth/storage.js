import * as SecureStore from "expo-secure-store";
import jwtDecode from "jwt-decode";

const key = "authToken";

const storeToken = async authToken => {
    try {
        await SecureStore.setItemAsync(key, authToken);    
    } catch (error) {
        console.log("Error from storing the authorization token", error);
    }
}

const getToken = async () => {
    try {
        return await SecureStore.getItemAsync(key);
    } catch (error) {
        console.log("Error getting the authorization token", error);  
    }
}

const getUser = async () => {
    const token = await getToken();
    return (token) ? jwtDecode(token) : null;
}

const removeToken = async () => {
    try {
        await SecureStore.deleteItemAsync(key);   
    } catch (error) {
        console.log("Error deleting the authorization token", error);  
    }
}

export default { getToken, getUser, removeToken, storeToken };
