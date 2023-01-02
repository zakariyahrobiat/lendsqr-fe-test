import React from "react";
import { useAppContext } from "../context";
// import avatar from "../assets/images/avatar.png";
import { Link } from "react-router-dom";
import "./detail.scss";
const Detail = () => {
  const { detail } = useAppContext();
  console.log(detail);

  const {
    guarantor,

    accountNumber,
    accountBalance,
    email,
  } = detail.detail;
  const { bvn, avatar, gender, firstName, lastName, address, phoneNumber } =
    detail.detail.profile;
  // console.log(avatar);
  const {
    level,
    employmentStatus,
    sector,
    duration,
    officeEmail,
    monthlyIncome,
    loanRepayment,
  } = detail.detail.education;
  const { twitter, instagram, facebook } = detail.detail.socials;

  return (
    <div className="detail-container">
      <Link to="/users" style={{ textDecoration: `none` }}>
        <p>Back to Users</p>
      </Link>
      <div className="header">
        <p>User Details</p>
        <div className="buttons">
          <button className="red">Blacklist User</button>
          <button>Activate User</button>
        </div>
      </div>
      <div className="detail">
        <div className="person">
          <img src={avatar} alt="" srcSet="" />
          <div className="name">
            <h2>
              {firstName} {lastName}
            </h2>
            <p>{accountNumber}</p>
          </div>
          <div>
            <p>User’s Tier</p>
          </div>
          <div className="account">
            <h2>{accountBalance}</h2>
          </div>
        </div>
        <div className="title">
          <p>General Details</p>
          <p>Documents</p>
          <p>Bank Details</p>
          <p>Loans</p>
          <p>Savings</p>
          <p>App and System</p>
        </div>
      </div>
      <div className="body-wrapper">
        <div className="body">
          <p>Personal Information</p>
          <div className="personal">
            <div>
              <p className="question">full Name</p>
              <p>
                {firstName} {lastName}
              </p>
            </div>
            <div>
              <p className="question">Phone Number</p>
              <p>{phoneNumber}</p>
            </div>
            <div>
              <p className="question">Email Address</p>
              <p>{email}</p>
            </div>
            <div>
              <p className="question">Bvn</p>
              <p>{bvn}</p>
            </div>
            <div>
              <p className="question">Gender</p>
              <p>{gender}</p>
            </div>
            <div>
              <p className="question">address</p>
              <p>{address}</p>
            </div>
          </div>
        </div>
        <div className="body">
          <p>Education and Employment</p>
          <div className="personal">
            <div>
              <p className="question">level of education</p>
              <p>{level}</p>
            </div>
            <div>
              <p className="question">employment status</p>
              <p>{employmentStatus}</p>
            </div>
            <div>
              <p className="question">sector of employment</p>
              <p>{sector}</p>
            </div>
            <div>
              <p className="question">Duration of employment</p>
              <p>{duration}</p>
            </div>
            <div>
              <p className="question">office email</p>
              <p>{officeEmail}</p>
            </div>
            <div>
              <p className="question">Monthly income</p>
              <p>
                {monthlyIncome.map((item: any, index: number) => {
                  return <div key={index}>₦{item}</div>;
                })}
              </p>
            </div>
            <div>
              <p className="question">loan repayment</p>
              <p>{loanRepayment}</p>
            </div>
          </div>
        </div>
        <div className="body">
          <p>Socials</p>
          <div className="personal">
            <div>
              <p className="question">Twitter</p>
              <p>{twitter}</p>
            </div>
            <div>
              <p className="question">Facebook</p>
              <p>{facebook}</p>
            </div>
            <div>
              <p className="question">Instagram</p>
              <p>{instagram}</p>
            </div>
          </div>
        </div>
        <div className="body">
          <p>Guarantor</p>
          <div className="personal">
            <div>
              <p className="question">full Name</p>
              <p>
                {guarantor.firstName} {guarantor.lastName}
              </p>
            </div>
            <div>
              <p className="question">Phone Number</p>
              <p>{guarantor.phoneNumber}</p>
            </div>
            <div>
              <p className="question">Address</p>
              <p>{guarantor.address}</p>
            </div>
            <div>
              <p className="question">Bvn</p>
              <p>{guarantor.gender}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
