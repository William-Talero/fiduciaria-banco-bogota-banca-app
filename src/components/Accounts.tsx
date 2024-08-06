import * as React from "react";
import CardElement from "@/elements/CardElement";
import useGetAccounts from "@/hooks/useGetAccounts";
import { Skeleton } from "@nextui-org/skeleton";

const Accounts = () => {
  const { accounts, loading, error } = useGetAccounts();

  console.log(accounts);

  return (
    <div className="w-full h-full justify-center">
      {loading ? (
        <div className="flex flex-wrap justify-center">
          <Skeleton className="w-[20rem] h-[9rem] rounded-lg m-1" />
          <Skeleton className="w-[20rem] h-[9rem] rounded-lg m-1" />
          <Skeleton className="w-[20rem] h-[9rem] rounded-lg m-1" />
        </div>
      ) : accounts.length > 0 ? (
        <CardElement accounts={accounts} />
      ) : (
        <h1 className="text-md text-center mt-3">No accounts found</h1>
      )}
    </div>
  );
};

export default Accounts;
