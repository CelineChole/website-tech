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
            <div>
              <p>
                <i>I am Céline, a business analyst turned engineer.</i>
              </p>
              <p>
                For the past 5 years I worked in the Intellectual Property
                industry as a Project Manager first and moved to a Business
                Analyst role. I relocated to the US from London and took the
                opportunity to reimagine my career and work in the tech
                industry.
              </p>
              <p>
                I am now working in a non-profit organisation as a web
                instructor.
                <br />
                Web deb bit by bit is a collection of resources I created to help students. 
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
            <br />
            <h4>Features</h4>
            <div>
              <span className="text-success d-inline-block" title="tags">
                <FaCheckCircle size={26} style={{ color: "success" }} />
              </span>
              <p className="d-inline-block ml-3 w-75 align-top">
                Filter by technologies using tags:
              </p>
              <div className="ml-5">
                <TechTag
                  tag="react"
                  tech="React"
                  name="DiReact"
                  size={20}
                  color="deepskyblue"
                />
                <TechTag
                  tag="javascript"
                  tech="JavaScript"
                  name="DiJsBadge"
                  size={20}
                  color="yellow"
                />
                <TechTag
                  tag="git"
                  tech="Git"
                  name="DiGitMerge"
                  size={20}
                  color="white"
                />
                <TechTag
                  tag="nodejs"
                  tech="Node.js"
                  name="DiNodejsSmall"
                  size={20}
                  color="lightgreen"
                />
                <TechTag
                  tag="html"
                  tech="HTML"
                  name="FaHtml5"
                  size={20}
                  color="darkorange"
                />
                <TechTag
                  tag="css"
                  tech="CSS"
                  name="DiCss3Full"
                  size={20}
                  color="teal"
                />
                <TechTag
                  tag="github"
                  tech="GitHub"
                  name="DiGithubBadge"
                  size={20}
                  color="white"
                />
                <TechTag
                  tag="firebase"
                  tech="Firebase"
                  name="DiFirebase"
                  size={20}
                  color="orange"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
