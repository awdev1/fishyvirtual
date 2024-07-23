import Head from 'next/head';
import Layout from '../components/layout'; // Adjust the import path if necessary

const Events = () => {
  return (
    <Layout>
      <Head>
        <title>Events - Virtual Airline</title>
        <meta name="description" content="Stay tuned for upcoming events at our virtual airline." />
      </Head>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h1 className="text-3xl font-bold text-yellow-600 mb-4">No Events at the Moment</h1>
          <p className="text-gray-700">We currently don't have any events scheduled. Please check back later for updates.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Events;
