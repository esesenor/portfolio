import random from "canvas-sketch-util/random";

const commonStyle = {
  width: "200px",
  height: "30px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const commonStyleA = {
  width: "200px",
  height: "10px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const tecStyle = {
  width: "65px",
  height: "65px",
  background: "#3b82f6",
  borderRadius: "20px",
  padding: "10px",
  boxShadow: "0 0 8px rgba(0, 0, 0, 0.2)",
  transition: "all 0.3s",
};

const hoverStyle =
  "hover:bg-gradient-to-r hover:text-yellow-400 font-bold py-2 px-4 rounded shadow-lg shadow-zinc-200";

export { commonStyle, commonStyleA, tecStyle, hoverStyle };
