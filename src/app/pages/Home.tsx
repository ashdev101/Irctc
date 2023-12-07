import Holidays from "../components/Holidays"
import HomePageHeroSection from "../components/HomePageHeroSection"
import Services from "../components/Services"





type Props = {}

function Home({ }: Props) {


  return (
    <main className="w-full ">
      <HomePageHeroSection/>
      <Services/>
      <Holidays/>
    </main>
  )
}

export default Home