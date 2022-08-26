import { createContext, useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../reducer/actions/userAction';
import { getObjectFromStore, removeStoreItem, setObjectInStore } from '../storage/Storage';
import { storageKeys } from '../utils/Constant';

export const AuthContext = createContext({
  token: null,
  authUser: null,
  setLogin: () => { },
  setLogout: () => { },
})

export const getStorage = (key) => {
  return getObjectFromStore(key);
}

export const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();

  const [token, setToken] = useState(getStorage(storageKeys.token));
  const [authUser, setAuthUser] = useState(getStorage(storageKeys.authUser));

  const login = async (user) => {
    //TODO: Replace your token and user detail
    dispatch(setUser(user));
    setObjectInStore(storageKeys.token, {});
    setToken(true);
    setAuthUser(true);
    setObjectInStore(storageKeys.authUser, user);
  }

  const logout = () => {
    try {
      removeStoreItem(storageKeys.token);
      removeStoreItem(storageKeys.authUser);
      localStorage.clear();
      setToken(null);
      setAuthUser(null);
      window.location.replace("/login");
    } catch (e) { }
  }
  return (
    <AuthContext.Provider value={{
      token,
      authUser,
      setLogin: login,
      setLogout: logout,
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext);
}