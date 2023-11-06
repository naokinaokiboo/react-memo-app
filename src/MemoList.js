import React from "react";

const MemoList = ({ memos, onMemoClick, selectedMemoID }) => {
  return (
    <div className="memo-list">
      <ul>
        {memos.map((memo) => (
          <li
            key={memo.id}
            className={memo.id === selectedMemoID ? "active-memo" : ""}
          >
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
