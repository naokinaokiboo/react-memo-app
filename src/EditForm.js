import { React, useContext } from "react";
import SessionContext from "./SessionContext";

const EditForm = ({
  memo,
  refTextArea,
  onTextChange,
  onEditButtonClick,
  onDeleteButtonClick,
}) => {
  const session = useContext(SessionContext);

  return (
    <div className="edit-form">
      <textarea
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
