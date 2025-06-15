const Comment = ({ data }) => {
  const { name, text, timestamp } = data;
  return (
    <div className="pb-2 m-2 border-t border-gray-200">
      <div className="flex items-center gap-2">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa7tBFCEp6gP1NhOcGkP1xrcJOkfkhLVCXOA&s"
          alt="user"
          className="w-6 h-6"
        />
        <div>
          <div className="text-xs font-bold">{name}</div>
          <div className="text-xs text-gray-500">
            {new Date(timestamp).toLocaleString()}
          </div>
          <div className="text-xs">{text}</div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
