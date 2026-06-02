import type { IconName } from "@/components/Icons";

export type FeatureStatus = "Live Now" | "Improving in Beta" | "Coming Soon";

export type Feature = {
  title: string;
  description: string;
  status: FeatureStatus;
  icon: IconName;
};

export const features: Feature[] = [
  {
    title: "Just Start Button",
    description: "One clear action that helps you move from stuck to started without sorting your whole life first.",
    status: "Improving in Beta",
    icon: "spark"
  },
  {
    title: "Brain Dump Support",
    description: "Get scattered thoughts out of your head, then turn them into a manageable starting point.",
    status: "Live Now",
    icon: "chat"
  },
  {
    title: "AI Task Breakdown",
    description: "Break large tasks into small, concrete first moves. The beta is improving the quality and depth of steps.",
    status: "Improving in Beta",
    icon: "bolt"
  },
  {
    title: "Mood Check-ins",
    description: "Start from how you feel today, because low-energy days need a different kind of support.",
    status: "Live Now",
    icon: "heart"
  },
  {
    title: "Short Focus Timer",
    description: "Begin with a low-pressure 3-minute start, then continue only if it feels possible.",
    status: "Live Now",
    icon: "timer"
  },
  {
    title: "Calm Dashboard",
    description: "A focused home base that shows what matters now, without turning the product into a busy task list.",
    status: "Improving in Beta",
    icon: "layout"
  },
  {
    title: "Momentum Rewards",
    description: "Encouraging rewards for starting and completing small steps, not just finishing huge outcomes.",
    status: "Coming Soon",
    icon: "check"
  },
  {
    title: "Voice Input",
    description: "A future option for users who think faster than they type and want a lower-friction brain dump.",
    status: "Coming Soon",
    icon: "mic"
  }
];
