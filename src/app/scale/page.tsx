import Hero from "@/components/hero";
import scaleImage from "public/scale.jpg"

export default function ScalePage() {
    return (
        <Hero imageData={scaleImage} imgAlt='Reliability Image' title='We are Scalable on the Fly !' ></Hero>
      );
}