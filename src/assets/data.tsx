import React from "react";
import user from "../assets/images/user.png";
import guarantor from "../assets/images/guarantor.png";
import sack from "../assets/images/sack.png";
import hand from "../assets/images/hand.png";
import saving from "../assets/images/saving.png";
import wishlist from "../assets/images/wishlist.png";
import karma from "../assets/images/karma.png";

export const Customer = [
  { id: 1, name: "Users", icon: user, link: "/users" },
  { id: 2, name: "Guarantors", icon: guarantor },
  {
    id: 3,
    name: "Loans",
    icon: sack,
  },
  {
    id: 4,
    name: "Decision Models",
    icon: hand,
  },
  {
    id: 5,
    name: "Savings",
    icon: saving,
  },
  {
    id: 6,
    name: "Loan Requests",
    icon: sack,
  },
  {
    id: 7,
    name: "Whitelist",
    icon: wishlist,
  },
  {
    id: 8,
    name: "Karma",
    icon: karma,
  },
];
export const Business = [
  { id: 1, name: "Organization", icon: user },
  { id: 2, name: "Loan Products", icon: guarantor },
  {
    id: 3,
    name: "Savings Products",
    icon: sack,
  },
  {
    id: 4,
    name: "Fees and Charges",
    icon: hand,
  },
  {
    id: 5,
    name: "Transactions",
    icon: saving,
  },
  {
    id: 6,
    name: "Services",
    icon: sack,
  },
  {
    id: 7,
    name: "Service Account",
    icon: wishlist,
  },
  {
    id: 8,
    name: "Settlements",
    icon: karma,
  },
  {
    id: 8,
    name: " Reports",
    icon: karma,
  },
];
export const Setting = [
  { id: 1, name: "Preferences", icon: user },
  { id: 2, name: "Fees and Pricing", icon: guarantor },
  { id: 2, name: "Audit Logs", icon: guarantor },
];
