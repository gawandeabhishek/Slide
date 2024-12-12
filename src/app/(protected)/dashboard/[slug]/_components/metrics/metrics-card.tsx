"use client";

import { useQueryAutomations } from "@/hooks/use-queries";
import React from "react";

const MetricsCard = () => {
  const { data } = useQueryAutomations();
  const comments = data?.data.reduce((current, next) => {
    return current + next.listener?.commentCount!;
  }, 0);
  const dms = data?.data.reduce((current, next) => {
    return current + next.listener?.dmCount!;
  }, 0);
  return (
    <div className="h-full flex lg:flex-row flex-col gap-5 items-end">
      {[1, 2].map((i) => (
        <div
          className="p-5 border-[1px] flex flex-col gap-y-20 rounded-xl w-full lg:w-6/12"
          key={i}
        >
          {i == 1 ? (
            <div>
              <h2 className="text-3xl text-white font-bold">Comments</h2>
              <p className="text-sm text-text-secondary">On your posts</p>
            </div>
          ) : (
            <div>
              <h2 className="text-3xl text-white font-bold">Direct Messages</h2>
              <p className="text-sm text-text-secondary">On your account</p>
            </div>
          )}
          {i == 1 ? (
            <div>
              <h3 className="text-3xl font-bold">100%</h3>
              <p className="text-sm text-text-secondary">
                {comments ? comments : 0} out of {comments ? comments : 0}{" "}
                comments replied
              </p>
            </div>
          ) : (
            <div>
              <h3 className="text-3xl font-bold">100%</h3>
              <p className="text-sm text-text-secondary">
                {dms ? dms : 0} out of {dms ? dms : 0}{" "}
                DMs replied
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MetricsCard;
