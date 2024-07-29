import Head from 'next/head';
import Layout from '../components/layout';
import 'animate.css'; // Ensure Animate.css is imported

const JoinUs = () => {
  return (
    <Layout>
      <Head>
        <title>Join Us - Virtual Airline</title>
        <meta name="description" content="Join our virtual airline and become part of our community. Discover the benefits of membership and sign up today!" />
      </Head>
      <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black p-6">
        <div className="absolute inset-0">
          <img
            src="https://i.imgur.com/wgiG8EM.jpeg" 
            alt="Join Us"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-2xl mx-auto">
          <h1 className="text-4xl font-extrabold text-white mb-6 animate__animated animate__fadeIn">Join us at Fishy Virtual!</h1>
          <p className="text-lg text-gray-200 mb-6 animate__animated animate__fadeIn">
            Become a part of our growing community and experience the thrill of virtual aviation. Enjoy exclusive events, connect with fellow aviation enthusiasts, and be part of a awesome team.
          </p>
          <ul className="text-lg text-gray-200 mb-6 list-disc list-inside space-y-2 animate__animated animate__fadeIn animate__delay-1s">
            <li>Access to events and flights</li>
            <li>Opportunity to connect with other aviatiors</li>
            <li>Become part of a great community</li>
          </ul>
          <a href="https://newsky.app/airline/FSH" target="_blank" rel="noopener noreferrer">
            <button className="bg-yellow-600 text-white hover:bg-yellow-600 transition-transform duration-300 ease-in-out px-6 py-3 rounded-md font-medium transform hover:scale-105 hover:shadow-lg animate__animated animate__fadeIn animate__delay-2s">
              Join Now
            </button>
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default JoinUs;
