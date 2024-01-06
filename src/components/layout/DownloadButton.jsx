const DownloadButton = ({ onClick, text }) => {
  return (
    <button
      onClick={() => onClick()}
      id="tuBotonID"
      className="block mx-auto bg-gradient-to-r from-emerald-300 via-indigo-400 to-red-300 
      hover:bg-gradient-to-r hover:from-emerald-600 hover:via-indigo-600 hover:to-red-600
      text-indigo-950 hover:text-yellow-400 font-bold py-2 px-4 rounded shadow-lg shadow-zinc-200"
    >
      {text}
    </button>
  );
};

export default DownloadButton;
