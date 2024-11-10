import Image from "next/image";
import Container from "./container";
import SearchForm from "./SearchForm";

export default function Hero(){
    return(
      <Container className="grid lg:grid-cols-2">
        <div className="py-10 md:py-20">
            <p className="text-pink-500 font-semibold ml-1 text-lg lg:text-xl">Book With Us!</p>
            <h1 className="text-4xl sm:text-7xl lg:text-8xl  mb-2 text-balance font-sans font-semibold">Discover Your Next Adventure</h1>
            <p className="text-lg text-slate-600">Discover amazing places at exclusives deals, Eat, Shop, Visit interesting places around the world.</p>
            <div className="p-4 md:p-10 mt-10 rounded-md bg-white">
                <SearchForm />
            </div>
        </div>
        <div className="hidden lg:flex justify-center">
            <Image src="/hero.jpg" alt="Mountains" width={480} height={600} className="rounded-md w-[80%] h-full max-h-[700px] object-cover" />
        </div>
      </Container>
    )
  }