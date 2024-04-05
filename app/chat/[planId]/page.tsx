"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const socket = new WebSocket("127.0.0:4192");

const Page = () => {
  const [isSocketOpen, setIsSocketOpen] = useState(false);
  const [msg, setMsg] = useState("");
  const [file, setFile] = useState<ArrayBuffer | Blob>();
  const params = useParams();

  const planId = params.planId;
  console.log({ planId });

  // TODO: handle if no planId

  // open the socket
  useEffect(() => {
    socket.addEventListener("open", () => {
      setIsSocketOpen(true);
    });
  }, []);

  if (!isSocketOpen) {
    // TODO: possibly re-route to another page
    return <div>room</div>;
  }

  function sendMessage() {
    // TODO: This if statement is for test only, msgs should still be sent then saved to the db
    if (socket.CONNECTING || socket.CLOSING || socket.CLOSED) {
      return;
    } else {
      socket.send(msg);
    }
  }
  return (
    <div>
      room
      <input
        type="text"
        placeholder="Send message"
        id="msg"
      />
      <input
        type="file"
        name="file"
        id="file"
      />
      {/* <button onClick={sendMessage}>Send</button> */}
    </div>
  );
};

export default Page;
