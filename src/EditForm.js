import React from "react";

const EditForm = ({
  memo,
  onTextChange,
  onEditButtonClick,
  onDeleteButtonClick,
}) => {
  return (
    <div>
      <textarea
        value={memo.content}
        onChange={(e) => onTextChange(e.target.value)}
      />
      <button onClick={onEditButtonClick}>編集</button>
      <button onClick={onDeleteButtonClick}>削除</button>
    </div>
  );
};

export default EditForm;
