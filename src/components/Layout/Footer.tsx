import Image from "next/image";
import Link from "next/link";
import { ProductType } from "@/data/data";

const footer = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-12 " id="first-section">
      <div className="bg-black rounded-3xl pb-16 p-12 lg:max-w-7xl lg:p-20">
        <div className="grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">
          {/* COLUMN-1 */}
          <div className='col-span-4'>
           <div className='flex flex-col gap-4'>
             <h3 className='text-white text-4xl font-semibold leading-9 mb-4 lg:mb-20'>
  <span className="relative inline-block">
    <span className="
      text-6xl font-bold 
      text-transparent 
      bg-clip-text 
      bg-[url('/images/dental-vacations-costa-rica.webp')]
      bg-cover
      bg-center
    ">
      Costa Rica
    </span>
  </span>
  Dental Implant Center 
</h3>

              <div className='footer-icons'>
                <Link href="https://facebook.com"><Image src={'/images/footer/vec.svg'} alt="facebook" width={15} height={20} /></Link>
              </div>
              <div className='footer-icons'>
                <Link href="https://twitter.com"><Image src={'/images/footer/twitter.svg'} alt="twitter" width={20} height={20} /></Link>
              </div>
              <div className='footer-icons'>
                <Link href="https://instagram.com"><Image src={'/images/footer/instagram.svg'} alt="instagram" width={20} height={20} /></Link>
              </div>
            </div>
          </div>
          {/* CLOUMN-2/3 */}
          {ProductType.map((product) => (
            <div key={product.id} className="group relative col-span-2">
              <p className="text-white text-xl font-extrabold mb-9">{product.section}</p>
              <ul>
                {product.link.map((link: string, index: number) => (
                  <li key={index} className='mb-5'>
                    <Link href={link} className="text-white text-lg font-normal mb-6 space-links">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      {/* All Rights Reserved */}
      <div className="mx-auto max-w-2xl lg:max-w-7xl">
        <div className="pt-5 pb-5 px-4 sm:px-6 lg:px-4">
          <div className="mt-4 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 xl:gap-x-8">
            <div>
              <h3 className='text-center md:text-start text-white text-lg'>@2010 - All Rights Reserved by Dental Implant Center Costa Rica</h3>
            </div>
            <div className="flex justify-center md:justify-end">
              <Link href="/">
                <h3 className="text-white pr-6">Privacy policy</h3>
              </Link>
              <Link href="/">
                <h3 className="text-white pl-6 border-solid border-l border-footer">Terms & conditions</h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default footer;