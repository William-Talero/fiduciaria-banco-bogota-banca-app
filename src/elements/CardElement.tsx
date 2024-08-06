"use client";
import * as React from "react";
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
import { useRouter } from "next/navigation";

const CardElement = ({ accounts }: { accounts: any[] }) => {
  const router = useRouter();
  return (
    <div className="flex flex-wrap justify-center">
      {accounts.map((item: any, index: number) => (
        <div key={index} onClick={() => router.push(`/${item.id}`)}>
          <Card className="m-1 w-[20rem] cursor-pointer">
            <CardHeader className="flex gap-3 py-4">
              <div className="flex flex-col">
                <p className="text-xl">{item.titular}</p>
                <p className="text-md">Id: {item.id}</p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <p className="text-xl text-green-700">Saldo: ${item.saldo}</p>
            </CardBody>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default CardElement;
