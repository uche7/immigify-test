// Data Transter Object
import HomeIcon from "@/assets/images/icons/home-icon.svg";
import ShieldOutlineIcon from "@/assets/images/icons/shield-outline-icon.svg";
import DocIcon from "@/assets/images/icons/doc-icon.svg";
import ClipboardIcon from "@/assets/images/icons/clipboard-icon.svg";
import HeadsetIcon from "@/assets/images/icons/headset-icon.svg";
import BadgeIcon from "@/assets/images/icons/badge-icon.svg";
import HistoryIcon from "@/assets/images/icons/history-icon.svg";
import SettingsIcon from "@/assets/images/icons/settings-icon.svg";
import { GeneralNonAuthRoutes } from "@/utils/urls";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const dashboardSidebar = (Router: AppRouterInstance) => [
  {
    Icon: HomeIcon,
    text: "Home",
    route: () => Router.push(GeneralNonAuthRoutes.home),
  },
  {
    Icon: ShieldOutlineIcon,
    text: "Eligibility Agent",
    route: () => Router.push(GeneralNonAuthRoutes.EligibilityAgent),
  },
  {
    Icon: DocIcon,
    text: "Document Agent",
    route: () => Router.push(GeneralNonAuthRoutes.DocumentAgent),
  },
  {
    Icon: ClipboardIcon,
    text: "Form-filling Agent",
    route: () => Router.push(GeneralNonAuthRoutes.FormFillingAgent),
  },
  {
    Icon: HeadsetIcon,
    text: "Interview Prep Agent",
    route: () => Router.push(GeneralNonAuthRoutes.InterviewPrepAgent),
  },
  {
    Icon: BadgeIcon,
    text: "Subscription",
    route: () => Router.push(GeneralNonAuthRoutes.Subscription),
  },
  {
    Icon: HistoryIcon,
    text: "History",
    route: () => Router.push(GeneralNonAuthRoutes.History),
  },
  {
    Icon: SettingsIcon,
    text: "Settings",
    route: () => Router.push(GeneralNonAuthRoutes.Settings),
  },
];
