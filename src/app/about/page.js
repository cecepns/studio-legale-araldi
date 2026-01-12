"use client";

import { useEffect, useState } from "react";
import { Header, Footer } from "@/components/atoms";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  const [activeTab, setActiveTab] = useState("about");

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const tabs = [
    { id: "about", label: "About" },
    { id: "reviews", label: "Reviews" },
    { id: "different", label: "What Makes Us Different" },
  ];

  const testimonials = [
    {
      name: "John Doe",
      role: "Client",
      content: "Outstanding legal representation. The team was professional, responsive, and achieved excellent results for my case.",
    },
    {
      name: "Jane Smith",
      role: "Client",
      content: "I couldn't have asked for better legal counsel. Their expertise and dedication made all the difference.",
    },
    {
      name: "Michael Johnson",
      role: "Client",
      content: "Professional, knowledgeable, and truly committed to their clients. Highly recommend their services.",
    },
    {
      name: "Sarah Williams",
      role: "Client",
      content: "The team provided exceptional guidance throughout the entire process. Very satisfied with the outcome.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Intro Section */}
      <div className="relative w-full h-[70vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url('/assets/images/banner.jpg')`,
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
                About
              </h1>
              <p 
                className="text-white text-base sm:text-lg md:text-xl text-center max-w-2xl leading-relaxed" 
                data-aos="fade-up" 
                data-aos-delay="100"
                style={{ 
                  textShadow: '1px 1px 4px rgba(0,0,0,0.5)'
                }}
              >
                Learn more about our firm and what sets us apart
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <section className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Left Column - Tabs */}
          <div className="md:col-span-1" data-aos="fade-right">
            <div className="flex flex-col gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-4 text-left transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-[#3d9991] text-white font-semibold"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="md:col-span-2" data-aos="fade-left">
            {/* About Tab Content */}
            {activeTab === "about" && (
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  About Our Firm
                </h2>
                <div className="text-slate-700 text-lg leading-relaxed space-y-4">
                  <p>
                    We are dedicated advocates for justice and your legal rights. Our mission is to provide strong representation for individuals and businesses facing legal challenges.
                  </p>
                  <p>
                    With years of experience in the legal field, we have built a reputation for excellence, integrity, and unwavering commitment to our clients. We understand that every case is unique, and we approach each one with the attention and care it deserves.
                  </p>
                  <p>
                    Our team of experienced attorneys works tirelessly to ensure that our clients receive the best possible legal representation, combining legal expertise with personalized service.
                  </p>
                </div>
              </div>
            )}

            {/* Reviews Tab Content */}
            {activeTab === "reviews" && (
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  Client Reviews
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 p-6 rounded-lg shadow-sm"
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                    >
                      <p className="text-slate-700 mb-4 italic">
                        &quot;{testimonial.content}&quot;
                      </p>
                      <div className="border-t border-gray-200 pt-4">
                        <p className="font-semibold text-slate-900">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-slate-600">{testimonial.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* What Makes Us Different Tab Content */}
            {activeTab === "different" && (
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  What Makes Us Different
                </h2>
                <div className="text-slate-700 text-lg leading-relaxed space-y-6">
                  <p>
                    Since 2005, our attorneys have practiced Employment Law exclusively. We know the law, and we have the practical experience to back it up. Our attorneys have handled cases in the state, county, and federal courts, and private arbitrations across Texas, Arizona, Michigan and California, including the appellate courts of the 5th, 6th, 8th, and 9th Circuit Federal Courts of Appeals and the United States Supreme Court, as well as the EEOC, NLRB, DOL, and MSPB.
                  </p>
                  
                  <div className="my-6">
                    <img
                      src="/assets/images/talent-1.jpg"
                      alt="Partners"
                      className="w-full h-auto rounded-lg shadow-md"
                    />
                  </div>

                  <p>
                    Our partners Ashley Tremain and Carmen Artaza are Board Certified in Labor & Employment law. Board Certified lawyers are the only attorneys allowed to publicly represent themselves as specialists in a select area of the law. This designation is reserved for attorneys with the highest, public commitment to excellence in their area of law. According to the TBLS, it means we have &quot;substantial, relevant experience&quot; in employment law, as well as &quot;demonstrated, and tested, special competence&quot; in the area. There are more than 70,000 attorneys licensed to practice in Texas. Less than 10% are Board Certified.
                  </p>

                  <p>
                    We don&apos;t use experience as a crutch, and we never stop learning. That&apos;s why our partners are also members of the College of the State Bar of Texas. The College recognizes lawyers who maintain and enhance their professional skills, and the quality of their service to the public, by significant voluntary participation in legal education. That means we go above-and-beyond the minimum attorney education requirements - always striving to improve and to better assist our clients.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
