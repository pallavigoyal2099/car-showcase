"use client";

import { signOut } from "next-auth/react";

export default function Logout() {
  return (
    <span
      className="cursor-pointer font-bold text-base custom-btn"
      onClick={() => {
        signOut();
      }}
    >
      Log out
    </span>
  );
}
