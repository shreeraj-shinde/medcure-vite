const HorizontalScrollBar = ({
  data,
  setSearch,
}: {
  data: string[];
  setSearch: Function;
}) => {
  return (
    <div className="flex justify-evenly items-center gap-1 flex-wrap">
      {data.map((bodyPart, idx) => (
        <button
          onClick={() => setSearch(`${bodyPart}`)}
          className="bg-blue-500 font-semibold text-white text-sm rounded-lg hover:bg-blue-600 p-2 w-24 capitalize"
          key={idx}
        >
          {bodyPart}
        </button>
      ))}
    </div>
  );
};

export default HorizontalScrollBar;
