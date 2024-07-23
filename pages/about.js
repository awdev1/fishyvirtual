import Head from 'next/head';
import Layout from '../components/layout'; // Adjust the import path if necessary

const About = () => {
  return (
    <Layout>
      <Head>
        <title>About - Virtual Airline</title>
        <meta name="description" content="Learn more about our virtual airline and our mission." />
      </Head>
      <div className="min-h-screen bg-gray-100 p-4">
        <h1 className="text-4xl font-bold text-yellow-600 mb-6 text-center">About Us</h1>
        <p className="text-lg text-gray-700 text-center">
          Welcome to our virtual airline. We are dedicated to providing an immersive and enjoyable flight simulation experience. Our team is passionate about aviation and committed to delivering exceptional service and a sense of community.
        </p>
        <p className="text-lg text-gray-700 text-center mt-4">
          Stay tuned for more updates and information about our events and flights.
        </p>
      </div>
    </Layout>
  );
};

export default About;
