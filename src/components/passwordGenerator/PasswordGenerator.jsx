import Controls from "./Controls";
import Display from "./Display";
import "./passwordGenerator.css";

const PasswordGenerator = () => {
  return (
    <>
      <div className="wrapper">
        <h1 className="title">Generate a Secure Password</h1>
        <p className="intro">
          Boost your online safety with our Password Generator App! Easily
          create strong passwords and get instant feedback on their strength.
        </p>
        <Display />
        <Controls />
      </div>
    </>
  );
};

export default PasswordGenerator;
