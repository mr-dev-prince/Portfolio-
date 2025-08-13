const CardShimmer = () => {
  return (
    <div className="rounded-xl shadow-md overflow-hidden bg-gray-800/60 p-3 animate-pulse">
      <div className="h-[400px] w-full bg-gray-700 rounded-lg" />
      <div className="p-4 space-y-3">
        <div className="h-6 bg-gray-700 rounded w-3/4"></div>
        <div className="space-y-2">
          <div className="h-4 bg-gray-700 rounded w-full"></div>
          <div className="h-4 bg-gray-700 rounded w-5/6"></div>
          <div className="h-4 bg-gray-700 rounded w-4/6"></div>
        </div>
      </div>
    </div>
  );
};

export default CardShimmer;
