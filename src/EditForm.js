import React from "react";
import { useSession } from "./useSession.js";

const EditForm = ({
  memo,
  refTextArea,
  onTextChange,
  onEditButtonClick,
  onDeleteButtonClick,
}) => {
  const { session } = useSession();

  return (
    <div className="edit-form">
      <textarea
        readOnly={!session}
        ref={refTextArea}
        value={memo.content}
        onChange={(e) => onTextChange(e.target.value)}
      />
      {session && <button onClick={onEditButtonClick}>編集</button>}
      {session && <button onClick={onDeleteButtonClick}>削除</button>}
    </div>
  );
};

export default EditForm;
