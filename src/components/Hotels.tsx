import Image from "next/image";
import Container from "./container";

export default function Hotels(){
    return(
        <Container>
            <h2 className="text-4xl font-sans font-semibold text-center">Our Hotel Rooms</h2>
      <p className="text-center m-2">
      Explore Our Top Rated Hotel Rooms, Voted by Over 10,000 Guests Worldwide.
      </p>

      <div className="grid sm:grid-cols-2 gap-10 mt-20">
        <div className="aspect-[16/10] rounded-md overflow-hidden">
          <Image src="/hotel1.jpg" alt="Hotel 1" width={300} height={300} className="w-full h-full object-cover transition-transform hover:scale-110 origin-bottom duration-300"/>
        </div>

        <div className="aspect-[16/10] rounded-md overflow-hidden">
          <Image src="/hotel2.jpg" alt="Hotel 2" width={300} height={300}  className="w-full h-full object-cover transition-transform hover:scale-110 origin-bottom duration-300"/>
        </div>

        <div className="aspect-[16/10] rounded-md overflow-hidden">
          <Image src="/hotel3.jpg" alt="Hotel 3" width={300} height={300}  className="w-full h-full object-cover transition-transform hover:scale-110 origin-bottom duration-300"/>
        </div>

        <div className="aspect-[16/10] rounded-md overflow-hidden">
          <Image src="/hotel4.jpg" alt="Hotel 4" width={300} height={300}  className="w-full h-full object-cover transition-transform hover:scale-110 origin-bottom duration-300"/>
        </div>
        </div>
        </Container>
    )
}