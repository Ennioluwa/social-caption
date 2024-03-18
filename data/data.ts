import { Camera, Map1, Share, Star, Video } from "iconsax-react";

export const funnelData = [
  {
    icon: Map1,
    title: "Map out your funnel",
    subtitle:
      "Decide on the steps in your video funnel and what actions you want your visitors to take. Create in steps, actions that you want customers to take in giving their reviews. If you need help, we have pre-made templates you can use once signed up. Get started with Socialcaption today.",
  },
  {
    icon: Video,
    title: "Record your videos",
    subtitle:
      "Capture high-quality and engaging videos that showcase your product or service effectively.  Use clear and concise language, along with visuals and storytelling elements, to grab your audience's attention and keep them interested. Invest in good lighting and sound equipment to ensure a professional presentation.",
  },
  {
    icon: Share,
    title: "Share your video funnel",
    subtitle:
      "Distribute your video content strategically across various channels to reach your target audience. Utilize social media platforms, email marketing campaigns, and embed your videos on relevant websites. Consider paid advertising options to further expand your reach. Track your video performance and analyze audience engagement to optimize your distribution strategy.",
  },
  {
    icon: Star,
    title: "Collect your feedback",
    subtitle:
      "Gather valuable insights from customer reviews to continuously improve your video funnel and overall offerings. Encourage viewers to leave comments and feedback on your videos. Utilize surveys and polls to gain deeper understanding of your audience's preferences and pain points. Analyze the collected data to identify areas for improvement and refine your video funnel strategy.",
  },
];

export interface PricingData {
  name: string;
  price: string;
  billingCycle: string;
  description: string;
  features: string[];
  time: string;
  inclusion: string;
}

export const pricingData: PricingData[] = [
  {
    name: "STARTER",
    price: "Free",
    billingCycle: "",
    description:
      "All the essentials you need to get all the conversation started. It's free!",
    time: "30 mins",
    inclusion: "This plan includes the following features:",
    features: [
      "Basic analytics",
      "Limited customization options",
      "Up to 3 steps per socialcaption",
      "Invite your team - up to 3 users",
      "Conditional Logic",
      "All core features",
      "Collect payments with Flutterwave",
      "Zapier integration",
      "Appointment scheduling",
      "Voice-text transcription & captions",
    ],
  },
  {
    name: "STANDARD",
    price: "$19.99 /mo",
    billingCycle: "billed yearly",
    description: "Create customized experiences and get detailed insights. ",
    time: "1200 mins",
    inclusion: "This includes all features from Starter, plus:",
    features: [
      "Advanced analytics with reporting",
      "More customization options",
      "Team collaboration for up to 3 users",
      "Social media integration",
      "Email marketing tools",
      "Custom variables (hidden fields)",
      "Video length control",
      "Passcode-protected socialcaption",
      "APIs & Webhooks",
      "Schedule a close date",
    ],
  },
  {
    name: "BUSINESS",
    price: "$29.99 /mo",
    billingCycle: "billed yearly",
    description:
      "Build complex workflows, manage large teams, and get prioritized support. ",
    time: "2400 mins",
    inclusion: "This includes all features from Standard, plus:",
    features: [
      "All features from Standard, plus:",
      "Customizable branding",
      "Advanced workflow automation",
      "Team collaboration for up to 10 users",
      "Customer relationship management (CRM) tools",
      "API access",
      "Priority customer support",
    ],
  },
];
