import { GoCopy } from "react-icons/go";
import { SlRefresh } from "react-icons/sl";
import { usePassword } from "../../context/passwordContext/PasswordContextProvider";

const Display = () => {

  let {password, setPassword, copyPassword, generatePassword} = usePassword();

  return (
    <div className="display">

      <input type="text" value={password} onChange={(e)=> setPassword(e.target.value)} />

      <button className="icon display_icon" onClick={copyPassword}>
        <GoCopy />
      </button>

      <button className="icon display_icon" onClick={generatePassword}>
        <SlRefresh />
      </button>
      <div className="password-strength"></div>
    </div>
  );
};

export default Display;
