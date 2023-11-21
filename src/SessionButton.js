import React from "react";
import { useSession } from "./useSession.js";

const SessionButton = ({ onClearSelection }) => {
  const { session, setSession } = useSession();

  return (
    <button
      onClick={() => {
        setSession(!session);
        onClearSelection();
      }}
    >
      {session ? "ログアウト" : "ログイン"}
    </button>
  );
};

export default SessionButton;
