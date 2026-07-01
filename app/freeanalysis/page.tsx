import type { Metadata } from "next";
import FreeAnalysisQuiz from "@/components/FreeAnalysisQuiz";

export const metadata: Metadata = {
  title: "Get Free Analysis | Yuyu Creative",
  description: "Take the free short video identity quiz and receive a personalised analysis from Yuyu Creative.",
};

export default function FreeAnalysisPage() {
  return <FreeAnalysisQuiz />;
}
