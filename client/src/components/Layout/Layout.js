import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";
const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div style={{display: "flex", flexDirection:"column", justifyContent: "flex-end"}}>
      <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main style={{ minHeight: "70vh" }}>
        <Toaster />

        {children}
      </main>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

Layout.defaultProps = {
  title: "Shopify - E Commerce App",
  description: "mern stack project",
  keywords: "mern, react, node, mongodb",
  author: "Nikhil Pathania",
};

export default Layout;
