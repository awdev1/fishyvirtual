import Head from 'next/head';
import Layout from '../components/layout';
import 'animate.css'; 

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Virtual Airline</title>
      </Head>
      <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black p-6">
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src="https://i.imgur.com/wgiG8EM.jpeg" // Replace with your image URL
            alt="Virtual Airline"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl font-extrabold text-yellow-500 mb-4 animate__animated animate__fadeIn animate__delay-1s">Fish and Chips Virtual</h1>
          <p className="mt-4 text-xl text-gray-300 mb-6 animate__animated animate__fadeIn animate__delay-1s">Your Ultimate Airline Experience</p>
          <div className="flex space-x-4">
            <a href="https://newsky.app/airline/FSH/info" passHref>
              <button className="bg-yellow-500 text-white hover:bg-yellow-600 transition-transform duration-300 ease-in-out px-6 py-3 rounded-md font-medium transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/50 animate__animated animate__fadeIn animate__delay-3s">
                Learn More
              </button>
            </a>
            <a href="https://discord.gg/EuESVeSx" target="_blank" rel="noopener noreferrer">
              <button className="bg-blue-600 text-white hover:bg-blue-700 transition-transform duration-300 ease-in-out px-6 py-3 rounded-md font-medium transform hover:scale-105 hover:shadow-lg hover:shadow-blue-600/50 animate__animated animate__fadeIn animate__delay-3s">
                Join our Discord
              </button>
            </a>
            <a href="./joinus" rel="noopener noreferrer">
              <button className="bg-blue-600 text-white hover:bg-blue-700 transition-transform duration-300 ease-in-out px-6 py-3 rounded-md font-medium transform hover:scale-105 hover:shadow-lg hover:shadow-blue-600/50 animate__animated animate__fadeIn animate__delay-3s">
                Join our Airline
              </button>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
