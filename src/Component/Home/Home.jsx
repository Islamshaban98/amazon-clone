import React from "react";
import Product from "../Product/Product";
import "./Home.css";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__img"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_TallHero_Gamers_en_US_2x._CB667161802_.jpg"
          alt="amazon-img"
        />
        <div className="home__row">
          <Product
            id="1"
            title="Shop laptops and tablet"
            price={15.9}
            rating={3}
            img="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Laptops_379x304_1X_en_US._SY304_CB418608471_.jpg"
          />

          <Product
            id="2"
            title="Explore home bedding"
            price="220"
            img="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_HomeBedding_Single_Cat_1x._SY304_CB418596953_.jpg"
          />
          <Product
            id="3"
            title="Explore home bedding"
            price="220"
            img="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Returns_1x._SY304_CB432774714_.jpg"
          />
        </div>
        <div className="home__row">
          <Product 
          id="4"
          title="Find your ideal TV"
          img="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_TV_2X._SY304_CB432517900_.jpg"
          price="630"
          />
          <Product 
          id="5"
          title="Oculus"
          img="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Dash_Oculus_1x._SY304_CB667158353_.jpg"
          price="120"
          />
        </div>
        <div className="home__row">
          <Product 
          id="6"
          title="Git fit at home"
          img="https://images-na.ssl-images-amazon.com/images/G/01/events/GFAH/GWDesktop_SingleImageCard_fitathome_1x._SY304_CB434924743_.jpg"
          price="500"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
