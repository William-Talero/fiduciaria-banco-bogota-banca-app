import * as React from "react";
import CardElement from "@/elements/CardElement";
import useGetAccounts from "@/hooks/useGetAccounts";
import { Skeleton } from "@nextui-org/skeleton";

const Accounts = () => {
  const { accounts, loading, error } = useGetAccounts();

  console.log(accounts);

  return (
    <div className="w-full h-full flex flex-wrap justify-center">
      {loading ? (
        <>
          <Skeleton className="w-[10rem] h-[8rem] rounded-lg m-1" />
          <Skeleton className="w-[10rem] h-[8rem] rounded-lg m-1" />
          <Skeleton className="w-[10rem] h-[8rem] rounded-lg m-1" />
        </>
      ) : (
        <CardElement accounts={accounts}/>
      )}
    </div>
  );
};

export default Accounts;
