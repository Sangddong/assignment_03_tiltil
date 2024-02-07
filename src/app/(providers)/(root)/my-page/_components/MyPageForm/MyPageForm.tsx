"use client"

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { updateNickname } from "@/store/reducer/profile.reducer";

const MyPageForm = () => {
  const dispatch = useDispatch();
  const userNickname = useSelector((state: RootState) => state.user.nickname);
  const [newNickname, setNewNickname] = useState("");

  const handleNicknameChange = () => {
    dispatch(updateNickname(newNickname));
    alert(`${newNickname}로 닉네임이 변경되었습니다.`);
    setNewNickname("");
  };

  return (
    <div>
      <p>현재 닉네임 : {userNickname}</p>
      <input
        type="text"
        placeholder="새 닉네임 입력"
        value={newNickname}
        onChange={(e) => setNewNickname(e.target.value)}
      /> 
      <button onClick={handleNicknameChange}>닉네임 변경</button>
    </div>
  );
};

export default MyPageForm;
