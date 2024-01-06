import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
 return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
 const [user, setUser] = useState(null);

 const login = (username) => {
    setUser({ username });
    localStorage.setItem('user', JSON.stringify({ username }));
 };

 const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
 };

 useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) setUser(storedUser);
 }, []);

 return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
 );
};