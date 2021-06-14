import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem('user')) || null
    );

    useEffect(() => {
        try {
            localStorage.setItem('user', JSON.stringify(user));
        } catch (error) {
            localStorage.removeItem('user');
        }
    }, [user]);

    const contextValue = {
        user,
        login(user) {
            setUser({ id: '1', username: "fulano" });
            //if (user)
            //    setUser(user);
        },
        logout() {
            setUser(null);
            localStorage.removeItem('user');
        },
        isLogged() {
            return !!user;
        }
    };

    return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
}

export default AuthProvider;