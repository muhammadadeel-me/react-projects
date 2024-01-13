import { usePassword } from "../../context/passwordContext/PasswordContextProvider";

const Controls = () => {
  let {
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
    copyPassword
  } = usePassword();

  const changeLength = (event) => {
    const value = Number(event.target.value);
    if (value <= 0) {
      setLength(1);
    } else if (value > 50) {
      setLength(50);
    } else {
      setLength(value);
    }
  };

  return (
    <>
    <div className="controls-wrapper">
      <h3 className="controls__heading">Customize your password</h3>

      <div className="controls">
        <div className="controls__group">
          <label>Password Length</label>
          <div className="length-wrapper">
            <input
              type="number"
              max={50}
              value={length}
              onChange={changeLength}
              className="length-number"
            />
            <input
              type="range"
              max={50}
              value={length}
              onChange={changeLength}
              className="range"
            />
          </div>
        </div>

        <div className="controls__group">
          <div className="form-group">
            <input
              type="checkbox"
              checked={isUppercase}
              onChange={(e) =>
                setIsUppercase((prev) => {
                  if(isLowercase || isNumber || isSymbol){
                    return !isUppercase
                  }else{
                    return true
                  }
                })
              }
              id="uppercase"
            />
            <label htmlFor="uppercase">Uppercase</label>
          </div>

          <div className="form-group">
            <input
              type="checkbox"
              checked={isLowercase}
              onChange={(e) =>
                setIsLowercase((prev) => {
                  if(isUppercase || isNumber || isSymbol){
                    return !isLowercase
                  }else{
                    return true
                  }
                })
              }
              id="lowercase"
            />
            <label htmlFor="lowercase">Lowercase</label>
          </div>

          <div className="form-group">
            <input
              type="checkbox"
              checked={isNumber}
              onChange={(e) =>
                setIsNumber((prev) => {
                  if(isLowercase || isUppercase || isSymbol){
                    return !isNumber
                  }else{
                    return true
                  }
                })
              }
              id="numbers"
            />
            <label htmlFor="numbers">Numbers</label>
          </div>

          <div className="form-group">
            <input
              type="checkbox"
              checked={isSymbol}
              onChange={(e) =>
                setIsSymbol((prev) => {
                  if(isLowercase || isNumber || isUppercase){
                    return !isSymbol
                  }else{
                    return true
                  }
                })
              }
              id="symbols"
            />
            <label htmlFor="symbols">Symbols</label>
          </div>
        </div>
      </div>

    </div>
      <button className="btn-primary" onClick={copyPassword}>Copy password</button>
    </>
  );
};

export default Controls;
