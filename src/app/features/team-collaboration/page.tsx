import { Metadata } from "next";
import { TeamCollaboration } from "../../../_pages/features/TeamCollaboration";

export const metadata: Metadata = {
  title: "ميزة تعاون الفريق عبر صندوق وارد مشترك | Karzoun شات",
  description: "حسّن تعاون فريقك وأدر محادثات العملاء بكفاءة مع صندوق وارد موحد وذكي من Karzoun شات.",
};

export default function TeamCollaborationPage() {
  return <TeamCollaboration />;
}

