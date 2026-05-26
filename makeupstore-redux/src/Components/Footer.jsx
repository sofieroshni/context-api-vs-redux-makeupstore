import React from "react";
import {
  BsBagCheckFill,
  BsCalculatorFill,
  BsCart,
  BsShop,
} from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="text-white">

      <div className="d-flex justify-content-end align-items-center p-0 m-0">

        <div
          className="card text-bg-secondary mb-3 m-1 position-fixed bottom-0 end-0"
          style={{
            maxWidth: "18rem",
            backgroundColor: "pink",
            zIndex: "1000",
            right: "0px",
          }}
        >

          <div className="card-body">

            <span className="badge bg-warning text-dark fs-6 px-3 py-2">
              <BsCart />
            </span>

            <p className="small">Kurv</p>

            <span className="badge bg-warning text-dark fs-6 px-3 py-2">
              <BsCalculatorFill />
            </span>

            <p className="small">Kurvens samlet pris</p>

            <span className="badge bg-success fs-6 px-3 py-2 m-0">
              Konto
            </span>

            <p className="small">Konti</p>

            <span className="bg-success fs-6 px-3 py-2 badge">
              <BsBagCheckFill />
            </span>

            <p className="small">Købte produkter</p>

          </div>
        </div>
      </div>

      <button
        className="btn btn-dark m-2 fixed-bottom z-1000"
        style={{ width: "100px" }}
      >
        SHOP <BsShop />
      </button>

    </footer>
  );
};

export default Footer;