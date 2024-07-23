import Head from 'next/head';
import Layout from '../components/layout'; // Adjust the import path if necessary

const About = () => {
  return (
    <Layout>
      <Head>
        <title>About Us - Virtual Airline</title>
        <meta name="description" content="Learn more about Virtual Airline, our mission, and the team behind the scenes." />
      </Head>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
        <h1 className="text-4xl font-bold text-yellow-600 mb-4">About Us</h1>
        <p className="text-lg text-gray-700 mb-4">
          Welcome to Virtual Airline! We are passionate about providing an immersive and realistic virtual flying experience.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Our team is composed of experienced aviation enthusiasts who work tirelessly to ensure the best experience for our users.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Whether you're here to explore our fleet, join our community, or participate in events, we strive to offer a platform that meets your needs and exceeds your expectations.
        </p>
        <p className="text-lg text-gray-700">
          Thank you for visiting Virtual Airline. We hope you enjoy your time with us!
        </p>
      </div>
    </Layout>
  );
};

export default About;
