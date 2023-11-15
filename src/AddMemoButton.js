import React from "react";
import { useSession } from "./useSession.js";

const AddMemoButton = ({ onAddMemoButtonClick }) => {
  const { session } = useSession();

  return session ? (
    <button onClick={onAddMemoButtonClick}>新規メモ作成</button>
  ) : (
    <></>
  );
};

export default AddMemoButton;
