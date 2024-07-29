import Head from 'next/head';
import Layout from '../components/layout'; // Adjust the import path if necessary

const Fleet = () => {
  return (
    <Layout>
      <Head>
        <title>Fleet - Virtual Airline</title>
        <meta name="description" content="Discover our modern and diverse fleet of aircraft. Explore the details and specifications of each model in our fleet." />
      </Head>
      <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 flex flex-col items-center justify-center p-4 relative">
        <div className="absolute inset-0 bg-black opacity-30 z-0"></div>
        <div className="z-10 flex flex-col items-center">
          <img
            src="https://i.imgur.com/wgiG8EM.jpeg" 
            alt="Fleet"
            className="w-full max-w-4xl h-auto mb-6 object-cover rounded-md shadow-lg"
          />
          <h1 className="text-3xl font-bold mb-4 text-white">Our Fleet</h1>
          <p className="text-lg text-white mb-6 text-center">
            Explore our state-of-the-art fleet, equipped with the latest technology to ensure a very safe and comfortable journey. Each aircraft in our fleet is meticulously maintained and offers a superior flying experience.
          </p>
          <a href="https://newsky.app/airline/fsh/operations" className="bg-yellow-600 text-white hover:bg-yellow-700 transition duration-300 ease-in-out px-6 py-3 rounded-md shadow-md">
            Learn More About Our Routes
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default Fleet;
