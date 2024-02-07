"use client"

import { useAuth } from "@/app/(providers)/_contexts/auth.context";
import Link from "next/link";

function HeaderAuthButtons() {
  const { isLoggedIn, setIsLoggedIn} = useAuth();

  const handleLogOut =()=>{
    setIsLoggedIn(false);
  }
  return (
    <div>
      {isLoggedIn ? (
        <>
          <Link href="/my-page" prefetch>
            마이페이지
          </Link>
          <button onClick={handleLogOut}>로그아웃</button>
        </>
      ) : (
        <>
          <Link href="/" prefetch>
            회원가입하기
          </Link>
          <Link href="/log-in">로그인하기</Link>
        </>
      )}
    </div>
  );
}

export default HeaderAuthButtons;
