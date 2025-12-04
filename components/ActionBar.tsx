const ActionBar = () => {
  return (
    <div className="flex justify-between p-4 px-14 border-t border-gray-200 relative gap-1">
      <img src="/action/home.svg" alt="home" />

      <img
        src="/action/create.svg"
        alt="create"
        className="w-[68px] absolute top-[-18px] left-1/2 -translate-x-1/2"
      />

      <img src="/action/search.svg" alt="search" />
    </div>
  );
};

export default ActionBar;
