import React, {  useEffect, useState } from 'react'
import styled from "styled-components";
import Loader from '../Loader';
import Header from './Header';
import Footer from './Footer';
import PriceList from '../PriceList';




const MainLayout = ({ children } :any) => {
    const [cryptoData, setCryptoData] = useState([]);
    
    useEffect(() => {
      const url =
        "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "0cbdcdba5emsh8f975896d7dad2ap199d8bjsn8f58d9545f73",
          "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
        },
      };

      async function cryptoAPI() {
        await fetch(url, options)
          .then((response) => response.json())
          .then((data) => setCryptoData(data.data.coins))
          .catch((error) => console.error("Error:", error));
      }
      cryptoAPI();
    }, []);

    return (
      <Layout>
        <>
          {cryptoData?.length === 0 || cryptoData === null ? (
            <Loader />
          ) : (
            <>
              <Header />
              <PriceList cryptoData={cryptoData} />
              <div className="children">{children}</div>
              <Footer />
            </>
          )}
        </>
      </Layout>
    );
};


const Layout = styled.div`
  position: relative;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 200;
  .children {
    width: 100%;
    min-height: 83vh;
    height: fit-content;
  }
`;
export default MainLayout