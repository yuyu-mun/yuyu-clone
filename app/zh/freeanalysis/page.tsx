import type { Metadata } from "next";
import FreeAnalysisQuiz from "@/components/FreeAnalysisQuiz";

export const metadata: Metadata = {
  title: "免費品牌診斷｜嶼嶼創意",
  description: "完成免費的短影音定位測驗，嶼嶼創意將為你量身提供一份個人品牌診斷建議。",
};

export default function FreeAnalysisZhPage() {
  return <FreeAnalysisQuiz locale="zh" />;
}
