import React, { useState, useEffect } from "react";

function HookMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const logMouse = (e) => {
    console.log("logMouser");
    setX(e.clientX);
    setY(e.clientY);
  };
  useEffect(() => {
    console.log("useEffect called");
    window.addEventListener("mousemove", logMouse);

    return () => {
      console.log("component unmounting");
      window.removeEventListener("mousemove", logMouse);
    };
  }, []);
  return (
    <div>
      x-{x} y-{y}
    </div>
  );
}

export default HookMouse;
