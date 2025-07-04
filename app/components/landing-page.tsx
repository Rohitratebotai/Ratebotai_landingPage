"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Building, DollarSign, BarChart3, Clock, CheckCircle, Star, Zap } from "lucide-react"
import Image from "next/image"

export default function RateBotLanding() {



  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Image src="/ratebotai-logo.png" alt="RateBotAi" width={200} height={50} className="h-8 w-auto" />
          </div>
          <Button
            className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white border-0"
            onClick={() => document.getElementById("demo-section")?.scrollIntoView({ behavior: "smooth" })}
          >
            GET A FREE DEMO
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-gray-900 via-purple-900/20 to-cyan-900/20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  More Bookings,{" "}
                  <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    Zero Commission
                  </span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-300 font-medium">Your Hotel, Your Rules.</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white text-base sm:text-lg px-6 sm:px-8 py-3 border-0 w-full sm:w-auto"
                  onClick={() => document.getElementById("demo-section")?.scrollIntoView({ behavior: "smooth" })}
                >
                  GET A FREE DEMO
                </Button>
              </div>

              <div className="pt-4 sm:pt-6">
                <p className="text-sm text-gray-400 mb-3">Trusted by hotels worldwide</p>
                <div className="flex flex-wrap items-center gap-4 sm:gap-6 opacity-60 text-gray-400">
                  <span className="text-base sm:text-lg font-semibold">agoda</span>
                  <span className="text-base sm:text-lg font-semibold">Booking.com</span>
                  <span className="text-base sm:text-lg font-semibold">airbnb</span>
                  <span className="text-base sm:text-lg font-semibold">makemytrip</span>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative">
                <Image
                  src="/hero-booking-ecosystem.png"
                  alt="Complex hotel booking ecosystem with multiple OTA platforms"
                  width={600}
                  height={500}
                  className="rounded-lg shadow-2xl w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-12 sm:py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <Image
                src="/concerned-businessman-problems.png"
                alt="Businessman concerned about OTA problems and booking challenges"
                width={500}
                height={400}
                className="rounded-lg w-full h-auto"
              />
            </div>
            <div className="space-y-4 sm:space-y-6 order-1 md:order-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                Tired of losing profits to OTAs?
              </h2>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                  <span className="text-base sm:text-lg text-gray-300">OTA Commissions eating your profits</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                  <span className="text-base sm:text-lg text-gray-300">Double bookings tough to handle?</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                  <span className="text-base sm:text-lg text-gray-300">
                    Struggling with overbooking or under booking?
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-purple-900/10 to-cyan-900/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">The Solution is Here</h2>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-500 to-green-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white">0% Commission</h3>
                    <p className="text-sm sm:text-base text-gray-300">Keep every rupee you earn.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white">More Control</h3>
                    <p className="text-sm sm:text-base text-gray-300">Manage all bookings from one dashboard.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white">Direct Revenue</h3>
                    <p className="text-sm sm:text-base text-gray-300">Real-time availability to prevent overbooking.</p>
                  </div>
                </div>
              </div>
              <div className="pt-4">
                <p className="text-sm text-gray-400 mb-2">Built by the team from</p>
                <p className="text-base sm:text-lg font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  IIT BOMBAY
                </p>
              </div>
              <Button
                className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white border-0 w-full sm:w-auto"
                onClick={() => document.getElementById("demo-section")?.scrollIntoView({ behavior: "smooth" })}
              >
                GET A FREE DEMO
              </Button>
            </div>
            <div>
              <Image
                src="/happy-hotel-owner-dashboard.png"
                alt="Happy hotel owner using RateBotAi dashboard successfully"
                width={500}
                height={400}
                className="rounded-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Why Choose RateBotAi?</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <Card className="text-center p-4 sm:p-6 hover:shadow-lg transition-shadow bg-gray-700 border-gray-600 hover:border-purple-500/50">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Building className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">Direct Bookings</h3>
              <p className="text-sm sm:text-base text-gray-300">
                Direct Bookings from your website. 0% Commission. No OTA cuts!
              </p>
            </Card>

            <Card className="text-center p-4 sm:p-6 hover:shadow-lg transition-shadow bg-gray-700 border-gray-600 hover:border-purple-500/50">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-green-500/20 to-green-400/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-green-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">Real-Time Availability</h3>
              <p className="text-sm sm:text-base text-gray-300">
                No overbooking or underbooking. Reduces the likelihood of double bookings.
              </p>
            </Card>

            <Card className="text-center p-4 sm:p-6 hover:shadow-lg transition-shadow bg-gray-700 border-gray-600 hover:border-purple-500/50">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500/20 to-purple-400/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <BarChart3 className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibent mb-2 text-white">Smart Dashboard</h3>
              <p className="text-sm sm:text-base text-gray-300">Manage all bookings & revenue in one place.</p>
            </Card>

            <Card className="text-center p-4 sm:p-6 hover:shadow-lg transition-shadow bg-gray-700 border-gray-600 hover:border-purple-500/50">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-orange-500/20 to-orange-400/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-orange-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">Automated System</h3>
              <p className="text-sm sm:text-base text-gray-300">Saves time & reduces errors.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Demo Form Section */}
      {/* ✅ Demo Form Section (updated iframe embed) */}
      <section id="demo-section" className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to See RateBotAi in Action?
            </h2>
            <p className="text-xl text-gray-300">
              Get a personalized demo and see how we can transform your hotel bookings
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <iframe
                width="100%"
                height="590px"
                src="https://crm.zoho.in/crm/WebFormServeServlet?rid=76da5dd61e65953f3d7c2040a3e28cea474c2944aac950ef3e34f73261a1c21cad3ba71939b3234fda77b7c889f00831gid233a9c6d70fc2a7cf0858152c303cdefccd9c849ce66ffc88c6ce07912e3d806"
                frameBorder="0"
                className="w-full min-h-[590px] rounded"
                title="RateBotAi Demo Request Form"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Hoteliers Say</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6 bg-gray-700 border-gray-600 hover:border-purple-500/50 transition-colors">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-lg text-gray-300 mb-4">
                "Since switching to direct bookings, my profits have increased by 30%"
              </blockquote>
              <p className="text-sm text-gray-500">- Hoteliers Testimonial</p>
            </Card>

            <Card className="p-6 bg-gray-700 border-gray-600 hover:border-purple-500/50 transition-colors">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-lg text-gray-300 mb-4">
                "No more paying OTAs! The system is easy & saves so much time."
              </blockquote>
              <p className="text-sm text-gray-500">- Hoteliers Testimonial</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Special Offer */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-white text-orange-600 text-lg px-4 py-2 mb-6">SPECIAL OFFER</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get started at ₹5000/-</h2>
          <p className="text-xl mb-8">No hidden fees, No commissions.</p>
          <Button
            size="lg"
            className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-3"
            onClick={() => document.getElementById("demo-section")?.scrollIntoView({ behavior: "smooth" })}
          >
            GET A FREE DEMO
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-gray-700 rounded-lg px-6 bg-gray-700">
              <AccordionTrigger className="text-left text-white hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-cyan-400 hover:bg-clip-text">
                Is there any commission or hidden cost?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                No, RateBotAi charges zero commission on bookings. You pay only a flat monthly fee and keep 100% of your
                booking revenue.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-gray-700 rounded-lg px-6 bg-gray-700">
              <AccordionTrigger className="text-left text-white hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-cyan-400 hover:bg-clip-text">
                Can I integrate this with my existing website?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Yes, RateBotAi easily integrates with any existing website. Our team provides full technical support for
                seamless integration.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-gray-700 rounded-lg px-6 bg-gray-700">
              <AccordionTrigger className="text-left text-white hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-cyan-400 hover:bg-clip-text">
                How does the booking engine work?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Our booking engine provides real-time availability, automated pricing, and instant confirmations. Book a
                free demo to see the complete system in action.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Take Control of Your Bookings?</h2>
          <Button
            size="lg"
            className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-3"
            onClick={() => document.getElementById("demo-section")?.scrollIntoView({ behavior: "smooth" })}
          >
            GET A FREE DEMO TODAY
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <Image src="/ratebotai-logo.png" alt="RateBotAi" width={200} height={50} className="h-8 w-auto" />
          </div>
          <div>
            <p className="text-gray-400">
              © {new Date().getFullYear()} RateBotAi. All rights reserved. Built by IIT Bombay team.
            </p>
            <div className="text-gray-400 mt-4 space-x-4">
              <a href="https://ratebotai.com/terms-and-condition">Terms and Condition</a>
              <a href="https://ratebotai.com/privacy-policy">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
