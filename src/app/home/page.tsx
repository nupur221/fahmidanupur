import HomeSection from "@/components/Home";

export default function Home() {
  return (
    <div id="home" className="min-h-screen bg-gray-100 dark:bg-[#0b1220]">
      <div className="min-h-screen">
        <main className="pt-24">
          <HomeSection />
        </main>
      </div>
    </div>
  );
}
