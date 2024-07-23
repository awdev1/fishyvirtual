// components/Layout.js
import Nav from './Nav';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-virtual-airline bg-cover bg-center">
      <Nav />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
