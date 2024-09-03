import React from "react";
import "./fetured.css";
import { Link } from "react-router-dom";

function Featured() {
  return (
    <>
      <div className="container-fluid fetuerd-product ">
        <div className="text-center">
          <h2 className="fw-bold">Fetured Products </h2>
          <div className="fetured-underline"></div>
          <div className="container mt-5 d-flex me-5">
            <div className="featuredHoving">
              <Link style={{textDecoration:'none'}}>
              <div className="fetured1 ms-3">
                <div className="subNew1 mt-3 ms-3 text-center rounded">New</div>
              </div>
              </Link>
              <div className="d-flex">
                <a
                  href=""
                  style={{
                    textDecoration: "none",
                    color: "black",
                    marginLeft: "20px",
                    fontSize: "10px",
                    fontWeight: "bold",
                  }}
                >
                  <h6>DUMMY PRODUCT NAME</h6>
                </a>
                <p style={{ fontSize: "13px" }} className="ms-4 ">
                  Furniture
                </p>
              </div>

              <div
                className="d-flex justify-content-between"
                style={{ color: "#c87065" }}
              >
                <h5 className="ms-4  " style={{ marginTop: "-7px" }}>
                  ₹55.20
                </h5>
                <div className="d-flex me-3">
                  <i class="fa-solid fa-star " style={{ fontSize: "13px" }}></i>
                  <i class="fa-solid fa-star " style={{ fontSize: "13px" }}></i>
                  <i class="fa-solid fa-star " style={{ fontSize: "13px" }}></i>
                  <i
                    class="fa-solid fa-star-half-stroke "
                    style={{ fontSize: "13px" }}
                  ></i>
                  <i
                    class="fa-solid fa-star-half-stroke "
                    style={{ fontSize: "13px" }}
                  ></i>
                </div>
              </div>
            </div>

            <div className="featuredHoving">
              <div className="fetured2 ms-5">
                <div className="subNew1 mt-3 ms-3 text-center rounded">New</div>

                <div className="d-flex " style={{ marginTop: "243px" }}>
                  <a
                    href=""
                    style={{
                      textDecoration: "none",
                      color: "black",

                      fontSize: "10px",
                      fontWeight: "bold",
                    }}
                  >
                    <h6>DUMMY PRODUCT NAME</h6>
                  </a>
                  <p style={{ fontSize: "13px" }} className="ms-4 ">
                    Furniture
                  </p>
                </div>

                <div
                  className="d-flex justify-content-between"
                  style={{ color: "#c87065" }}
                >
                  <h5 className="  " style={{ marginTop: "-7px" }}>
                    ₹55.20
                  </h5>
                  <div className="d-flex me-3">
                    <i
                      class="fa-solid fa-star "
                      style={{ fontSize: "13px" }}
                    ></i>
                    <i
                      class="fa-solid fa-star "
                      style={{ fontSize: "13px" }}
                    ></i>
                    <i
                      class="fa-solid fa-star "
                      style={{ fontSize: "13px" }}
                    ></i>
                    <i
                      class="fa-solid fa-star-half-stroke "
                      style={{ fontSize: "13px" }}
                    ></i>
                    <i
                      class="fa-solid fa-star-half-stroke "
                      style={{ fontSize: "13px" }}
                    ></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="featuredHoving">
              <div className="fetured3 ms-5">
                <div className="subNew1 mt-3 ms-3 text-center rounded">New</div>

                <div className="d-flex " style={{ marginTop: "243px" }}>
                  <a
                    href=""
                    style={{
                      textDecoration: "none",
                      color: "black",

                      fontSize: "10px",
                      fontWeight: "bold",
                    }}
                  >
                    <h6>DUMMY PRODUCT NAME</h6>
                  </a>
                  <p style={{ fontSize: "13px" }} className="ms-4 ">
                    Furniture
                  </p>
                </div>

                <div
                  className="d-flex justify-content-between"
                  style={{ color: "#c87065" }}
                >
                  <h5 className="  " style={{ marginTop: "-7px" }}>
                    ₹55.20
                  </h5>
                  <div className="d-flex me-3">
                    <i
                      class="fa-solid fa-star "
                      style={{ fontSize: "13px" }}
                    ></i>
                    <i
                      class="fa-solid fa-star "
                      style={{ fontSize: "13px" }}
                    ></i>
                    <i
                      class="fa-solid fa-star "
                      style={{ fontSize: "13px" }}
                    ></i>
                    <i
                      class="fa-solid fa-star-half-stroke "
                      style={{ fontSize: "13px" }}
                    ></i>
                    <i
                      class="fa-solid fa-star-half-stroke "
                      style={{ fontSize: "13px" }}
                    ></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="featuredHoving">
              <div className="fetured4 ms-5">
                <div className="subNew1 mt-3 ms-3 text-center rounded">New</div>

                <div className="d-flex " style={{ marginTop: "243px" }}>
                  <a
                    href=""
                    style={{
                      textDecoration: "none",
                      color: "black",

                      fontSize: "10px",
                      fontWeight: "bold",
                    }}
                  >
                    <h6>DUMMY PRODUCT NAME</h6>
                  </a>
                  <p style={{ fontSize: "13px" }} className="ms-4 ">
                    Furniture
                  </p>
                </div>

                <div
                  className="d-flex justify-content-between"
                  style={{ color: "#c87065" }}
                >
                  <h5 className="  " style={{ marginTop: "-7px" }}>
                    ₹55.20
                  </h5>
                  <div className="d-flex me-3">
                    <i
                      class="fa-solid fa-star "
                      style={{ fontSize: "13px" }}
                    ></i>
                    <i
                      class="fa-solid fa-star "
                      style={{ fontSize: "13px" }}
                    ></i>
                    <i
                      class="fa-solid fa-star "
                      style={{ fontSize: "13px" }}
                    ></i>
                    <i
                      class="fa-solid fa-star-half-stroke "
                      style={{ fontSize: "13px" }}
                    ></i>
                    <i
                      class="fa-solid fa-star-half-stroke "
                      style={{ fontSize: "13px" }}
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Featured;
