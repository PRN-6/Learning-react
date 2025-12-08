import { useState } from "react";

const Themetoggle = () => {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "bg-black text-white" : "bg-white text-black"}>
      <button
        onClick={() => setDark(!dark)}
        className="border px-4 py-2 rounded"
      >
        {dark ? "Light Mode" : "Dark Mode"}
      </button>

      <h1>Hello World</h1>
    </div>
  );
};

export default Themetoggle;
