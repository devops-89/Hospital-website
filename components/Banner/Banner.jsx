"use client";
import React from "react";
import "./Banner.css";

export default function HeroSection(props) {
  return (
    <section className="hero-section">
     
      <div className="hero-content">
        <p className="hero-tag">#{props.pageTitle}</p>
        <h1 className="hero-heading">
          {props.heading1} <br />
          <span>{props.heading2}</span>
        </h1>
      </div>
    </section>
  );
}
