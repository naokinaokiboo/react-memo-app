import React from "react";

const MemoList = ({ memos, onMemoClick }) => {
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
    </div>
  );
};

export default MemoList;
