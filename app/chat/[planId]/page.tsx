"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./WSFormNode.module.css";

let ws: WebSocket;

const Page = () => {
  const [isSocketOpen, setIsSocketOpen] = useState(false);
  const [isConnectionError, setIsConnectionError] = useState(false);
  const [retryingConnection, setRetryingConnection] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [msg, setMsg] = useState("");
  const [file, setFile] = useState<ArrayBuffer | Blob>();
  const params = useParams();
  const planId = params.planId;

  let [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    connectWebSocket();

    return () => {
      if (ws) {
        ws.close();
      }
    };
  }, []);

  function connectWebSocket() {
    ws = new WebSocket("ws://localhost:4192");

    ws.onopen = () => {
      setIsConnectionError(false);
      setIsSocketOpen(true);
      setRetryingConnection(false);
    };

    ws.onclose = () => {
      setIsSocketOpen(false);
      setIsConnectionError(true);
      // Retry connection if not already retrying
      if (!retryingConnection && retryCount < 6) {
        retryConnection();
        setErrMsg("Retrying connection...");
        setRetryCount(retryCount++);
      } else {
        setErrMsg("Connection error");
      }
    };

    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
      setIsConnectionError(true);
      // Retry connection if not already retrying
      if (!retryingConnection && retryCount < 6) {
        retryConnection();
        setErrMsg("Retrying connection...");
        setRetryCount(retryCount++);
      } else {
        setErrMsg("Connection error");
      }
    };
  }

  function retryConnection() {
    setRetryingConnection(true);
    setTimeout(() => {
      connectWebSocket();
    }, 5000); // Retry after 5 seconds
  }

  function sendMessage() {}
  return (
    <>
      {isConnectionError && (
        <div>
          {" "}
          <p style={{ display: "block" }}>Not connected</p>{" "}
        </div>
      )}

      {retryingConnection && (
        <div>
          <p>{errMsg}</p>
        </div>
      )}
      <article className={styles.BoxNode}>
        <div className={styles.containerNode}>
          <input
            type="text"
            placeholder="Send message"
            id="msg"
            disabled={isConnectionError}
          />
          <input
            type="file"
            name="file"
            id="file"
            disabled={isConnectionError}
          />
          <button
            onClick={sendMessage}
            disabled={isConnectionError}
          >
            Send
          </button>
        </div>
      </article>
    </>
  );
};

export default Page;
