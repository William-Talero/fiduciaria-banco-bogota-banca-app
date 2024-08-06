import * as React from "react";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { CallApiDepositAccount, CallApiWithdrawAccount } from "@/api/CallApi";

const Transactions = ({
  id,
  amount,
  validate,
  setRevalidate,
}: {
  id: number;
  amount: any;
  validate: boolean;
  setRevalidate: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [amountDeposit, setAmountDeposit] = React.useState("");
  const [amountWithdraw, setAmountWithdraw] = React.useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case "deposit":
        setAmountDeposit(e.target.value.replace(/[^0-9]/g, ""));
        break;
      case "withdraw":
        setAmountWithdraw(e.target.value.replace(/[^0-9]/g, ""));
        break;
      default:
        break;
    }
  };

  const onDeposit = async () => {
    const body = {
      monto: amountDeposit,
    };
    await CallApiDepositAccount(id, body);
    setAmountDeposit("");
    await setRevalidate(!validate);
  };

  const onWithdraw = async () => {
    const body = {
      monto: amountWithdraw,
    };
    if (amountWithdraw > amount) {
      alert("No puedes retirar más de lo que tienes en tu cuenta");
      setAmountWithdraw("");
      return;
    }
    await CallApiWithdrawAccount(id, body);
    setAmountWithdraw("");
    await setRevalidate(!validate);
  };

  return (
    <div className="w-full h-full flex md:flex-row flex-col">
      <div className="w-full md:w-1/2 h-full text-center flex flex-col items-center  mt-[3rem]">
        <p>Añadir saldo</p>
        <Input
          className="w-[80%] mt-4"
          name="deposit"
          type="text"
          label="Saldo"
          placeholder="Ingresa el saldo a añadir"
          value={amountDeposit.toString()}
          onChange={(e) => onChange(e)}
        />
        <Button
          color="primary"
          className="w-[80%] mt-4"
          onClick={() => onDeposit()}
        >
          Añadir
        </Button>
      </div>
      <div className="w-full md:w-1/2 h-full text-center flex flex-col items-center  mt-[3rem]">
        <p>Retirar saldo</p>
        <Input
          className="w-[80%] mt-4"
          name="withdraw"
          type="text"
          label="Saldo"
          placeholder="Ingresa el saldo a retirar"
          value={amountWithdraw.toString()}
          onChange={(e) => onChange(e)}
        />
        <Button
          color="primary"
          className="w-[80%] mt-4"
          onClick={() => onWithdraw()}
        >
          Retirar
        </Button>
      </div>
    </div>
  );
};

export default Transactions;
