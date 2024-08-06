"use client";
import React from "react";
import Header from "@/components/Header";
import Accounts from "@/components/Accounts";

export default function Home() {
  return (
    <main className="w-full flex min-h-svh flex-col items-center relative">
      <Header site="home" />
      <p className="text-2xl my-[2rem]">Todas las cuentas</p>
      <Accounts />
    </main>
  );
}
