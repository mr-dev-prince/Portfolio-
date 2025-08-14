const SmallCardShimmer = () => {
  return (
    <div className="flex animate-pulse flex-col items-center justify-center gap-4 rounded-xl border border-gray-700 py-8">
      <div className="h-24 w-24 rounded-full border-4 border-blue-500/80 bg-gray-700 p-1" />
      <div className="h-4 w-20 rounded bg-gray-700" />
    </div>
  );
};

export default SmallCardShimmer;
