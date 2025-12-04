const Feed = () => {
  return (
    <div className="px-4 overflow-y-scroll h-[calc(100vh-180px)]">
      {[1, 2, 3, 4].map((item) => (
        <Post key={item} user={`User ${item}`} />
      ))}
    </div>
  );
};

const Post = ({ user }: { user: string }) => {
  return (
    <div className="w-full h-[280px] mb-5 border border-gray-300 rounded-xl p-2 flex flex-col gap-2">
      <div className="flex items-center gap-2 font-semibold text-sm">
        <div className="w-[34px] h-[34px] rounded-full bg-gray-300"></div>
        <div>{user}</div>
      </div>

      <div className="w-full bg-gray-300 flex-1 rounded-md"></div>
    </div>
  );
};

export default Feed;
