import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Reviews from '../reviews/Reviews';
import Plans from '../plans/Plans'
import Recipe from '../Recipe/Recipe';
import Boxstory from '../boxstory/Boxstory';
import Page from '../page/Page';
import Cart from '../cart/Cart';
import Box from '../Box/Box';

function Home() {
  return (
    <>
      <Header />
      <Page/>
      <Cart/>
      <Boxstory/>
      <Plans/>
      <Box/>
      <Recipe/>
      <Reviews/>
      <Footer />
      </>
  );
}

export default Home;
