import React from "react";
import FAQs from "./FAQs";
import Navbar from "../components/navbar";

const Page = () => {
  return (
    <div style={{ overflow: "scroll" }} className="faqs-nav">
      <Navbar />
      <FAQs />

    

    </div>
  );
};

export default Page;
