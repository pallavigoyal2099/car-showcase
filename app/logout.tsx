"use client";

import { signOut } from "next-auth/react";

export default function Logout() {
  return (
    <span
      className="cursor-pointer font-medium custom-btn"
      onClick={() => {
        signOut();
      }}
    >
      Logout
    </span>
  );
}
