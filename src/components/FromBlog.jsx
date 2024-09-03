import React from "react";
import "./from.css";
function FromBlog() {
  return (
    <>
      <div className="container-fluid mt-5 ">
        <div className="text-center">
          <h2 className="fw-bold">Fetured Products </h2>
          <div className="fetured-underline"></div>

          <div className="container d-flex mt-5 me-5">
            <div className="fromblog1">
              <div className="d-flex">
                <div className="form-sub">
                  <div className="formtypes d-flex">
                    <div className="form2 ms-3 ">
                      <p
                        style={{
                          fontSize: "15px",
                          fontWeight: "600",
                          color: "#c87065",
                          marginRight: "",
                        }}
                        className="text-center"
                      >
                        JUNE ,2024
                      </p>
                      <p className="ms-2 furni">FURNITURE DRAWING 2024</p>
                    </div>
                  </div>
                  <p style={{ fontSize: "13px" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Asperiores iure recusandae, quod beatae voluptatibus quam
                    consequatur doloremque, sequi fugit, temporibus tempora ex.
                    Sint quia sed vel id eius quae voluptas!
                  </p>
                </div>

                <img
                  src="https://template.hasthemes.com/hurst-v1/hurst/img/blog/1.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="fromblog1 ms-3">

            <div className="d-flex">
                <div className="form-sub">
                  <div className="formtypes d-flex">
                    <div className="form2 ms-3 ">
                      <p
                        style={{
                          fontSize: "15px",
                          fontWeight: "600",
                          color: "#c87065",
                          marginRight: "",
                        }}
                        className="text-center"
                      >
                        JUNE ,2024
                      </p>
                      <p className="ms-2 furni">FURNITURE DRAWING 2024</p>
                    </div>
                  </div>
                  <p style={{ fontSize: "13px" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Asperiores iure recusandae, quod beatae voluptatibus quam
                    consequatur doloremque, sequi fugit, temporibus tempora ex.
                    Sint quia sed vel id eius quae voluptas!
                  </p>
                </div>

                <img
                  src="https://template.hasthemes.com/hurst-v1/hurst/img/blog/1.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FromBlog;
