import HeroSection from "@/components/invitation/HeroSection";
import CountdownTimer from "@/components/invitation/CountdownTimer";
import OurStory from "@/components/invitation/OurStory";
import EventDetails from "@/components/invitation/EventDetails";
import GuestInfo from "@/components/invitation/GuestInfo";
import RSVPSection from "@/components/invitation/RSVPSection";
import MapSection from "@/components/invitation/MapSection";
import Footer from "@/components/invitation/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection />
      <CountdownTimer />
      <OurStory />
      <EventDetails />
      <GuestInfo />
      <RSVPSection />
      <MapSection />
      <Footer />
    </main>
  );
};

export default Index;
