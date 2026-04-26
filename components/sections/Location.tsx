"use client";

import { useEffect, useState } from "react";
import { SITE } from "@/lib/constants";
import { asset } from "@/lib/assetPath";

const slides = [
  ("/images/centre1.jpeg"),
  ("/images/centre2.jpeg"),
  ("/images/centre3.jpeg"),
];

export default function Location() {
  const [current, setCurrent] = useState(0);

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${SITE.address.street}, ${SITE.address.suburb}, ${SITE.address.city}`
  )}`;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section style={{ background: "var(--white)", padding: "90px 5%" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        
        <div className="location-grid">

          {/* LEFT SIDE (your info) */}
          <div>
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

            <div className="info-block">
              <p className="title">📞 Call Us</p>
              <a href={`tel:${SITE.phone}`} className="phone">
                {SITE.phoneDisplay}
              </a>
            </div>

            <div className="buttons">
              <a href={`tel:${SITE.phone}`} className="btn primary">
                Call Now
              </a>
              <a href={mapsUrl} target="_blank" className="btn secondary">
                Directions →
              </a>
            </div>
          </div>

          {/* RIGHT SIDE (fade images) */}
          <div className="image-container">
            {slides.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="Centre"
                className={`fade-image ${
                  index === current ? "active" : ""
                }`}
              />
            ))}
          </div>

        </div>
      </div>

      {/* STYLES */}
      <style jsx>{`
        .location-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        @media (max-width: 900px) {
          .location-grid {
            grid-template-columns: 1fr;
          }
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
        }

        .info-block {
          margin-bottom: 18px;
          font-size: 14px;
          line-height: 1.6;
        }

        .title {
          font-weight: 700;
          margin-bottom: 4px;
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

        .secondary {
          border: 1px solid var(--border);
          color: var(--text-dark);
        }

        /* IMAGE FADE */
        .image-container {
          position: relative;
          height: 420px;
          border-radius: 16px;
          overflow: hidden;
        }

        .fade-image {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          transition: opacity 1s ease-in-out;
        }

        .fade-image.active {
          opacity: 1;
        }
      `}</style>
    </section>
  );
}