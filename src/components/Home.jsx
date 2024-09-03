import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

function Home() {
  return (
    <>
      <div className="container-fluid d-flex justify-content-between mt-2">
        <div className="icons-left">
          <div className="iconsinleft">
            <Link
              style={{ textDecoration: "none", color: "gray" }}
              className="icon-link"
            >
              <i class="fa-brands fa-google-plus-g"></i>
            </Link>

            <Link
              style={{
                textDecoration: "none",
                color: "gray",
                marginTop: "2rem",
              }}
              className="icon-link"
            >
              <i class="fa-brands fa-twitter"></i>
            </Link>

            <Link
              style={{
                textDecoration: "none",
                color: "gray",
                marginTop: "2rem",
              }}
              className="icon-link"
            >
              <i class="fa-brands fa-facebook-f"></i>
            </Link>

            <Link
              style={{
                textDecoration: "none",
                color: "gray",
                marginTop: "2rem",
              }}
              className="icon-link"
            >
              <i class="fa-brands fa-linkedin-in"></i>
            </Link>
          </div>
        </div>

        <div className="sub-products">
          <div className="sub-product1">
            <div className="ms-5 me-5  d-flex justify-content-between ">
              <div className="mt-3 subNew1 text-center rounded">New</div>
              <div className="mt-3 text-dark fs-5">$50.00</div>
            </div>

            <div className="d-flex justify-content-between sub2 ms-5 me-5">
              <Link
                style={{ textDecoration: "none", color: "black" }}
                className="Link"
              >
                <p className="">Product Name</p>
              </Link>

              <button className="">Buy Now</button>
            </div>

            <p className="ms-5 " style={{ marginTop: "-20px" }}>
              Furniture
            </p>
          </div>
          <div className="sub-product2 mt-5">
            <div className="sub2-text pt-3  ">
              <h5 className="">New product</h5>
              <h5 style={{ marginTop: "-12px" }}>2021</h5>
              <p style={{ fontSize: "13px" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                placeat delectu Lorem ipsum dolor sit amet, consectetur
                adipisicing{" "}
              </p>
              <button>Buy Now</button>
            </div>
          </div>
        </div>

        <Carousel data-bs-theme="dark" className="main-products">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://template.hasthemes.com/hurst-v1/hurst/img/slider/slider-1/3.jpg"
              alt="First slide"
            />
            <Carousel.Caption className="">
              <div className="main1">
                <h4>WELCOME TO OUR</h4>
                <h1>FURNITURE</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quidem eveniet autem minus dolores doloribus architecto
                  corporis,
                </p>
                <button>SHOP NOW</button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://template.hasthemes.com/hurst-v1/hurst/img/slider/slider-1/1.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <div className="main1">
                <h4>WELCOME TO OUR</h4>
                <h1>FURNITURE</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quidem eveniet autem minus dolores doloribus architecto
                  corporis,
                </p>
                <button>SHOP NOW</button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://template.hasthemes.com/hurst-v1/hurst/img/slider/slider-1/2.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <div className="main1">
                <h4>WELCOME TO OUR</h4>
                <h1>FURNITURE</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quidem eveniet autem minus dolores doloribus architecto
                  corporis,
                </p>
                <button>SHOP NOW</button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <div className="right-icons">
          <div className="iconsinright">
            <Link
              style={{ textDecoration: "none", color: "gray" }}
              className="icon-link"
            >
              <i class="fa-solid fa-magnifying-glass"></i>
            </Link>

            <Link
              style={{
                textDecoration: "none",
                color: "gray",
                marginTop: "2rem",
              }}
              className="icon-link"
            >
              <i class="fa-solid fa-lock"></i>
            </Link>

            <Link
              style={{
                textDecoration: "none",
                color: "gray",
                marginTop: "2rem",
              }}
              className="icon-link"
            >
              <i class="fa-solid fa-user"></i>
            </Link>

            <Link
              style={{
                textDecoration: "none",
                color: "gray",
                marginTop: "2rem",
              }}
              className="icon-link"
            >
              <i class="fa-solid fa-heart"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
