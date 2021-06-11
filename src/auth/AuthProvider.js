import { createContext, useState } from "react";
import * as apiService from "../services/api.service";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const contextValue = {
        user,
        login(user) {
            setUser({ id: '1', username: "fulano" });
            //if (user)
            //    setUser(user);
        },
        logout() {
            setUser(null);
        },
        isLogged() {
            return !!user;
        }
    };

    return <AuthContext.Provider value={contextValue}>
        {children}
    </AuthContext.Provider>
}

export default AuthProvider;