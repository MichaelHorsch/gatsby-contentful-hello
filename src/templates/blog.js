import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = ({ data }) => {
  const { title, body, image, tags } = data.contentfulBlog;
  return (
    <Layout>
      <SEO title={title} />
      <div className="blogpost">
        <h1>{title}</h1>
        {image && 
            <img alt={title} src={image.file.url} />
        }
        {tags &&
            <div className="tags">
            {tags.map(tag => (
                <span className="tag" key={tag}>
                {tag}
                </span>
            ))}
            </div>
        }
        <p className="body-text">{body.body}</p>
        <Link to="/blog">View blog</Link>
        <Link to="/">Back to Home</Link>
      </div>
    </Layout>
  )
}

export default Blog
export const pageQuery = graphql`
  query($slug: String!) {
    contentfulBlog(slug: { eq: $slug }) {
      title
      slug
      body {
        body
      }
      image {
        file {
          url
        }
      }
      tags
    }
  }
`