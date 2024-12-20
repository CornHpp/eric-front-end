interface MessageProps {
  text: string;
  isResponse?: boolean;
  image?: string;
}

const Message: React.FC<MessageProps> = ({
  text,
  isResponse = false,
  image,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <div
        className={`flex items-start gap-2 ${
          isResponse ? "flex-row" : "flex-row-reverse"
        }`}
      >
        {isResponse && (
          <div className="w-8 h-8 rounded-full bg-cyan-400 flex-shrink-0" />
        )}
        <div
          className={`px-4 py-2 rounded-lg max-w-[80%] ${
            isResponse ? "bg-gray-800 text-white" : "bg-teal-900 text-white"
          }`}
        >
          {text}
        </div>
      </div>

      {image && isResponse && (
        <div className="flex items-start gap-2">
          <div className="w-8 h-8 flex-shrink-0" />{" "}
          {/* 空占位符，保持图片缩进对齐 */}
          <div className="max-w-[80%]">
            <img src={image} alt="Response content" className="rounded-lg" />
          </div>
        </div>
      )}

      {isResponse && (
        <div className="flex items-center gap-2 mt-2">
          <div className="w-8 h-8 flex-shrink-0" />
          <button className="px-4 py-1 rounded-lg bg-cyan-400 text-black hover:bg-cyan-500 transition-colors">
            Apply
          </button>
        </div>
      )}
    </div>
  );
};

export default Message;
