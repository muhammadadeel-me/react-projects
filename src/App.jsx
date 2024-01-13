import PasswordGenerator from "./components/passwordGenerator/PasswordGenerator"
import PasswordContextProvider from "./context/passwordContext/PasswordContextProvider"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const App = () => {

  return (
    <PasswordContextProvider>
      <PasswordGenerator />
      <ToastContainer autoClose={2000} limit={3} pauseOnFocusLoss={false} />
    </PasswordContextProvider>
  )
}

export default App
