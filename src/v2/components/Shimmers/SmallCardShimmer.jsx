const SmallCardShimmer = () => {
  return (
    <div className="flex justify-center items-center flex-col border border-gray-700 py-8 rounded-xl gap-4 animate-pulse">
      <div className="border-4 border-blue-500/80 p-1 rounded-full h-24 w-24 bg-gray-700" />
      <div className="h-4 w-20 bg-gray-700 rounded" />
    </div>
  );
};

export default SmallCardShimmer;
