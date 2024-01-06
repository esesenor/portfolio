function getRandomValue(min, max) {
  return Math.random() * (max - min) + min;
}

const BgCodigo = () => {
  const numStars = 222;
  const stars = [];

  const asciiCharacters = ["*", "S", "+", "Σ", "♡", "♥", "1", "$", "0"];

  for (let i = 0; i < numStars; i++) {
    const size = getRandomValue(1, 12);
    const character =
      asciiCharacters[Math.floor(getRandomValue(0, asciiCharacters.length))];
    const left = `${getRandomValue(0, 100)}%`;
    const top = `${getRandomValue(0, 100)}%`;
    const animationDuration = `${getRandomValue(1, 7)}s`;
    const animationDelay = `${getRandomValue(0, 5)}s`;

    const starStyle = {
      fontSize: `${size}px`,
      position: "absolute",
      left: left,
      top: top,
      animationDuration: animationDuration,
      animationDelay: animationDelay,
    };

    stars.push(
      <span
        key={i}
        className="text-white -z-[100] animate-fn1 shadow-md shadow-blue-800 rounded-full"
        style={starStyle}
      >
        {character}
      </span>
    );
  }

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-full bg-black -z-[100] overflow-hidden">
      {stars}
    </div>
  );
};

export default BgCodigo;
