import React from "react"
import { Link, graphql } from "gatsby"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Bold = ({ children }) => <strong>{children}</strong>
const Text = ({ children }) => <p className="align-center-or-something">{children}</p>

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      let { description, file } = node.data.target.fields
      return <img src={file["en-US"].url} alt={description} />
    },
  },
}

const Blog = ({ data }) => {
  const { title, body, richBody, image, tags } = data.contentfulBlog
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
        {richBody &&
          documentToReactComponents(richBody.json, options)
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
      richBody {
        json
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