import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4 mt-4">
        <p>1. We respect your privacy and are committed to safeguarding your personal information.</p>
        <p>2. Your personal data will only be used for the purpose of processing your orders and improving your shopping experience.</p>
        <p>3. We will not share, sell, or rent your personal information to any third parties without your explicit consent.</p>
        <p>4. We may collect non-personal information to enhance our website's performance and better understand user preferences.</p>
        <p>5. Your payment information is encrypted and securely processed to protect your financial data.</p>
        <p>6. By using our website, you consent to the collection and use of your personal information as outlined in this privacy policy.</p>
        <p>7. You have the right to access, update, or delete your personal information from our records by contacting our customer support team.</p>

        </div>
      </div>
    </Layout>
  );
};

export default Policy;
