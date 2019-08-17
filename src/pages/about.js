import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaCheckCircle } from "react-icons/fa"
import "./index.css"

import Sidebar from "../components/sidebar/Sidebar"
import TechTag from "../components/tags/TechTag"

const AboutPage = props => {
  return (
    <Layout>
      <SEO title="About" />
      <div className="post-page-main">
        <div className="sidebar px-4 py-2">
          <Sidebar />
        </div>

        <div className="post-main">
          <SEO title="About" />
          <div className="mt-3">
            <h2 className="heading">About</h2>
            <div className="mt-4">
              <p>
                <i>I am Céline, a full stack web developer that completed a tour of duty in the Intellectual Property field as an Excel-wielding business analyst.</i>
              </p>
              <p>
                I am working in a non-profit organisation as a web
                instructor.
                <br />
                Web dev bit by bit is a collection of resources I created to
                help students.
              </p>
              <p>
                For the past 5 years I worked in the Intellectual Property
                industry as a Project Manager first and moved to a Business
                Analyst role. I relocated to the US from London and took the
                opportunity to reimagine my career and work in the tech
                industry.
              </p>
              <p>A bit more about me:</p>
              <p>
                I love reading while drinking a cup of tea (this is my British
                side).
                <br />
                I also love cooking (this must be my French heritage),
                especially baking.
                <br />
                I am learning Spanish and would be really happy to practice if
                there are any Spanish speakers. :)
                <br />I am also a yoga-addict, practicing nearly every day.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
