const Navbar = () => {
  return (
    <div className="border-b border-gray-200 p-4 flex justify-between">
      <div className="flex items-center gap-2">
        <img
          src="/avatar.svg"
          alt="avatar"
          className="w-[38px] h-auto border-2 border-blue-200 rounded-full"
        />
        <h1 className="font-semibold text-base">DemoApp</h1>
      </div>

      <img src="/menu.svg" alt="menu" className="w-6 cursor-pointer" />
    </div>
  );
};

export default Navbar;
