import Copyright from "@/components/Copyright";
import Hero from "@/components/hero";
import Hotels from "@/components/Hotels";
import Tours from "@/components/tours";

export default function Home(){
  return(
    <main>
     <Hero />
     <Tours />
     <Hotels />
     <Copyright />
    </main>
  )
}