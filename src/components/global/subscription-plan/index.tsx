import { useQueryUser } from "@/hooks/use-queries";

type Props = {
    type: "FREE" | "PRO"
    children: React.ReactNode
}

export const SubscriptionPlan = ({ children, type }: Props) => {
    const { data } = useQueryUser();
    console.log(data)
    return data?.data?.subscription?.plan === type && children
}