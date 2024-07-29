import Head from 'next/head';
import Layout from '../components/layout'; // Adjust the import path if necessary

const Events = () => {
  return (
    <Layout>
      <Head>
        <title>Events - Virtual Airline</title>
        <meta name="description" content="Check out the latest events and updates from our virtual airline." />
      </Head>
      <div className="relative min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center p-4">
        
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10 bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl w-full p-8">
          <h1 className="text-4xl font-bold text-yellow-600 mb-6 text-center">Upcoming Events</h1>
          <p className="text-lg text-gray-700 text-center">
            There are no events scheduled at the moment. Please check back later for updates.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Events;
