import * as React from "react";
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";

const CardElement = ({ accounts }: { accounts: any[] }) => {
  return (
    <div className="w-60">
      {accounts.map((item: any, index: number) => (
        <Card className="m-1 w-full" key={index}>
          <CardHeader className="flex gap-3 py-4">
            <div className="flex">
              <p className="text-xl">{item.titular}</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p className="text-xl text-green-700">Saldo: ${item.saldo}</p>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default CardElement;
