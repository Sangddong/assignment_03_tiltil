"use client";

import Link from "next/link";
import HeaderAuthButtons from "./_components/HeaderAuthButtons";
import { useAuth } from "@/app/(providers)/_contexts/auth.context";

function Header() {
  const { isLoggedIn, setIsLoggedIn } = useAuth();

  return (
    <header className="h-20 border-b flex items-center justify-between px-4">
      <Link href="/">띨띨</Link>

      <nav>
        <ul className="flex">
          <li>
            <Link href="/til/trending">
              트렌딩
            </Link>
          </li>
          <li>
            <Link href="/til/latest">최신</Link>
          </li>
          {isLoggedIn ? (
            <li>
              <Link href="/til/write">TIL 쓰러가기</Link>
            </li>
          ) : (
            <li>
              <Link href="/log-in">TIL 쓰러가기</Link>
            </li>
          )}
        </ul>
      </nav>

      <HeaderAuthButtons />
    </header>
  );
}

export default Header;
