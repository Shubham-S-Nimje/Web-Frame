import { Inter } from "next/font/google";
import Sidebar from "@/components/sidebar/Sidebar";
import PageContents from "@/components/pageContents/PageContents";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex bg-[#0D0B21]">
      <Sidebar />
      <PageContents />
    </div>
  );
}
