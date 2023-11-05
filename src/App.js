import React, { useState, useEffect } from "react";
import {
  getDocs,
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";
import "./App.css";
import db from "./firestore.js";
import MemoList from "./MemoList.js";

function App() {
  const [memos, setMemos] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const allMemos = await getAllMemos();
      setMemos(allMemos);
    };
    fetch();
  }, []);

  const getAllMemos = async () => {
    console.log("getAllMemos");
    const querySnapshot = await getDocs(collection(db, "memos"));
    let memos = [];
    querySnapshot.forEach((doc) => {
      memos.push({
        id: doc.id,
        content: doc.data().content,
      });
    });
    return memos;
  };

  const handleMemoClick = (memo) => {
    // TODO
    console.log(memo.id);
  };

  const handleAddButtonClick = async () => {
    await addDoc(collection(db, "memos"), {
      content: "新規メモ",
      timestamp: serverTimestamp(),
    });
    const nextMemos = await getAllMemos();
    setMemos(nextMemos);
  };

  return (
    <div>
      <h1>React Memo App</h1>
      <MemoList
        memos={memos}
        onMemoClick={handleMemoClick}
        onAddButtonClick={handleAddButtonClick}
      />
    </div>
  );
}

export default App;
