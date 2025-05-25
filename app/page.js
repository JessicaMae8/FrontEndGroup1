// This is our landing page
'use client';

import Image from 'next/image';
import Link from "next/link";
import Navbar from '../components/Navbar/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      {/* HOME */}
      <section id="home">
        <div
          className="h-screen w-full flex flex-col items-center justify-center px-6 py-20 mt-0 text-white text-center pt-20 bg-black/60"
          style={{
            backgroundImage: "url('/img/lib-bg.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
                <div className="backdrop-blur-lg bg-black/60 rounded-3xl px-8 py-6 mb-6 shadow-lg max-w-2xl w-full">
        <h1 className="text-3xl sm:text-2xl md:text-6xl font-bold text-white leading-tight mb-4 drop-shadow">
          Welcome home book lover. Your library is ready.
        </h1>
        <p className="text-base sm:text-lg md:text-xl max-w-xl mb-2 mt-3 leading-relaxed text-gray-100 drop-shadow">
         Browse it. Borrow it. Read it. Our library puts your entire collection at your fingertips.
          Fast, simple and seamlessly organized.
        </p>
      </div>
      <a
              href="/admin"
              onClick={() => setShowAuthModal(true)}
              className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-500 hover:to-orange-500 
              text-white font-semibold px-6 py-3 rounded-full transition duration-300 mb-8"
            >
              Admin Panel Test ➤
            </a>
      <a
              href="/library"
              onClick={() => setShowAuthModal(true)}
              className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-500 hover:to-orange-500 
              text-white font-semibold px-6 py-3 rounded-full transition duration-300 mb-8"
            >
              Library for Users Test ➤
            </a>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        </div>
        </div>
      </section>

      {/* ABOUT */}
            <section className="min-h-screen w-full bg-gray-900 py-24 px-4 md:px-16 lg:px-32 text-white" id="about">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 pt-20">About Our Library System</h2>
            <p className="text-gray-300 mb-6">
              Welcome to the Future of Library Management
              <br /><br />
              Our Library Management System is a comprehensive digital solution designed to revolutionize how libraries function. Whether you're an administrator overseeing the entire collection or a user simply looking to borrow a book, our system offers a seamless, intuitive experience tailored to your needs.
              <br /><br />
              From cataloging thousands of titles to managing user profiles and monitoring borrowing activity, every feature has been thoughtfully built to reduce manual work and increase efficiency. The system supports real-time inventory tracking, helping you instantly locate books, monitor availability, and avoid redundancies. Automated workflows handle common tasks like issuing and returning books, sending due date reminders, and generating reports — freeing up your time for what truly matters: serving readers.
              <br /><br />
              The clean, easy-to-navigate dashboard puts powerful tools at your fingertips. With clear visual insights, quick search capabilities, and responsive design, managing your library has never been this simple or smart.
            </p>
            <p className="text-gray-400">
              Whether you're managing a personal home library, a school media center, or a public institution, our system adapts to your environment and scales with your collection. By combining automation, accessibility, and modern design, we’re not just supporting libraries — we’re transforming them for the digital age.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="rounded-2xl overflow-hidden border-4 border-yellow-400 shadow-lg w-[480px] h-[320px] flex items-center justify-center bg-gray-800">
              <Image
                src="/img/.jpg"
                alt="image preview"
                width={480}
                height={320}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* GROUP PROFILES */}
      <section className="bg-white-900 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-gray-800 p-6 rounded-lg text-center shadow-md">
              <Image src="/img/.jpg" alt="Profile" width={96} height={96} className="w-24 h-24 mx-auto rounded-full mb-4" />
              <h3 className="text-lg font-semibold">James Smith</h3>
              <p className="text-gray-400">Backend Developer</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg text-center shadow-md">
              <Image src="/img/.jpg" alt="Profile" width={96} height={96} className="w-24 h-24 mx-auto rounded-full mb-4" />
              <h3 className="text-lg font-semibold">Lily Jane</h3>
              <p className="text-gray-400">Frontend Developer</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg text-center shadow-md">
              <Image src="/img/.jpg" alt="Profile" width={96} height={96} className="w-24 h-24 mx-auto rounded-full mb-4" />
              <h3 className="text-lg font-semibold">Shan Vega</h3>
              <p className="text-gray-400">Frontend Developer</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg text-center shadow-md">
              <Image src="/img/.jpg" alt="Profile" width={96} height={96} className="w-24 h-24 mx-auto rounded-full mb-4" />
              <h3 className="text-lg font-semibold">Bella Montefalco</h3>
              <p className="text-gray-400">Frontend Developer</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg text-center shadow-md">
              <Image src="/img/.jpg" alt="Profile" width={96} height={96} className="w-24 h-24 mx-auto rounded-full mb-4" />
              <h3 className="text-lg font-semibold">Miles Lish</h3>
              <p className="text-gray-400">Backend Developer</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg text-center shadow-md">
              <Image src="/img/.jpg" alt="Profile" width={96} height={96} className="w-24 h-24 mx-auto rounded-full mb-4" />
              <h3 className="text-lg font-semibold">Dennis Gray</h3>
              <p className="text-gray-400">Frontend Developer</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg text-center shadow-md">
              <Image src="/img/.jpg" alt="Profile" width={96} height={96} className="w-24 h-24 mx-auto rounded-full mb-4" />
              <h3 className="text-lg font-semibold">Drew Joseph</h3>
              <p className="text-gray-400">Backend Developer</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE */}
          <section
      id="services"
      className="relative bg-cover bg-center bg-no-repeat text-white py-24 px-6"
      style={{
        backgroundImage: "url('/img/lib1.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-45"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Services</h2>
        <p className="text-lg md:text-2xl text-gray-200 mb-14 max-w-2xl mx-auto">
          Enjoy Easy Access to All Your Reads.
        </p>

        <div className="bg-gradient-to-r from-yellow-500 to-orange-800 p-8 rounded-lg shadow-md mb-8">
          <h3 className="text-2xl font-semibold mb-3">Book Borrowing</h3>
          <p className="text-white text-base">Borrow books seamlessly with our smart borrowing system.</p>
        </div>

        <div className="bg-gradient-to-r from-yellow-500 to-orange-800 p-8 rounded-lg shadow-md mb-8">
          <h3 className="text-2xl font-semibold mb-3">Online Catalog</h3>
          <p className="text-white text-base">Browse our digital catalog from any device, anytime.</p>
        </div>

        <div className="bg-gradient-to-r from-yellow-500 to-orange-800 p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-3">Admin Tools</h3>
          <p className="text-white text-base">Manage users, books, and activity from an intuitive dashboard.</p>
        </div>
      </div>
    </section>

      {/* CONTACT */}
      <section id="contact" className="min-h-screen w-full text-white py-16 px-4 pt-40"
        style={{
          backgroundImage: "url('/img/lib1.jpg')",
        }}>
        <div className="max-w-6xl mx-auto bg-gray-900 rounded-xl p-10 shadow-lg">
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-1/2 space-y-8">
              <div className="flex items-start gap-4">
                <i className="fas fa--marker-alt text-2xl text-yellow-400 mt-1"></i>
                <div>
                  <h3 className="text-lg font-semibold">Address</h3>
                  <p className="text-gray-300">T. De Castro St., Bulan, Sorsogon</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <i className="fas fa-phone-alt text-2xl text-yellow-400 mt-1"></i>
                <div>
                  <h3 className="text-lg font-semibold">Phone</h3>
                  <p className="text-gray-300">+123 456 7890</p>
                  <p className="text-gray-300">+123 456 7890</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <i className="fas fa-envelope text-2xl text-yellow-400 mt-1"></i>
                <div>
                  <h3 className="text-lg font-semibold">Email</h3>
                  <p className="text-gray-300">G1LibraNet@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-2">Send us a message</h3>
              <p className="text-gray-300 mb-6">If you have any questions or need help, reach out to us!</p>

              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Enter your email"
                    className="w-full bg-gray-700 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
                <div>
                  <textarea
                    rows="5"
                    placeholder="Type your message here..."
                    className="w-full bg-gray-700 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="button"
                    className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-2 px-6 rounded-full transition duration-300"
                  >
                    Send Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="footer" className="bg-gray-900 text-gray-300 py-16 px-6">
        {/* ...unchanged footer content... */}
      </footer>
    </>
  );
}
