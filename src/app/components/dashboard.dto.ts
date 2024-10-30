// Data Transter Object
import HomeIcon from "@/assets/images/investor/dashboard/icons/home-icon.svg";
import ShieldOutlineIcon from "@/assets/images/investor/dashboard/icons/shield-outline-icon.svg";
import DocIcon from "@/assets/images/investor/dashboard/icons/doc-icon.svg";
import ClipboardIcon from "@/assets/images/investor/dashboard/icons/clipboard-icon.svg";
import HeadsetIcon from "@/assets/images/investor/dashboard/icons/headset-icon.svg";
import BadgeIcon from "@/assets/images/investor/dashboard/icons/badge-icon.svg";
import HistoryIcon from "@/assets/images/investor/dashboard/icons/history-icon.svg";
import SettingsIcon from "@/assets/images/investor/dashboard/icons/settings-icon.svg";
import { GeneralNonAuthRoutes } from "@/utils/urls";

export const dashboardSidebar = (Router) => [
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
