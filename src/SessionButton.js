import React from "react";
import { useSession } from "./useSession.js";

const SessionButton = () => {
  const { session, setSession } = useSession();

  return (
    <button onClick={() => setSession(!session)}>
      {session ? "ログアウト" : "ログイン"}
    </button>
  );
};

export default SessionButton;
