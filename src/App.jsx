import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import profilePic from "./assets/profile.jpg";
import bohrPdf from "./assets/Class XI_Unit-2_ Atomic Structure_Bohr's Theory_CBSE & ICSE.pdf";
import banglaBohrPdf from "./assets/একাদশ শ্রেণীর দ্বিতীয় অধ্যায় পারমাণবিক গঠন বোরের তত্ত্ব.pdf";
import sticker from "./assets/sticker.png";
import { FaWhatsapp } from "react-icons/fa";

function App() {
  const [showAwardsPopover, setShowAwardsPopover] = useState(false);
  const [showCoursesPopover, setShowCoursesPopover] = useState(false);

  return (
    <>
      <div className="app">
        <Navbar />
        <div className="main-layout">
          <main className="main-content">
            <div className="hero-section">
              <img
                src={profilePic}
                alt="Profile"
                className="main-profile-pic"
              />
              <div className="profile-main">
                <div className="profile-info">
                  <div className="profile-name">
                    Dr. Debabrata Maiti{" "}
                    <span className="profile-title">(Assistant Professor)</span>
                  </div>
                  <div className="profile-details">
                    <div>
                      (The Jikei University, School of Medicine, Tokyo, Japan)
                    </div>
                    <div>(Postdoc at The University of Tokyo, Japan)</div>
                    <div>PhD (Chemistry) from Jadavpur University, India</div>
                  </div>
                  <div className="profile-enthusiast">
                    Enthusiast to teach Chemistry and committed{" "}
                    <span className="profile-enthusiast-break">
                      to Research..
                    </span>
                  </div>
                </div>
                <div className="awards-box">
                  <div className="awards-title">AWARDS AND RECOGNITION</div>
                  <ul className="awards-list">
                    <li>CSIR-NET JRF (2010), Rank-108, India</li>
                    <li>
                      Best Research Poster Award (2015),
                      <br />
                      Rajasthan, India
                    </li>
                    <li>
                      3rd Best Research Poster Award (2015),
                      <br />
                      Kolkata, India
                    </li>
                    <li>JSPS Postdoctoral Award (2018), Japan</li>
                    <li>PBC Postdoctoral Award (2020), Israel</li>
                  </ul>
                </div>
              </div>
              <button
                className="awards-hamburger"
                onClick={() => setShowAwardsPopover(true)}
                aria-label="Toggle awards menu"
              >
                <span className="hamburger-icon">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
                <span className="awards-hamburger-label">
                  Awards and Recognition
                </span>
              </button>
            </div>
            {/* Teaching heading and course content moved below profile section */}
            <div className="teaching-center">
              TEACHING
              <div className="teaching-center-sub">
                (ONLINE AND OFFLINE CLASSES)
              </div>
              <div className="teaching-center-sub">
                SUBJECT: CHEMISTRY AND ORGANIC CHEMISTRY
              </div>
              <div className="course-content" style={{ paddingBottom: "1rem" }}>
                <div>🎯JEE-Main/Advanced,WBJEE & NEET</div>
                <div>🎯Higher Secondary (CBSE, ICSE, West Bengal Board)</div>
                <div>🎯B.Sc(Chemistry) (All Universities)</div>
                <div>🎯BE(Chem Eng.)</div>
                <div>
                  🎯NET, GATE, IIT-JAM, TIFR, IISc for PhD entrance exam
                </div>
                <div style={{ height: "0.7em" }}></div>
                <div
                  style={{
                    fontWeight: "bold",
                    color: "#c37a28",
                    fontSize: "1.3em",
                    textDecoration: "underline",
                  }}
                >
                  COACHING AVAILABLE
                </div>
                <div
                  style={{
                    color: "#1f8921",
                    fontSize: "1em",
                    marginTop: "0.3em",
                    fontWeight: "bold",
                  }}
                >
                  ✔️WBJEE, JEE-Main/Advanced & NEET, Bohr Theory Class XI Unit-2
                </div>
                <a
                  href="https://www.youtube.com/watch?v=OOP_E0SugKU"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-block",
                    marginTop: "0.5em",
                    color: "#2563eb",
                    fontWeight: "bold",
                    textDecoration: "none",
                    fontSize: "1em",
                    pointerEvents: "auto",
                  }}
                >
                  🎥 JEE Main/Advanced, WBJEE, NEET Bohr Theory- Demo Class 1
                </a>
                <div
                  style={{
                    color: "#1f8921",
                    fontSize: "1em",
                    marginTop: "0.3em",
                    fontWeight: "bold",
                  }}
                >
                  ✔️CBSE, ICSE, Class-XI Unit-2 Bohr Theory
                </div>
                <a
                  href="https://www.youtube.com/watch?v=gKiEo4ivSw8"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-block",
                    marginTop: "0.1em",
                    color: "#2563eb",
                    fontWeight: "bold",
                    textDecoration: "none",
                    fontSize: "1em",
                    pointerEvents: "auto",
                  }}
                >
                  🎥 ICSE CBSE Class XI Unit 1 Bohr's Theory- Demo Class 1
                </a>
                <div
                  style={{
                    color: "#1f8921",
                    fontSize: "1em",
                    marginTop: "0.3em",
                    fontWeight: "bold",
                  }}
                >
                  ✔️WBHS Class-XI Chapter-2 বোরের পারমাণবিক গঠন তত্ত্ব
                </div>
                <a
                  href="https://www.youtube.com/watch?v=DqvZpkK4LCU"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-block",
                    marginTop: "0.1em",
                    color: "#2563eb",
                    fontWeight: "bold",
                    textDecoration: "none",
                    fontSize: "1em",
                    pointerEvents: "auto",
                  }}
                >
                  🎥 WBHS Class-XI Chapter-2 বোরের পারমাণবিক গঠন তত্ত্ব- Demo
                  Class 1
                </a>
                <div
                  style={{
                    color: "#1f8921",
                    fontSize: "1em",
                    marginTop: "0.3em",
                    fontWeight: "bold",
                  }}
                >
                  ✔️Bohr Theory Study Materials Class XI Unit-2
                </div>
                <a
                  href={bohrPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-block",
                    marginTop: "0.1em",
                    color: "#c37a28",
                    fontWeight: "bold",
                    fontSize: "1em",
                    pointerEvents: "auto",
                  }}
                >
                  📄View Study Materials(PDF)
                </a>
                <div
                  style={{
                    color: "#1f8921",
                    fontSize: "1em",
                    marginTop: "0.3em",
                    fontWeight: "bold",
                  }}
                >
                  ✔️বোহর তত্ত্ব পারমানবিক গঠন-Study Materials,Class XI, Unit-2
                </div>
                <a
                  href={banglaBohrPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-block",
                    marginTop: "0.5em",
                    color: "#c37a28",
                    fontWeight: "bold",
                    fontSize: "1em",
                    pointerEvents: "auto",
                  }}
                >
                  📄স্টাডি ম্যাটেরিয়াল দেখুন (PDF)
                </a>
              </div>
              <button
                className="courses-hamburger"
                onClick={() => setShowCoursesPopover(true)}
                aria-label="Toggle courses menu"
              >
                <span className="hamburger-icon">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
                <span className="courses-hamburger-label">
                  CLICK TO EXPLORE COURSES
                </span>
              </button>
            </div>
            {/* Awards Popover for mobile */}
            {showAwardsPopover && (
              <div
                className="awards-popover-overlay"
                onClick={() => setShowAwardsPopover(false)}
              >
                <div
                  className="awards-popover"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    className="awards-popover-close"
                    onClick={() => setShowAwardsPopover(false)}
                    aria-label="Close awards popover"
                  >
                    &times;
                  </button>
                  <div className="awards-title">AWARDS AND RECOGNITION</div>
                  <ul className="awards-list">
                    <li>CSIR-NET JRF (2010), Rank-108, India</li>
                    <li>
                      Best Research Poster Award (2015),
                      <br />
                      Rajasthan, India
                    </li>
                    <li>
                      3rd Best Research Poster Award (2015),
                      <br />
                      Kolkata, India
                    </li>
                    <li>JSPS Postdoctoral Award (2018), Japan</li>
                    <li>PBC Postdoctoral Award (2020), Israel</li>
                  </ul>
                </div>
              </div>
            )}
            {/* Courses Popover for mobile */}
            {showCoursesPopover && (
              <div
                className="courses-popover-overlay"
                onClick={() => setShowCoursesPopover(false)}
              >
                <div
                  className="courses-popover"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    className="awards-popover-close"
                    onClick={() => setShowCoursesPopover(false)}
                    aria-label="Close courses popover"
                  >
                    &times;
                  </button>
                  <div className="awards-title">COURSES OFFERED</div>
                  <div className="course-content">
                    <div>🎯JEE-Main/Advanced,WBJEE & NEET</div>
                    <div>
                      🎯Higher Secondary (CBSE, ICSE, West Bengal Board)
                    </div>
                    <div>🎯B.Sc(Chemistry) (All Universities)</div>
                    <div>🎯BE(Chem Eng.)</div>
                    <div>
                      🎯NET, GATE, IIT-JAM, TIFR, IISc for PhD entrance exam
                    </div>
                    <div style={{ height: "0.7em" }}></div>
                    <div
                      style={{
                        fontWeight: "bold",
                        color: "#c37a28",
                        fontSize: "1.3em",
                        textDecoration: "underline",
                      }}
                    >
                      COACHING AVAILABLE
                    </div>
                    <div
                      style={{
                        color: "#1f8921",
                        fontSize: "1em",
                        marginTop: "0.3em",
                        fontWeight: "bold",
                      }}
                    >
                      ✔️WBJEE, JEE-Main/Advanced & NEET, Bohr Theory Class XI
                      Unit-2
                    </div>
                    <a
                      href="https://www.youtube.com/watch?v=OOP_E0SugKU"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-block",
                        marginTop: "0.5em",
                        color: "#2563eb",
                        fontWeight: "bold",
                        textDecoration: "none",
                        fontSize: "1em",
                        pointerEvents: "auto",
                      }}
                    >
                      🎥 JEE Main/Advanced, WBJEE, NEET Bohr Theory- Demo Class
                      1
                    </a>
                    <div
                      style={{
                        color: "#1f8921",
                        fontSize: "1em",
                        marginTop: "0.3em",
                        fontWeight: "bold",
                      }}
                    >
                      ✔️CBSE, ICSE, Class-XI Unit-2 Bohr Theory
                    </div>
                    <a
                      href="https://www.youtube.com/watch?v=gKiEo4ivSw8"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-block",
                        marginTop: "0.1em",
                        color: "#2563eb",
                        fontWeight: "bold",
                        textDecoration: "none",
                        fontSize: "1em",
                        pointerEvents: "auto",
                      }}
                    >
                      🎥 ICSE CBSE Class XI Unit 1 Bohr's Theory- Demo Class 1
                    </a>
                    <div
                      style={{
                        color: "#1f8921",
                        fontSize: "1em",
                        marginTop: "0.3em",
                        fontWeight: "bold",
                      }}
                    >
                      ✔️WBHS Class-XI Chapter-2 বোরের পারমাণবিক গঠন তত্ত্ব
                    </div>
                    <a
                      href="https://www.youtube.com/watch?v=DqvZpkK4LCU"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-block",
                        marginTop: "0.1em",
                        color: "#2563eb",
                        fontWeight: "bold",
                        textDecoration: "none",
                        fontSize: "1em",
                        pointerEvents: "auto",
                      }}
                    >
                      🎥 WBHS Class-XI Chapter-2 বোরের পারমাণবিক গঠন তত্ত্ব-
                      Demo Class 1
                    </a>
                    <div
                      style={{
                        color: "#1f8921",
                        fontSize: "1em",
                        marginTop: "0.3em",
                        fontWeight: "bold",
                      }}
                    >
                      ✔️Bohr Theory Study Materials Class XI Unit-2
                    </div>
                    <a
                      href={bohrPdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-block",
                        marginTop: "0.1em",
                        color: "#c37a28",
                        fontWeight: "bold",
                        fontSize: "1em",
                        pointerEvents: "auto",
                      }}
                    >
                      📄View Study Materials(PDF)
                    </a>
                    <div
                      style={{
                        color: "#1f8921",
                        fontSize: "1em",
                        marginTop: "0.3em",
                        fontWeight: "bold",
                      }}
                    >
                      ✔️বোহর তত্ত্ব পারমানবিক গঠন-Study Materials,Class XI,
                      Unit-2
                    </div>
                    <a
                      href={banglaBohrPdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-block",
                        marginTop: "0.5em",
                        color: "#c37a28",
                        fontWeight: "bold",
                        fontSize: "1em",
                        pointerEvents: "auto",
                      }}
                    >
                      📄স্টাডি ম্যাটেরিয়াল দেখুন (PDF)
                    </a>
                  </div>
                </div>
              </div>
            )}
          </main>
          <aside className="info-boxes">
            {/* Move yellow and pink to top */}
            <div className="info-box pink">
              🚀 Promo Class Started
              <br />
              <a
                href="https://www.youtube.com/watch?v=fqQ7g-ycHXY"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#fff", fontWeight: 600 }}
              >
                🎥Promo Class-1-Class XII—JEE/NEET-Unit-1-Gas Laws-Pressure
              </a>
            </div>
            <div className="info-box yellow blink-effect">
              📢 Ongoing Course 2026-27 Exam for
              <br />
              JEE Main/Advance, WBJEE, WBHS, CBSE, ICSE
              <br />
              B.Sc(OrganicChemistry) GATE, NET(Chemistry)
            </div>

            {/* This stays where it was */}
            <div className="info-box orange">
              📞 Call/Text me for Chemistry Coaching
            </div>

            {/* Sticker stays where it was */}
            <div className="sticker-blink-wrapper">
              <img src={sticker} alt="sticker" className="sticker-blink" />
            </div>

            {/* WhatsApp link stays */}
            <a
              href="https://wa.me/919681071873"
              target="_blank"
              rel="noopener noreferrer"
              className="info-box violet blink-effect"
              style={{ textDecoration: "none", display: "block" }}
            >
              <FaWhatsapp
                style={{
                  fontSize: "1.3em",
                  verticalAlign: "middle",
                  marginRight: "0.5em",
                }}
              />
              919681071873
            </a>
            {/* These 3 boxes go at the bottom now */}
            <div className="info-box red">
              🎯 Learn Tricks to Crack Competitive Exams
            </div>
            <div className="info-box blue">📘 Learn Methods to Make Score</div>
            <div className="info-box green">
              📝 Questions & Answers Available
            </div>
          </aside>

          {/* Mobile view info boxes */}
          <div className="promo-box">
            🚀 Promo Class Started
            <br />
            <a
              href="https://www.youtube.com/watch?v=fqQ7g-ycHXY"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#fff", fontWeight: 600 }}
            >
              🎥Promo Class-1-Class XII—JEE/NEET-Unit-1-Gas Laws-Pressure
            </a>
          </div>

          <div className="course-box">
            📢 Ongoing Course 2026-27 Exam for
            <br />
            JEE Main/Advance, WBJEE, WBHS, CBSE, ICSE
            <br />
            B.Sc(OrganicChemistry) GATE, NET(Chemistry)
          </div>

          <div className="ph-box">📞 Call/Text me for Chemistry Coaching</div>

          <div className="sticker-blink-wrapper">
            <img src={sticker} alt="sticker" className="sticker-blink" />
          </div>

          <a
            href="https://wa.me/919681071873"
            target="_blank"
            rel="noopener noreferrer"
            className="wpcall-box"
            style={{ textDecoration: "none", display: "block" }}
          >
            <FaWhatsapp
              style={{
                fontSize: "1.3em",
                verticalAlign: "middle",
                marginRight: "0.5em",
              }}
            />
            919681071873
          </a>

          <div className="competitive-exam-box">
            🎯 Learn Tricks to Crack Competitive Exams
          </div>
          <div className="score-box">📘 Learn Methods to Make Score</div>
          <div className="qna-box">📝 Questions & Answers Available</div>
        </div>
      </div>
      <footer className="site-footer">
        <div>📍 India Address: East Midnapore, West Bengal, India.</div>
        <div>
          WEBSITE DESIGNER —
          <a
            href="https://personal-portfolio-orcin-six.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            https://personal-portfolio-orcin-six.vercel.app/
          </a>
        </div>
        <div>© www.hellosir.co.in | All Rights Reserved.</div>
      </footer>
    </>
  );
}

export default App;
