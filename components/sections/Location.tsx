"use client";

import { useEffect, useState } from "react";
import { SITE } from "@/lib/constants";

const slides = [
  "/images/centre1.jpeg",
  "/images/centre2.jpeg",
  "/images/centre4.jpeg",
  "/images/centre5.jpeg",
  "/images/centre6.jpeg",
  "/images/centre6.jpeg",   
  // "/mathsstudios-website/images/centre3.jpeg",
];

export default function Location() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="location">
    <section className="location-outer">

      <div className="location-inner">

        {/* BACKGROUND SLIDESHOW */}
        {slides.map((img, index) => (
          <img
            key={index}
            src={img}
            alt=""
            aria-hidden="true"
            className={`bg-slide ${index === current ? "active" : ""}`}
          />
        ))}

        {/* DARK OVERLAY */}
        <div className="overlay" />

        {/* CONTENT */}
        <div className="content-wrapper">
          <p className="label">Find Us</p>
          <h2 className="heading">Visit Our Centre</h2>

          <div className="info-block">
            <p className="title">📍 Address</p>
            <p>
              {SITE.address.street}<br />
              {SITE.address.suburb}<br />
              {SITE.address.city}
            </p>
          </div>

          <div className="info-block">
            <p className="title">🕘 Hours</p>
            <p>
              {SITE.hours.weekdays}<br />
              {SITE.hours.weekends}
            </p>
          </div>

          <div className="buttons">
            <a href={`tel:${SITE.phone}`} className="btn primary">
              Call Now
            </a>
          </div>
        </div>

      </div>

      <style jsx>{`
        .location-outer {
          padding: 70px 5%;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          background: black;
        }

        .location-inner {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 480px;
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: flex-start; /* changed */
  padding: 60px 50px;          /* add padding so content isn't glued to edge */
}

        .bg-slide {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          transition: opacity 1s ease-in-out;
          z-index: 0;
        }

        .bg-slide.active {
          opacity: 1;
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.55);
          z-index: 1;
        }

        .content-wrapper {
  position: relative;
  z-index: 2;
  max-width: 480px;
  color: white;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* changed */
  text-align: left;        /* add this */
}

        .label {
          font-size: 11px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--green-light);
          margin-bottom: 12px;
        }

        .heading {
          font-size: 34px;
          font-weight: 900;
          margin-bottom: 30px;
          color: white;
        }

        .info-block {
          margin-bottom: 18px;
          font-size: 14px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.85);
        }

        .title {
          font-weight: 700;
          margin-bottom: 4px;
          color: white;
        }

        .phone {
          color: var(--red);
          font-weight: 700;
          text-decoration: none;
        }

        .buttons {
          margin-top: 30px;
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .btn {
          padding: 12px 20px;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 600;
        }

        .primary {
          background: var(--red);
          color: white;
        }
      `}</style>
    </section>
    </div>
  );
}