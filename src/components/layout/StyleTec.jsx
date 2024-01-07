const StyleTec = ({ children }) => {
  return (
    <div
      className="block mx-auto pt-4 w-[66px] h-[66px] bg-gradient-to-tr from-blue-500/50 via-[#F5F5F5]/100 to-yellow-400/50
          hover:bg-gradient-to-rb hover:from-blue-500/100 hover:via-[#F5F5F5]/100 hover:to-yellow-400/100
          text-indigo-950 hover:text-yellow-400 shadow-lg shadow-zinc-200 px-4
          rounded-md"
    >
      {children}
    </div>
  );
};

export default StyleTec;
