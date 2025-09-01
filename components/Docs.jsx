// pages/index.jsx
import IntegrationCard from "@/components/Card1";
import CustomAI from "@/components/Card2";
import DataAccessCard from "@/components/Card3";
import AccelerateProductCard from "@/components/Card4";
import AutomateWorkCard from "@/components/Card5";
import InboxCard from "@/components/Card6";

export default function Home() {
  return (
    <main className="relative flex items-center justify-center min-h-screen p-4 sm:p-6">
  {/* Centered Gradient Background */}
  <div
    aria-hidden="true"
    className="absolute inset-0 flex items-center justify-center overflow-hidden blur-[180px] z-0"
  >
    <div
      style={{
        clipPath:
          'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
      }}
      className="w-[65rem] aspect-[1155/678] bg-gradient-to-tr from-[#00ff99] via-[#9089fc] to-[#ff80b5] opacity-70 rotate-[30deg]"
    />
  </div>

  {/* Cards Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full max-w-5xl z-10">
    <div className="h-110"><IntegrationCard /></div>
    <div className="h-110"><CustomAI /></div>
    <div className="h-110"><DataAccessCard /></div>
    <div className="h-110"><AccelerateProductCard /></div>
    <div className="h-110"><AutomateWorkCard /></div>
    <div className="h-110"><InboxCard /></div>
  </div>
</main>


  );
}
