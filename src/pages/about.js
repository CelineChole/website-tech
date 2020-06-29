import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Sidebar from "../components/sidebar/Sidebar"
import AboutMobileLinks from "../components/AboutMobileLinks"

const AboutPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="About" />
      <div className="post-page-main">
        <Sidebar />

        <div className="post-main">
          <h2 className="heading">About</h2>
          <p>
            I am Céline, a full stack web developer that completed a tour of
            duty in the Intellectual Property field as an Excel-wielding
            business analyst.
          </p>
          <p>
            I work in a bootcamp as a web instructor.
            <br />
            Web dev bit by bit is a collection of resources that I found useful
            for me or for the students I work with.
          </p>
          <p>
            For the past 5 years I worked in the Intellectual Property industry
            as a Project Manager and later as a Business Analyst. I relocated to
            the US from London and took the opportunity to reimagine my career
            and work in the tech industry.
          </p>
          <p>A bit more about me:</p>
          <p>
            I love reading while drinking a cup of tea (this is my British
            side).
            <br />
            I also love cooking (this must be my French heritage), especially
            baking.
            <br />
            <br />I am also a yoga-addict, practicing nearly every day. If you
            would like some inspiration to practice, I created a library
            grouping YouTube videos I have been using:{" "}
            <a target="_blank" href="https://yogilibrary.com/" rel="noreferrer">
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
