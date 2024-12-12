"use server";

import { client } from "@/lib/prisma";

export const getIntegration = async (clerkId: string) => {
  return client.user.findFirst({
    where: { clerkId },
    include: {
      integrations: {
        where: {
          name: "INSTAGRAM",
        },
      },
    },
  });
};

export const createIntegration = async (clerkId: string,
    token: string,
    expire: Date,
    igId: string
) => {
    return await client.user.update({
        where: { clerkId },
        data: {
            integrations: {
                create: {
                    token,
                    expiresAt: expire,
                    instagramId: igId,
                },
            },
        },
        select: {
            firstname: true,
            lastname: true,
        }
    })
}