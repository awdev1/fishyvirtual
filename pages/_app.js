// pages/_app.js
import '../style/globals.css';
import Nav from '../components/Nav';
import 'animate.css';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
