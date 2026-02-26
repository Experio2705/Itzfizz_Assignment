import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import car from "../assets/car.png"

export default function Hero() {
  const sectionRef = useRef(null)
  const carRef = useRef(null)
  const roadRef = useRef(null)
  const statsRef1 = useRef(null)
  const statsRef2 = useRef(null)
  const footRef =useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=1500",
        scrub: 1,
        pin: true,
      }
    })

    tl.to(
      roadRef.current,
      {
        x: "100vw",
        ease: "none"
      },
      0
    )

    tl.fromTo(
      carRef.current,
      { x: "-10vw" },
      {
        x: "100vw",
        ease: "none"
      },
      0
    )
    tl.fromTo(
      statsRef1.current.children,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.6,
        ease: "power3.out"
      },
      0.5
    )
    tl.fromTo(
      statsRef2.current.children,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.6,
        ease: "power3.out"
      },
      0.5
    )
    tl.fromTo(
        footRef.current.children,
        {y:20,opacity:0},
        {
            y: 0,
            opacity: 1,
            stagger: 0.2,
            duration: 0.6,
            ease: "power3.out"
        },
        0.5
    )

  }, [])

  return (
    <section ref={sectionRef}className="relative h-screen overflow-hidden bg-white">
      <div className="absolute top-0 left-0 h-40 w-screen bg-green-400 z-0" />
      <div
        ref={roadRef}
        className="absolute top-0 left-0 h-40 w-screen bg-black z-10"
      />
      <div className="absolute inset-0 flex flex-col items-center z-20">

        <h1 className="text-7xl md:text-8xl font-bold tracking-[0.11em] whitespace-nowrap text-black mt-3">
          WELCOME ITZFIZZ
        </h1>
        <div    ref={statsRef1}  className="flex gap-50 mt-50">
            <div className="bg-white shadow-xl rounded-xl px-10 py-8 text-center">
                <h2 className="text-5xl font-bold">58%</h2>
                <p className="text-m text-gray-600">Increase in usage</p>
            </div>
            <div className="bg-white shadow-xl rounded-xl px-10 py-8 text-center">
                <h2 className="text-5xl font-bold">27%</h2>
                <p className="text-m text-gray-600">Reduced calls</p>
            </div>
            <div className="bg-white shadow-xl rounded-xl px-10 py-8 text-center">
                <h2 className="text-5xl font-bold">23%</h2>
                <p className="text-m text-gray-600">Faster pickups</p>
            </div>
        </div>
        <div    ref={statsRef2}  className="flex gap-50 mt-10">
            <div className="bg-white shadow-xl rounded-xl px-10 py-8 text-center">
                <h2 className="text-5xl font-bold">28%</h2>
                <p className="text-m text-gray-600">Decrease in usage</p>
            </div>
            <div className="bg-white shadow-xl rounded-xl px-10 py-8 text-center">
                <h2 className="text-5xl font-bold">63%</h2>
                <p className="text-m text-gray-600">Increased calls</p>
            </div>
            <div className="bg-white shadow-xl rounded-xl px-10 py-8 text-center ">
                <h2 className="text-5xl font-bold">77%</h2>
                <p className="text-m text-gray-600">Slower pickups</p>
            </div>
        </div>
        <div ref={footRef}  className=" gap-50 mt-30 bg-black text-white h-60 w-[100%] p-5">
            <div className="flex justify-between">
                <h2>Created by Aryan Shinde</h2>
                <a href="https://portfolio-rho-olive-14.vercel.app/" className="mr-40 text-blue-800">Aryan_Portfolio</a>
            </div>
            <h2 className="mt-4.5">&copy; 2026 Your Company Name. All rights reserved.</h2>
        </div>
      </div>
      <img
        ref={carRef}
        src={car}
        alt="car"
        className="absolute top-0 w-[250px] z-30"
      />

    </section>
  )
}