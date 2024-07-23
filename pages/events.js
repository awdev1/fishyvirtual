import Head from 'next/head';
import Layout from '../components/layout'; // Adjust the import path if necessary

const Events = () => {
  return (
    <Layout>
      <Head>
        <title>Events - Virtual Airline</title>
        <meta name="description" content="Check out the latest events and updates from our virtual airline." />
      </Head>
      <div className="min-h-screen bg-gray-100 p-4 flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl w-full">
          <div className="p-8">
            <h1 className="text-4xl font-bold text-yellow-600 mb-6 text-center">Upcoming Events</h1>
            <p className="text-lg text-gray-700 text-center">
              There are no events scheduled at the moment. Please check back later for updates.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Events;
