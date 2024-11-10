import Image from "next/image";
import Container from "./container";

export default function Tours() {
  return (
    <Container className="py-20">
      <h2 className="text-4xl font-sans font-semibold text-center">Most Demanded Destinations</h2>
      <p className="text-center m-2">
        Explore Our top destinations voted by more than 10,000 customers around the world.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
        <div className="aspect-[16/10] rounded-md overflow-hidden">
          <Image src="/alaska.jpg" alt="Destination 1" width={300} height={300} className="w-full h-full object-cover transition-transform hover:scale-110 origin-bottom duration-300"/>
        </div>

        <div className="aspect-[16/10] rounded-md overflow-hidden">
          <Image src="/amazon-forest.jpg" alt="Destination 2" width={300} height={300}  className="w-full h-full object-cover transition-transform hover:scale-110 origin-bottom duration-300"/>
        </div>

        <div className="aspect-[16/10] rounded-md overflow-hidden">
          <Image src="/bora-bora.jpg" alt="Destination 3" width={300} height={300}  className="w-full h-full object-cover transition-transform hover:scale-110 origin-bottom duration-300"/>
        </div>

        <div className="aspect-[16/10] rounded-md overflow-hidden">
          <Image src="/dubai.jpg" alt="Destination 4" width={300} height={300}  className="w-full h-full object-cover transition-transform hover:scale-110 origin-bottom duration-300"/>
        </div>

        <div className="aspect-[16/10] rounded-md overflow-hidden">
          <Image src="/hawaii.jpg" alt="Destination 5" width={300} height={300} className="w-full h-full object-cover transition-transform hover:scale-110 origin-bottom duration-300" />
        </div>

        <div className="aspect-[16/10] rounded-md overflow-hidden">
          <Image src="/Lake-Tahoe.jpg" alt="Destination 6" width={300} height={300}  className="w-full h-full object-cover transition-transform hover:scale-110 origin-bottom duration-300"/>
        </div>

        <div className="aspect-[16/10] rounded-md overflow-hidden">
          <Image src="/maldives.jpg" alt="Destination 7" width={300} height={300}  className="w-full h-full object-cover transition-transform hover:scale-110 origin-bottom duration-300"/>
        </div>

        <div className="aspect-[16/10] rounded-md overflow-hidden">
          <Image src="/mountain.jpeg" alt="Destination 8" width={300} height={300}  className="w-full h-full object-cover transition-transform hover:scale-110 origin-bottom duration-300"/>
        </div>

        <div className="aspect-[16/10] rounded-md overflow-hidden">
          <Image src="/new-york.jpg" alt="Destination 9" width={300} height={300}  className="w-full h-full object-cover transition-transform hover:scale-110 origin-bottom duration-300"/>
        </div>

        <div className="aspect-[16/10] rounded-md overflow-hidden">
          <Image src="/phuket.jpg" alt="Destination 10" width={300} height={300} className="w-full h-full object-cover transition-transform hover:scale-110 origin-bottom duration-300" />
        </div>

        <div className="aspect-[16/10] rounded-md overflow-hidden">
          <Image src="/switzerland.jpg" alt="Destination 11" width={300} height={300}  className="w-full h-full object-cover transition-transform hover:scale-110 origin-bottom duration-300"/>
        </div>

        <div className="aspect-[16/10] rounded-md overflow-hidden">
          <Image src="/tuscany.jpg" alt="Destination 12" width={300} height={300}  className="w-full h-full object-cover transition-transform hover:scale-110 origin-bottom duration-300"/>
        </div>
      </div>
    </Container>
  )
}