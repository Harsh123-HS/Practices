import { useState } from "react";

function App() {
  const [color, setColor] = useState("red");
  return (
    <>
      <div
        className="w-full h-screen duration-1000"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-2 shadow-xl bg-white rounded-3xl px-3 py-2">
            <button
              onClick={() => setColor("red")}
              className="outline-none px-4 py-1 text-white rounded-full p-2 shadow-sm "
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => setColor("green")}
              className="outline-none px-4 py-1 text-white rounded-full p-2 shadow-sm "
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>
            <button
              onClick={() => setColor("Blue")}
              className="outline-none px-4 py-1 text-white rounded-full p-2 shadow-sm "
              style={{ backgroundColor: "blue" }}
            >
              blue
            </button>
            <button
              onClick={() => setColor("skyblue")}
              className="outline-none px-4 py-1 text-white rounded-full p-2 shadow-sm "
              style={{ backgroundColor: "skyblue" }}
            >
              Sky Blue
            </button>
            <button
              onClick={() => setColor("Pink")}
              className="outline-none px-4 py-1 text-white rounded-full p-2 shadow-sm "
              style={{ backgroundColor: "Pink" }}
            >
              Pink
            </button>
            <button
              onClick={() => setColor("Black")}
              className="outline-none px-4 py-1 text-white rounded-full p-2 shadow-sm "
              style={{ backgroundColor: "Black" }}
            >
              Black
            </button>
            <button
              onClick={() => setColor("violet")}
              className="outline-none px-4 py-1 text-white rounded-full p-2 shadow-sm "
              style={{ backgroundColor: "Violet" }}
            >
              Violet
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
