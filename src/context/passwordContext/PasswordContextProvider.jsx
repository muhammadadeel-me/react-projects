import { useContext, useEffect, useState } from "react";
import PasswordContext from "./passwordContext";
import {toast} from 'react-toastify'

const PasswordContextProvider = ({ children }) => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(20);
  const [isUppercase, setIsUppercase] = useState(true);
  const [isLowercase, setIsLowercase] = useState(true);
  const [isNumber, setIsNumber] = useState(true);
  const [isSymbol, setIsSymbol] = useState(true);

  const generatePassword = () => {
    let password = "";
    let characters = "";
    if (isUppercase) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (isLowercase) characters += "abcdefghijklmnopqrstuvwxyz";
    if (isNumber) characters += "0123456789";
    if (isSymbol) characters += "!@#$%^&*()-[]{}<>?|";

    for (let count = 1; count <= length; count++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }
    setPassword(password);
  };

  
  const copyPassword = () => {
    navigator.clipboard.writeText(password)
    toast.success("Password copied!")
  }
  
  useEffect(()=>{
    generatePassword();
  }, [length, isUppercase, isLowercase, isNumber, isSymbol])

  return (
    <PasswordContext.Provider
      value={{
        password,
        setPassword,
        length,
        setLength,
        isUppercase,
        setIsUppercase,
        isLowercase,
        setIsLowercase,
        isNumber,
        setIsNumber,
        isSymbol,
        setIsSymbol,
        generatePassword,
        copyPassword
      }}
    >
      {children}
    </PasswordContext.Provider>
  );
};

export const usePassword = () => {
  return useContext(PasswordContext)
}

export default PasswordContextProvider;
