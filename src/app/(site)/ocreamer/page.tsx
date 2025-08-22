import HeroTest from "@/components/ui/HeroSecs";
import HeroSecsDynamic from "@/components/ui/HeroSecsDynamic";

export default function OcreamerPage() {
  return (
   <div className='flex flex-col justify-center items-center gap-4'>
<HeroTest
  title={
    <>
      Dental Implant Center <span className="text-purple-100">Costa Rica</span>
    </>
  }
  description="This is the first example of the CardTwo component."
  imageSrc="/images/hero/Layer 1.webp"
  imageAlt="Example image one"
  linkHref="#example-link"
/>
<HeroSecsDynamic
    title="Expert All-On 4 Zirconia Dental Implants - $19,950"
    description="Enjoy a new smile with our All-inclusive packages and a relaxing trip to Costa Rica, all for a fraction of the cost back home."
    imageSrc="/images/Layer 1.webp"
    imageVisibility={{hideOnMobile: true}}
    imageAlt="Dental Clinic"
    linkHref="#form"
    backgroundImage="/images/hero/DentalOffice1.webp"
    backgroundVisibility={{hideOnMobile: true}}
    backgroundColor="bg-gradient-to-tl from-purple-400/70 via-purple-600/60 to-purple-900/50"
    buttonText="Free Estimate"
    cardButton="true"
    className="backdrop-blur-sm"
  />
    </div>
  );
}
