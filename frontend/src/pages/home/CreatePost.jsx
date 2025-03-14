import { RxAvatar } from "react-icons/rx";

const CreatePost = () => {
  return (
    <div className="py-3 flex flex-col">
      <div className="flex items-start gap-3">
        <RxAvatar size={35} />
        <textarea
          type="text"
          className="w-full h-[110px] p-2 text-lg border-2 border-sky-600 rounded-xl outline-none resize-none placeholder:text-gray-400"
          placeholder="share your thoughts here"
        />

        {/* <img src="" alt="" /> */}
      </div>

      <button className="self-end my-4 px-7 py-2 text-white bg-appColor rounded hover:opacity-80">
        Post
      </button>
    </div>
  );
};

export default CreatePost;
