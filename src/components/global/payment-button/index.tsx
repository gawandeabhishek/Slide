import { Button } from "@/components/ui/button";
import { useSubscription } from "@/hooks/use-subscription";
import { CreditCard } from "@/icons";
import { Loader2 } from "lucide-react";
import React from "react";

function PaymentButton() {
  //WIP: loading state
  const { onSubscribe, isProcessing } = useSubscription();
  return (
    <Button className="bg-gradient-to-br text-white rounded-full from-[#9685DB] via-[#9434E6] font-bold to-[#CC3BD4]" disabled={isProcessing} onClick={onSubscribe}>
      {isProcessing ? <Loader2 className="animate-spin"/> : <CreditCard />}
      Upgrade
    </Button>
  );
}

export default PaymentButton;
