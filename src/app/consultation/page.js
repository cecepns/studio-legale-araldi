"use client";

import { useEffect } from "react";
import { Header, Footer } from "@/components/atoms";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

export default function Consultation() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

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
            backgroundImage: `url('/assets/images/bg-consultation.gif')`,
            filter: "blur(1px)",
          }}
        ></div>

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10">
          <Header />

          <div className="flex flex-col items-center justify-center min-h-[40vh] px-4 py-12 md:py-0">
            <div
              className="flex flex-col items-center justify-center gap-4 md:gap-6 px-6 text-center"
              data-aos="fade-up"
            >
              <h1 
                className="text-white text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight" 
                data-aos="fade-up" 
                data-aos-delay="0"
                style={{ 
                  textShadow: '2px 2px 8px rgba(0,0,0,0.5)',
                  letterSpacing: '-0.02em'
                }}
              >
                Consultation
              </h1>
              <p 
                className="text-white text-base sm:text-lg md:text-xl text-center max-w-2xl leading-relaxed" 
                data-aos="fade-up" 
                data-aos-delay="100"
                style={{ 
                  textShadow: '1px 1px 4px rgba(0,0,0,0.5)'
                }}
              >
                Schedule your phone consultation here.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Consultation Section */}
      <section className="container mx-auto px-6 pt-16 md:pt-24">
        <div className="max-w-4xl mx-auto">
          {/* Main Consultation Block */}
          <div
            className="bg-[#f5f0e8] rounded-lg p-8 md:p-12 mb-12"
            data-aos="fade-up"
          >
            <div className="flex flex-col items-center text-center">
              {/* Clipboard Icon */}
              <div className="mb-6" data-aos="fade-up" data-aos-delay="100">
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Clipboard */}
                  <rect
                    x="20"
                    y="10"
                    width="40"
                    height="55"
                    rx="2"
                    fill="#2d7d7d"
                  />
                  {/* Clipboard Top */}
                  <rect
                    x="28"
                    y="5"
                    width="24"
                    height="12"
                    rx="2"
                    fill="#2d7d7d"
                  />
                  {/* Document */}
                  <rect
                    x="26"
                    y="18"
                    width="28"
                    height="42"
                    rx="1"
                    fill="#fef9e7"
                    stroke="#dc2626"
                    strokeWidth="2"
                  />
                  {/* Document Lines */}
                  <line
                    x1="30"
                    y1="25"
                    x2="50"
                    y2="25"
                    stroke="#4a5568"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="30"
                    y1="32"
                    x2="50"
                    y2="32"
                    stroke="#4a5568"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="30"
                    y1="39"
                    x2="48"
                    y2="39"
                    stroke="#4a5568"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="30"
                    y1="46"
                    x2="50"
                    y2="46"
                    stroke="#4a5568"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>

              {/* Heading */}
              <h2
                className="text-3xl md:text-4xl font-bold text-[#5c4033] mb-4"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Schedule Your Attorney Consultation
              </h2>

              {/* Description */}
              <p
                className="text-lg md:text-xl text-[#5c4033] mb-8"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Pick a date and time that works for you.
                <br />
                We&apos;ll get you the advice you need.
              </p>

              {/* CTA Button */}
              <button
                onClick={scrollToForm}
                className="bg-[#e63946] hover:bg-[#d62839] text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                Let&apos;s Get Started
              </button>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white rounded-lg p-8 md:p-12" data-aos="fade-up">
            <h3 className="text-2xl md:text-3xl font-bold text-[#5c4033] mb-6 italic">
              FAQ: Do You Give Free Consultations?
            </h3>

            <div className="text-[#5c4033] text-base md:text-lg leading-relaxed space-y-4 mb-8">
              <p>
                No. This is because we take the time to give you a truly well-rounded evaluation. At Tremain Artaza, we won&apos;t just tell you whether we&apos;ll take the case, or rush you into a lawsuit. We give you all the information and tools you need to make an informed decision for yourself - no pressure or sales pitches. We&apos;ll discuss the costs and benefits associated with pursuing legal action, what approach is in your best interest, and what you can expect if you choose to pursue a claim. We devote the utmost attention and care to our existing clients, and we want to do the same for you. If you don&apos;t have a case, we&apos;ll make sure you understand why, and discuss what other options might be available to you.
              </p>
              <p>
                If you don&apos;t wish to pay for a consultation, you can complete{" "}
                <Link href="/intake" className="text-[#2d7d7d] hover:underline font-semibold">
                  Intake Forms for New Clients
                </Link>
                . This takes about 15 minutes, we review your answers, and we will respond via email if we can help. This option does not include legal advice or strategies.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link
                href="/intake"
                className="bg-[#4a5568] hover:bg-[#2d3748] text-white font-semibold px-8 py-4 rounded-lg text-center transition-colors duration-200 uppercase tracking-wide"
              >
                Potential Client Intake Forms
              </Link>
              <Link
                href="/rates"
                className="bg-[#4a5568] hover:bg-[#2d3748] text-white font-semibold px-8 py-4 rounded-lg text-center transition-colors duration-200 uppercase tracking-wide"
              >
                Learn More About Our Rates
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Typeform Section */}
      <section id="typeform-section" className="md:max-w-3/4 w-full mx-auto mb-10 md:mt-10">
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


