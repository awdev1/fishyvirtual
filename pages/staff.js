import Head from 'next/head';
import Layout from '../components/layout'; // Adjust the import path if necessary

const staffMembers = [
  {
    id: 1,
    name: 'Aiden B',
    role: 'Director',
    image: 'https://cdn.discordapp.com/avatars/794565114744406036/a185cb73087bad5618cdd00fc1b2cb22.png?size=512',
  },
  {
    id: 2,
    name: 'Alastair V',
    role: 'Director',
    image: 'https://cdn.discordapp.com/avatars/983046931708268615/8c34e9e347a99299039c77ca62fb8e96.png?size=512',
  },
  {
    id: 3,
    name: 'Luca K',
    role: 'Training Standards',
    image: 'https://cdn.discordapp.com/avatars/621365826045345794/f233f23c77c57e7720e11dcfc3cf05eb.png?size=512',
  },
  {
    id: 4,
    name: 'Rishab S',
    role: 'Operations, Tech',
    image: 'https://cdn.discordapp.com/avatars/1254120574024679488/ebec173fa1aae753a80681d49aa8e4d1.png?size=512',
  },
  {
    id: 5,
    name: 'Benjamin K',
    role: 'Tech',
    image: 'https://cdn.discordapp.com/avatars/1072581197454123080/087236e93204d2b13eb455c82176340b.png?size=512',
  },
  // Add more staff members as needed
];

const Staff = () => {
  return (
    <Layout>
      <Head>
        <title>Staff - Virtual Airline</title>
        <meta name="description" content="Meet the dedicated staff of our virtual airline." />
      </Head>
      <div className="min-h-screen bg-gray-100 p-4">
        <h1 className="text-4xl font-bold text-custom-yellow mb-6 text-center">Meet Our Staff</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {staffMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col items-center p-4 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:border-yellow-500 border-2 border-transparent"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 object-cover rounded-full border-4 border-custom-yellow mb-4 transition-transform duration-300 ease-in-out hover:scale-110"
              />
              <h2 className="text-2xl font-semibold text-custom-blue mb-2">{member.name}</h2>
              <h3 className="text-xl font-medium text-custom-gray mb-2">{member.role}</h3>
              {/* Assuming there is no description field in your data, so removing <p> tag */}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Staff;
