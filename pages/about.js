import Head from 'next/head';
import Layout from '../components/layout';

const About = () => {
  return (
    <Layout>
      <Head>
        <title>About - Virtual Airline</title>
        <meta name="description" content="Learn more about our virtual airline and our mission." />
      </Head>
      <div className="relative min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 flex flex-col items-center justify-center p-4">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl w-full p-8">
          <h1 className="text-4xl font-bold text-yellow-600 mb-6 text-center">About Us</h1>
          <p className="text-lg text-gray-700 text-center mb-4">
            Welcome to Fish 'N Chips (legally known as Fishy Virtual). We are dedicated to providing an immersive and enjoyable flight simulation experience. Our team is passionate about aviation and committed to delivering exceptional service and a sense of community.
          </p>
          <p className="text-lg text-gray-700 text-center">
            Stay tuned for more updates and information about our events and flights.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
