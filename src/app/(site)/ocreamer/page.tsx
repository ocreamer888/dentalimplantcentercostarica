import HeroTest from "@/components/ui/HeroSecs";

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
    </div>
  );
}
