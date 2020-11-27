import React from "react";
import Servicesref from "./Servicesref";

function Services() {
  let data = [
    {
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/31/x-locale/cs/help/images/gateway/Box-t3._CB485926114_.png",
      heading: "Your Orders",
      description: "track package Edit or cancel orders",
    },
    {
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/31/x-locale/cs/help/images/gateway/returns-box-blue._CB485930418_.png",
      heading: "Returns & Refunds",
      description: "return or replace items print return mailting labels",
    },
    {
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/31/x-locale/cs/help/images/gateway/manage-address._CB454953496_.png",
      heading: "Manage Addresses",
      description: "Update your addresses Add or edit address details",
    },
    {
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/31/x-locale/cs/help/images/gateway/Prime_clear-bg._CB485925770_.png",
      heading: "Manage Prime",
      description: "view your benefits Mambership details",
    },
    {
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/31/x-locale/cs/help/images/gateway/Payments_clear-bg-t3._CB485948257_.png",
      heading: "Payment Settings",
      description:
        "Add or edit payment methods Edit expired debit ,credit card",
    },
    {
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/31/x-locale/cs/help/images/gateway/IN-your-account._CB485928885_.png",
      heading: "Account Setting",
      description: "Change your email,password Update login information",
    },
  ];
  return <Servicesref Data={data} />;
}

export default Services;
