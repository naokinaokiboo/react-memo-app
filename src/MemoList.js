import React from "react";

const MemoList = ({ memos, onMemoClick, onAddButtonClick }) => {
  return (
    <div>
      <ul>
        {memos.map((memo) => (
          <li key={memo.id}>
            <p onClick={() => onMemoClick(memo)}>
              {memo.content.split("\n")[0]}
            </p>
          </li>
        ))}
      </ul>
      <button onClick={onAddButtonClick}>+新規メモ</button>
    </div>
  );
};

export default MemoList;
