import Image from "next/image";
import AIBackground from "@/components/AIBackground";
import MainContent from "@/components/MainContent";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center">
      <AIBackground />
      <MainContent />
    </div>
  );
}
