import React, { useState } from "react";
import { useAppContext } from "../context";
import icon4 from "../assets/images/ic-more.png";
import { Link } from "react-router-dom";
import "./modal.scss";
const Modal = ({ id }: any) => {
  const [show, setShow] = useState<boolean>(false);
  const { handleDetail } = useAppContext();
  return (
    <div className="modal-container">
      <img src={icon4} alt="" srcSet="" onClick={() => setShow(!show)} />
      {show ? (
        <>
          <div className="modal">
            <Link to="/detail">
              {" "}
              <p onClick={() => handleDetail(id)}>View Details</p>
            </Link>
            <p>Blacklist User</p>
            <p>Activate User</p>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Modal;
