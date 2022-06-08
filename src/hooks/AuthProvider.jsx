import React, { createContext,useContext,useMemo } from 'react'
import { useNavigate } from 'react-router-dom';
import useLocalStorage from './LocalStorage';

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user,setUser] = useLocalStorage('user',null);

    const navigate = useNavigate();

    const login = async (data) => {
        setUser(data);
        navigate('/profile');
    }

    const logout = () => {
        setUser(null);
        navigate('/login', { replace: true });
    }

    const values = useMemo(() => ({
        user,
        login,
        logout,
    }),[user])

    
  return <AuthContext.Provider value={values} >{children}</AuthContext.Provider>
}

export const useAuth = () => {
    return useContext(AuthContext);
  };