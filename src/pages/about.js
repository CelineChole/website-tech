import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Sidebar from "../components/sidebar/Sidebar"
import AboutMobileLinks from "../components/AboutMobileLinks"
import siteLogo from "../images/siteLogo.png"

const AboutPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="About" />
      <div className="post-page-main">
        <Sidebar />
        <div className="about-container">
          <h2 className="heading">About</h2>
          <p>
            I am Céline, a full stack web developer that completed a tour of
            duty in the Intellectual Property field as an Excel-wielding
            business analyst.
          </p>
          <p>
            I work in a bootcamp as a web instructor. Web Dev Bit By Bit is a
            collection of resources built for budding developers. You can
            navigate through posts by clicking on tags, to load all posts click
            on Archive.
          </p>
          <p>
            Some links that you might found useful:
            <p>
              <Link
                to="/2020-07/vs-code-favorite-features-plugin/"
                style={{ color: "#25EE4A", display: "block" }}
              >
                VS Code tips and tricks
              </Link>

              <Link to="/2019-08/tech-resources/" style={{ color: "#25EE4A" }}>
                Tech resources
              </Link>
            </p>
          </p>
          <div style={{ textAlign: "center" }}>
            <img
              src={siteLogo}
              style={{
                display: "inline",
                borderRadius: "10%",
                width: "150px",
                marginBottom: "3rem",
                marginTop: "3rem",
              }}
            />
          </div>
          <p>
            For the past 5 years I worked in the Intellectual Property industry
            as a Project Manager and later as a Business Analyst. I relocated to
            the US from London and took the opportunity to reimagine my career
            and work in the tech industry.
          </p>
          <p>A bit more about me:</p>
          <p>
            I love reading while drinking a cup of tea (this is my British
            side). I also love cooking (this must be my French heritage),
            especially baking. I am also a yoga-addict, practicing nearly every
            day. If you would like some inspiration to practice, I created a
            library grouping YouTube videos I have been using:{" "}
            <a
              style={{ color: "#25EE4A" }}
              target="_blank"
              href="https://yogilibrary.com/"
              rel="noreferrer"
            >
              Yogi Library
            </a>
          </p>
        </div>
      </div>
      <AboutMobileLinks contacts={data.site.siteMetadata.contacts} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        contacts {
          linkedin
          github
        }
      }
    }
  }
`

export default AboutPage
