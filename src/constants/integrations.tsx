import { InstagramDuoToneBlue } from "@/icons";

type Props = {
  title: string;
  description: string;
  icon: React.ReactNode;
  strategy: string;
};

export const INTEGRATION_CARDs: Props[] = [
  {
    title: "Connect Instagram",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor distinctio.",
    icon: <InstagramDuoToneBlue />,
    strategy: "INSTAGRAM",
  },
];
