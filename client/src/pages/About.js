import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About Us - Shopify"}>
      <div className="row contactus px-4">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
            
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2 ">
          Welcome to <span className="fw-bold">Shopify</span>, your ultimate destination for all your online shopping needs! At Shopify, we are committed to providing you with a seamless and enjoyable shopping experience. With a vast and diverse range of products, carefully curated from top-notch brands and trusted sellers, we ensure that you find exactly what you're looking for. Our user-friendly interface allows you to browse through categories effortlessly, and our secure payment gateway ensures a safe and convenient checkout process. Our dedicated customer support team is always ready to assist you with any queries or concerns, making sure your satisfaction remains our top priority. Whether you're searching for the latest fashion trends, tech gadgets, home essentials, or special gifts, Shopify has got you covered. Join us on this exciting shopping journey and experience the joy of finding your perfect match with just a few clicks!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
