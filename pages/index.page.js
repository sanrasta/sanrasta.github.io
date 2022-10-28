import Head from 'next/head'
import Image from 'next/image'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Instagram from './components/Instagram'
import Slider from './components/Slider'
import { SliderData } from './components/SliderData'



export default function Home() {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <title>YourClaim US</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head> 
        <Hero 
          heading='About'
          message1='We can tackle any insurance product getting a custom benefit for your specific situation.' 
          message2='Efficient assessment of your insurance policy guaranteeing you will receive a substantial recovery from a claim.'
           />
        <About />
        <Instagram />
        
        <Slider slides={SliderData}/>
        
        <Contact />
        <Footer />
        </div>
        )
}
