import Head from 'next/head';
import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Virtual Airline</title>
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 bg-opacity-50 p-6">
        <h1 className="text-4xl font-bold text-yellow-500 mb-4">Fish and Chips Virtual</h1>
        <p className="mt-4 text-lg text-gray-300 mb-6">Your Ultimate Airline Experience</p>
        <div className="flex space-x-4">
          <a href="https://newsky.app/airline/FSH/info" passHref>
            <button className="bg-yellow-500 text-white hover:bg-yellow-600 transition duration-300 ease-in-out px-6 py-3 rounded-md font-medium">
              Learn More
            </button>
          </a>
          <a href="https://discord.gg/EuESVeSx" target="_blank" rel="noopener noreferrer">
            <button className="bg-blue-600 text-white hover:bg-blue-700 transition duration-300 ease-in-out px-6 py-3 rounded-md font-medium">
              Join Discord
            </button>
          </a>
        </div>
      </div>
    </Layout>
  );
}
