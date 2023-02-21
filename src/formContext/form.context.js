import { useState, useContext , createContext } from "react";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [first_name, setfirst_name] = useState('');
  const [last_name, setlast_name] = useState('');
  const [address, setaddress] = useState('');
  const [ mobile_no, setmobile_no] = useState('');
  const [company_name, setcompany_name] = useState('');
  const [company_address, setcompany_address] = useState('');
  const [company_contact, setcompany_contact] = useState('');
  return (
    <FormContext.Provider 
      value={{
        first_name,
        last_name,
        address,
        mobile_no,
        company_name,
        company_address,
        company_contact,
        setfirst_name,
        setlast_name,
        setaddress,
        setmobile_no,
        setcompany_name,
        setcompany_address,
        setcompany_contact
      }}
    >
      {children}
    </FormContext.Provider>
  )
}

export default FormContext;