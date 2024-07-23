import Head from 'next/head';
import Layout from '../components/layout'; // Adjust the import path if necessary

const Fleet = () => {
  return (
    <Layout>
      <Head>
        <title>Fleet - Virtual Airline</title>
        <meta name="description" content="Explore our fleet of aircraft." />
      </Head>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
        <img
          src="https://cdn.discordapp.com/attachments/1265234902731722939/1265266398968549517/image.png?ex=66a0e2a9&is=669f9129&hm=d79e2462b12817bd5e18d15d5299b551ce4bc1de95c04cd63c03803a89c98b45&" // Replace with your actual image URL
          alt="Fleet"
          className="w-full max-w-4xl h-auto mb-6 object-cover"
        />
        <a href="https://newsky.app/airline/fsh/operations" className="bg-yellow-600 text-white hover:bg-yellow-700 transition duration-300 ease-in-out px-6 py-3 rounded-md">
          Learn More about routes 
        </a>
      </div>
    </Layout>
  );
};

export default Fleet;
