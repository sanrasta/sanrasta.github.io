import Head from 'next/head'
import Image from 'next/image'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Instagram from './components/Instagram'
import Slider from './components/Slider'
import Deck from './components/Deck.jsx'
import { SliderData } from './components/SliderData'
import Timeline from './components/Timeline'





export default function Home() {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <title>Solar Impact Solutions</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head> 
        <Hero 
          heading='Solar'
          message1=
          'As sustainable energy is on the horizon.' 
          message2=
          ' Our purpose is to lower the carbon footprint by providing accessible solar solution.' 
          
          />
        
        <Deck />
        
        
        <Instagram />
        
        <Timeline /> 
        <Contact /> 
        <Footer />
        </div>
        )
}
