const Comment = ({ data }) => {
  return (
    <div className="flex m-2 p-2 bg-slate-50 dark:bg-[#0f0f0f]  ">
      <img
        className="w-10 h-10 rounded-full"
        alt="user"
        src={data.profilePhoto}
      />
      <div className="mx-2 font-semibold">
        <p className="text-sm text-pink-700">@{data.name}</p>
        <p className="dark:text-[#fff]">{data.comment}</p>
      </div>
    </div>
  );
};

export default Comment;
