import React from "react";

const EditForm = ({
  memo,
  refTextArea,
  onTextChange,
  onEditButtonClick,
  onDeleteButtonClick,
}) => {
  return (
    <div>
      <textarea
        ref={refTextArea}
        value={memo.content}
        onChange={(e) => onTextChange(e.target.value)}
      />
      <button onClick={onEditButtonClick}>編集</button>
      <button onClick={onDeleteButtonClick}>削除</button>
    </div>
  );
};

export default EditForm;
