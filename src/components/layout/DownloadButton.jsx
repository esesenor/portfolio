
const DownloadButton = ({ onClick, text }) => {
  return (
    <button
      onClick={onClick}
      className="block mx-auto mb-20 bg-gradient-to-r from-green-400/10 via-purple-400/10 to-red-500/10 
      hover:bg-gradient-to-r hover:from-green-600/30 hover:via-purple-400/30 hover:to-red-500/20
      text-white font-bold py-2 px-4 rounded"
    >
      {text}
    </button>
  );
};

export default DownloadButton;