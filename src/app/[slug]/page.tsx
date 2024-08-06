"use client";
import React from "react";
import Header from "@/components/Header";
import useGetAccountBalance from "@/hooks/useGetAccountBalance";
import Transactions from "@/components/Transactions";

export default function Restaurant({ params }: { params: { slug: number } }) {
  const [revalidate, setRevalidate] = React.useState(false);
  const { accountBalance, loading, error } = useGetAccountBalance(
    params.slug,
    revalidate
  );

  return (
    <main className="w-full flex min-h-svh flex-col items-center relative">
      <Header site="account"/>
      <p className="text-2xl my-[2rem]">Cuenta {params.slug}</p>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error</p>
      ) : (
        <>
          <p className="text-xl">Saldo: ${accountBalance}</p>
          <Transactions
            id={params.slug}
            amount={accountBalance}
            validate={revalidate}
            setRevalidate={setRevalidate}
          />
        </>
      )}
    </main>
  );
}
