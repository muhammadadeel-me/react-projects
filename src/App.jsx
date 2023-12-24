import { useEffect } from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  
  const [colors, setColors] = useState([]);
  const [currentColor, setCurrentColor] = useState("olive");

  useEffect(() => {
    colorsGenerator();
  }, []);

  /**
   * Generates an array of 20 colors
   * Store that colors in `colors` state variable
   */
  const colorsGenerator = (index) => {
    setColors([]);

    for (let i = 1; i <= 20; i++) {
      const color = singleColorGenerator();
      setColors((preColors) => {
        return [...preColors, color];
      });
    }
  };


  /**
   * Creates a hex color code and returns
   */
  const singleColorGenerator = () => {

    const characters = "0123456789abcdef";
    let hexCode = "#";

    for (let i = 1; i <= 6; i++) {
      let randomIndex = Math.floor(Math.random() * characters.length);
      hexCode += characters[randomIndex];
    }
    return hexCode;

  };

  /**
   * Copy selected color code to clipboard
   */
  let copyColor = () => {
    navigator.clipboard.writeText(currentColor);
    toast(`Color copied: ${currentColor} 🥳`)
  };

  return (
    <div className="relative">
      <main
        className="w-full h-screen flex flex-col items-center justify-center gap-5"
        style={{ backgroundColor: currentColor }}
      >
        <button
          onClick={colorsGenerator}
          className="rounded-full border-0 py-4 px-8 bg-slate-800 text-white uppercase tracking-wider text-lg font-medium hover:opacity-80 z-10"
        >
          generate more colors
        </button>
        <button
          className="rounded-lg inline-flex py-1 px-4 bg-white hover:opacity-80 text-slate-800 text-lg font-semibold"
          onClick={copyColor}
        >
          {currentColor}
        </button>
      </main>

      <aside className="w-full absolute top-5 left-1/2 flex justify-center -translate-x-1/2 flex-wrap gap-2">
        {colors.map((color) => (
          <span
            key={color}
            className={`w-10 h-10 max-h-screen cursor-pointer leading-8 rounded-full border-2 shadow-lg`}
            style={{ backgroundColor: color }}
            onClick={() => setCurrentColor(color)}
          ></span>
        ))}
      </aside>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default App;
