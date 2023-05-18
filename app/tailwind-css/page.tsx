/**
 * We could try to reduce some of this inline classes
 */
const TailwindCssPage = () => {
  return (
    <div className="p-5">
      <h1>TailwindCssPage</h1>
      <div className="grid grid-cols-3 gap-4 w-fit">
        <div className="border-2 border-purple-500 text-purple-400 flex items-center px-2 rounded-md py-1">
          Yay I am purple
        </div>
        <div className="border-2 border-yellow-600 text-yellow-400 flex items-center px-2 rounded-md py-1">
          Yay I am yellow
        </div>
        <div className="border-2 border-green-600 text-green-400 flex items-center px-2 rounded-md py-1">
          Yay I am green
        </div>
      </div>
    </div>
  );
};

export default TailwindCssPage;
