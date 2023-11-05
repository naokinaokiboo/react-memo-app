import React, { useState, useEffect } from "react";
import {
  doc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  collection,
  serverTimestamp,
  query,
  orderBy,
} from "firebase/firestore";
import "./App.css";
import db from "./firestore.js";
import MemoList from "./MemoList.js";
import EditForm from "./EditForm.js";

function App() {
  const [memos, setMemos] = useState([]);
  const [selectedMemo, setSelectedMemo] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      const allMemos = await getAllMemos();
      setMemos(allMemos);
    };
    fetch();
  }, []);

  const getAllMemos = async () => {
    const queryGetOrderedMemos = query(
      collection(db, "memos"),
      orderBy("timestamp"),
    );
    const memosSnapshot = await getDocs(queryGetOrderedMemos);
    let memos = [];
    memosSnapshot.forEach((doc) => {
      memos.push({
        id: doc.id,
        content: doc.data().content,
      });
    });
    return memos;
  };

  const handleMemoClick = (memo) => {
    setSelectedMemo({ id: memo.id, content: memo.content });
  };

  const handleAddButtonClick = async () => {
    await addDoc(collection(db, "memos"), {
      content: "新規メモ",
      timestamp: serverTimestamp(),
    });
    const nextMemos = await getAllMemos();
    setMemos(nextMemos);
  };

  const handleTextChange = (text) => {
    setSelectedMemo({ ...selectedMemo, content: text });
  };

  const handleEditButtonClick = async () => {
    const docRef = doc(db, "memos", selectedMemo.id);
    await updateDoc(docRef, { content: selectedMemo.content });
    const nextMemos = await getAllMemos();
    setMemos(nextMemos);
    setSelectedMemo(null);
  };

  const handleDeleteButtonClick = async () => {
    const docRef = doc(db, "memos", selectedMemo.id);
    await deleteDoc(docRef);
    const nextMemos = await getAllMemos();
    setMemos(nextMemos);
    setSelectedMemo(null);
  };

  return (
    <div>
      <h1>React Memo App</h1>
      <MemoList
        memos={memos}
        onMemoClick={handleMemoClick}
        onAddButtonClick={handleAddButtonClick}
      />
      {selectedMemo && (
        <EditForm
          memo={selectedMemo}
          onTextChange={handleTextChange}
          onEditButtonClick={handleEditButtonClick}
          onDeleteButtonClick={handleDeleteButtonClick}
        />
      )}
    </div>
  );
}

export default App;
