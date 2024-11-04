import Hero from "@/components/hero";
import performanceImg from "public/performance.jpg";

export default function PerformancePage() {
    return (
        <Hero imageData={performanceImg} imgAlt='Performance Image' title='Optimizing for Peak Performance' ></Hero>
      );
}