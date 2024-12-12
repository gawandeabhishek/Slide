import { INTEGRATION_CARDs } from "@/constants/integrations";
import React from "react";
import IntegrationCard from "./_components/integration-card";

const page = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-full lg:w-8/12 gap-y-5">
        {INTEGRATION_CARDs.map((card, key) => (
          <IntegrationCard key={key} {...card} strategy="INSTAGRAM" />
        ))}
      </div>
    </div>
  );
};

export default page;
