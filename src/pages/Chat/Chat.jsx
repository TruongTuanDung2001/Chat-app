export default function ChatPage() {
  return (
    <div className="chat-layout min-h-screen bg-fuchsia-600 text-white flex">
      <div className="list-chat min-h-screen border w-[25%]">
        <h1>List messages</h1>
        <input
          className="block border w-full rounded"
          type="search"
          name=""
          id=""
        />
        <div className="users">
          <ul>
            <li className="my-2">
              <img className="h-10 w-10 bg-black rounded-full" src="" alt="" />
              <span>Trương Tuấn Dũng</span>
              <div className="announce w-full flex justify-between">
                <span>Bạn: Lụm</span>
                <span>😃</span>
              </div>
            </li>
            <li className="my-2">
              <img className="h-10 w-10 bg-black rounded-full" src="" alt="" />
              <span>Trương Tuấn Dũng</span>
              <div className="announce w-full flex justify-between">
                <span>Bạn: Lụm</span>
                <span>😃</span>
              </div>
            </li>
            <li className="my-2">
              <img className="h-10 w-10 bg-black rounded-full" src="" alt="" />
              <span>Trương Tuấn Dũng</span>
              <div className="announce w-full flex justify-between">
                <span>Bạn: Lụm</span>
                <span>😃</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="messages min-h-screen border-2 border-amber-500 w-[75%] p-4 rounded bg-red-500">
        <h1>Messesages</h1>
        <div className="messages-content">
          <div className="user-chat">
            <div className="sender pb-10">
              <img className="h-10 w-10 bg-black rounded-full" src="" alt="" />
              <span>Trương Tuấn Dũng</span>
              <div className="announce w-full flex justify-between">
                <span>Bạn: Lụm</span>
                <span>😃</span>
              </div>
            </div>

            <div className="receiver text-right">
              <img className="h-10 w-10 bg-black rounded-full" src="" alt="" />
              <span>Trương Tuấn Dũng</span>
              <div className="announce w-full flex justify-between">
                <span>Bạn: Lụm</span>
                <span>😃</span>
              </div>
            </div>
          </div>
          <div className="chat bg-amber-300 w-full p-2 text-black">
            <form className="flex gap-2 w-full" action="">
              <input className="border rounded p-1" type="text" />
              <button className="block border rounded text-sm cursor-pointer px-2">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
