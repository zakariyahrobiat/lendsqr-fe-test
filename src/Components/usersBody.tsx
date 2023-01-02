import React from "react";
import icon4 from "../assets/images/ic-more.png";
import filter from "../assets/images/filter.png";
import Modal from "./modal";
import { useAppContext } from "../context";
import "./userBody.scss";
const UsersBody = () => {
  const { data, start, end } = useAppContext();
  return (
    <div className="body-container">
      <div className="data-container">
        <div className="title">
          <div className="organisation">
            <p>organization</p> <img src={filter} alt="" srcSet="" />
          </div>
          <div className="username">
            <p>Username</p> <img src={filter} alt="" srcSet="" />
          </div>
          <div className="email">
            <p>Email</p> <img src={filter} alt="" srcSet="" />
          </div>
          <div className="phonenumber">
            <p>Phone number</p> <img src={filter} alt="" srcSet="" />
          </div>
          <div className="joined">
            <p>Date joined</p> <img src={filter} alt="" srcSet="" />
          </div>
          <div className="status">
            <p>Status</p> <img src={filter} alt="" srcSet="" />
          </div>
        </div>
        <div className="form-wrapper">
          <div className="form-container">
            <div className="form-control">
              <label htmlFor="Organization">Organization</label>
              <select name="Organization" id="">
                {data.map((item: any) => (
                  <option value={item.orgName}>{item.orgName}</option>
                ))}
              </select>
            </div>
            <div className="form-control">
              <label htmlFor="Username">Username</label>
              <input
                type="text"
                name="Username"
                id="Username"
                placeholder="User"
              />
            </div>
            <div className="form-control">
              <label htmlFor="Email">Email</label>
              <input type="email" name="Email" id="Email" placeholder="Email" />
            </div>
            <div className="form-control">
              <label htmlFor="Date">Date</label>
              <input type="date" name="Date" id="Date" placeholder="Date" />
            </div>
            <div className="form-control">
              <label htmlFor="number">Phone Number</label>

              <input
                type="tel"
                name="number"
                id="number"
                placeholder="Phone Number"
              />
            </div>
            <div className="form-control">
              <label htmlFor="Status">Status</label>
              <select name="Status" id="">
                <option value="active">active</option>
                <option value="inactive">inactive</option>
              </select>
            </div>
            <button>Reset</button>
            <button className="color">Filter</button>
          </div>
          <div>
            {data.slice(start, end).map((item: any) => {
              const { orgName, userName, email, phoneNumber, createdAt, id } =
                item;
              return (
                <div className="data" key={id}>
                  {/* <p className="organisation">{orgName}</p> */}
                  {/* <p className="username">{userName}</p> */}
                  <p className="email">{email}</p>
                  <p className="phonenumber">{phoneNumber}</p>
                  <p className="joined">{createdAt}</p>
                  <p className="status">active</p>
                  <Modal {...item} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersBody;
