import React, { useEffect, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Preloader from '../components/preloader/preloader';
import { motion } from 'framer-motion';
import '../styles/globals.css';
import '../styles/header.scss';
import '../styles/contact.css';
import Router from 'next/router';
import NProgress from 'nprogress';
import Layout from '../components/layout/layout';

function MyApp({ Component, pageProps, router }) {
  React.useLayoutEffect = React.useEffect;

  // set a timeout for the preloader to show
  const [showPreloader, setShowPreloader] = useState(false);

  Router.events.on('routeChangeStart', () => {
    NProgress.start(), setShowPreloader(true);
  });
  Router.events.on('routeChangeComplete', () => {
    NProgress.done(), setShowPreloader(false);
  });
  Router.events.on('routeChangeError', () => {
    NProgress.done(), setShowPreloader(false);
  });
  return (
    <>
      {
        // show the preloader if it's true
        showPreloader ? (
          <Preloader />
        ) : (
          <motion.div
            key={router.route}
            initial={{ opacity: 0.4, transform: 'scale(1)' }}
            animate={{ opacity: 1, transform: 'scale(1)' }}>
            <Layout>
              <Component {...pageProps} />

              <Analytics />
            </Layout>
          </motion.div>
        )
      }
    </>
  );
}

export default MyApp;
