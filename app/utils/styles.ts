export const generateBg = () => {
  const option = Math.floor(Math.random() * 3);
  const possibleOptions = [
    "from-cyan-500 to-blue-500",
    "from-slate-400 to-slate-700",
    "from-green-400 to-purple-400",
  ];
  return possibleOptions[option];
};
export const generateBgColor = () => {
  const option = Math.floor(Math.random() * 3);
  const possibleOptions = ["bg-blue-500", "bg-slate-700", "bg-purple-400"];
  return possibleOptions[option];
};
