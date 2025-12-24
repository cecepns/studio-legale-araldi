"use client";

import { useEffect } from "react";
import { Button, Footer, Header } from "@/components/atoms";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className="font-[family-name:var(--font-geist-sans)] space-y-8 md:space-y-24">
      <div className="relative w-full min-h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url('/assets/images/hero-banner.jpg')`,
            filter: "blur(1px)",
            // transform: "scale(1.05)",
          }}
        ></div>

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10">
          <Header />

          <div
            className="flex flex-col items-center justify-center h-screen gap-8"
            data-aos="fade-up"
          >
            <h1 className="text-white text-3xl md:text-7xl" data-aos="fade-up" data-aos-delay="0">
              We are Specialise In
            </h1>
            <h1 className="text-white text-3xl md:text-7xl" data-aos="fade-up" data-aos-delay="100">
              All Criminal & Civil
            </h1>
            <h1 className="text-white text-3xl md:text-7xl" data-aos="fade-up" data-aos-delay="200">
              Laws
            </h1>
            <Button
              variant="outline"
              size="lg"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              LEARN MORE
            </Button>
          </div>
        </div>
      </div>

      <section className="container mx-auto px-4 md:px-0">
        <div className="grid md:grid-cols-2">
          <div data-aos="fade-right">
            <h5 className="text-md text-[#3d9991] font-semibold uppercase mb-2">
              About Us
            </h5>
            <h2 className="text-4xl md:text-5xl text-slate-900 mb-6">
              We're Advocates for <br /> Justice and Right
            </h2>
            <div className="text-slate-700 text-xl mb-8 leading-relaxed">
              We are dedicated advocates for justice and your legal rights.{" "}
              <br /> Our mission is to provide strong representation for <br />{" "}
              individuals and businesses facing legal challenges.
            </div>
          </div>

          <img 
            src="/assets/images/talent-1.jpg" 
            className="rounded-md" 
            data-aos="fade-left"
          />
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-0">
        <div className="text-center mb-12" data-aos="fade-up">
          <p className="text-lg uppercase text-[#3d9991] tracking-wide">
            Our Resources
          </p>
          <h2 className="text-4xl md:text-5xl text-gray-800 mt-2">
            We Live & Work Globally
          </h2>
          <div className="w-16 h-1 mx-auto bg-[#3d9991] mt-4"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center px-6">
          <div data-aos="fade-up" data-aos-delay="0">
            <p className="text-5xl text-[#3d9991] font-light">3200+</p>
            <p className="mt-3 font-semibold text-gray-800">
              Lawyers Across Our Global Platform
            </p>
          </div>
          <div data-aos="fade-up" data-aos-delay="100">
            <p className="text-5xl text-[#3d9991] font-light">100%</p>
            <p className="mt-3 font-semibold text-gray-800">
              On Human Rights Campaign Foundation's 2025
            </p>
          </div>
          <div data-aos="fade-up" data-aos-delay="200">
            <p className="text-5xl text-[#3d9991] font-light">92%</p>
            <p className="mt-3 font-semibold text-gray-800">
              Latham Lawyers Participate in Pro Bono Work
            </p>
          </div>
          <div data-aos="fade-up" data-aos-delay="300">
            <p className="text-5xl text-[#3d9991] font-light">60+</p>
            <p className="mt-3 font-semibold text-gray-800">
              Number of Native Speakers Languages Spoken
            </p>
          </div>
          <div data-aos="fade-up" data-aos-delay="400">
            <p className="text-5xl text-[#3d9991] font-light">239k</p>
            <p className="mt-3 font-semibold text-gray-800">
              Encourages Lawyers to Engage in at Least 50 Hours
            </p>
          </div>
          <div data-aos="fade-up" data-aos-delay="500">
            <p className="text-5xl text-[#3d9991] font-light">14%</p>
            <p className="mt-3 font-semibold text-gray-800">
              Countries in Which the Firm Is Located
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-0">
        <div className="grid md:grid-cols-2 md:gap-12">
          <div className="text-center" data-aos="fade-up" data-aos-delay="0">
            <img
              src="/assets/images/card-1.jpg"
              alt="About"
              className="mx-auto mb-6 w-full h-auto object-cover"
            />
            <h3 className="text-[#3d9991] text-2xl tracking-widest uppercase mb-3">
              About
            </h3>
            <p className="text-slate-700 text-lg mb-4">
              Learn about our background, our methods, <br />
              and our approach to problem solving.
            </p>
            <a href="#" className="text-[#3d9991] font-medium hover:underline">
              Learn More →
            </a>
          </div>

          <div className="text-center" data-aos="fade-up" data-aos-delay="200">
            <img
              src="/assets/images/card-2.jpg"
              alt="Talk to Us"
              className="mx-auto mb-6 w-full h-auto object-cover"
            />
            <h3 className="text-[#3d9991] text-2xl tracking-widest uppercase mb-3">
              Talk to Us
            </h3>
            <p className="text-slate-700 text-lg mb-4">
              Schedule your consultation online today – all in one step. <br />
              There&apos;s no need to wait for a call back, or to find out available
              dates.
            </p>
            <a href="#" className="text-[#3d9991] font-medium hover:underline">
              Schedule Now →
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
