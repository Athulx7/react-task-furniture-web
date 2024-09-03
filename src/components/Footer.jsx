import React from "react";
import "./footer.css";

function Footer() {
  return (
    <>
      <div className="footer-1">
        <div className="footeremail">
          <div className="d-flex ">
            <div className="email1">
              <input
                type="text"
                placeholder="enter your email"
                style={{
                  width: "30rem",
                  marginLeft: "10rem",
                  marginTop: "25px",
                }}
              />
            </div>
            <div className="footerbutton ">
              <button>SUBSCRIBE</button>
            </div>
          </div>
        </div>

        <div className="container d-flex mt-5 justify-content-between ">
          <div className="contact-us">
            <h4 style={{ fontWeight: "bolder" }}>CONTACT US</h4>
            <div className="contact-line"></div>

            <div className="contacts">
              <p>
                <span style={{ fontWeight: "bolder", color: "#666666" }}>
                  Adress :
                </span>{" "}
                <span className="ms-3" style={{ fontSize: "14px" }}>
                  {" "}
                  28 Green Tower, Street
                </span>{" "}
              </p>
              <p>
                <span style={{ fontWeight: "bolder", color: "#666666" }}>
                  Cell-Phone :{" "}
                </span>{" "}
                <span className="ms-3" style={{ fontSize: "14px" }}>
                  {" "}
                  012345 - 123456789
                </span>{" "}
              </p>
              <p>
                <span style={{ fontWeight: "bolder", color: "#666666" }}>
                  Email :{" "}
                </span>{" "}
                <span className="ms-3" style={{ fontSize: "14px" }}>
                  {" "}
                  your-email@gmail.com
                </span>{" "}
              </p>
            </div>
          </div>

          <div className="accounts ms-5">
            <h4 style={{ fontWeight: "bolder" }}>ACCOUNTS</h4>
            <div className="contact-line"></div>
            <div className="account">
              <p style={{ fontSize: "14px" }} className="mt-5">
                my account
              </p>
              <p style={{ fontSize: "14px" }} className="">
                my account
              </p>
              <p style={{ fontSize: "14px" }} className="">
                my account
              </p>
              <p style={{ fontSize: "14px" }} className="">
                my account
              </p>
            </div>
          </div>
          <div className="shipping ms-5">
            <h4 style={{ fontWeight: "bolder" }}>SHIPPING</h4>
            <div className="contact-line"></div>

            <p style={{ fontSize: "14px" }} className="mt-5">
              my account
            </p>
            <p style={{ fontSize: "14px" }} className="">
              my account
            </p>
            <p style={{ fontSize: "14px" }} className="">
              my account
            </p>
            <p style={{ fontSize: "14px" }} className="">
              my account
            </p>
          </div>

          <div className="yourchoicce">
            <h4 style={{ fontWeight: "bolder" }}>YOUR CHOICE PRODUCT</h4>
            <div className="contact-line"></div>

            <div className="d-flex mt-5">
              <img
                src="https://template.hasthemes.com/hurst-v1/hurst/img/footer/1.jpg"
                alt=""
              />
              <img
                src="https://template.hasthemes.com/hurst-v1/hurst/img/footer/1.jpg"
                alt=""
                className="ms-3"
              />
            </div>  
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
