"use client";

import { useEffect } from "react";
import { Header, Footer, Button } from "@/components/atoms";
import AOS from "aos";
import "aos/dist/aos.css";

export default function FAQ() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  // Replace this URL with your actual Typeform embed URL
  // Get the embed URL from Typeform: Share > Embed > Full page
  // Format examples:
  // - https://FORM_ID.typeform.com/to/FORM_ID
  // - https://form.typeform.com/to/YOUR_FORM_ID
  const typeformUrl = "https://form.typeform.com/to/oVvSLP1l";

  const scrollToForm = () => {
    const formSection = document.getElementById("typeform-section");
    formSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Intro Section */}
      <div className="relative w-full h-[70vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url('/assets/images/bg-faq.jpg')`,
            filter: "blur(1px)",
          }}
        ></div>

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10">
          <Header />

          <div className="flex flex-col items-center justify-center h-[40vh]">
          <div
            className="flex flex-col items-center justify-center gap-6 px-6"
            data-aos="fade-up"
          >
            <h1 className="text-white text-4xl md:text-7xl font-bold" data-aos="fade-up" data-aos-delay="0">
              FAQ
            </h1>
            <p className="text-white text-lg md:text-xl text-center max-w-2xl" data-aos="fade-up" data-aos-delay="100">
              Frequently Asked Questions
            </p>
          </div>
          </div>
        </div>
      </div>

      {/* Typeform Section */}
      <section id="typeform-section" className="md:max-w-3/4 w-full mx-auto mb-10 mt-10">
        <div className="container mx-auto px-6">
          <div className="w-full h-96 md:h-[550px]">
            <iframe
              id="typeform-full"
              width="100%"
              height="100%"
              frameBorder="0"
              allow="camera; microphone; autoplay; encrypted-media;"
              src={typeformUrl}
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

