import ReactMarkdown from "react-markdown"
import PostHeader from "./post-header"
import classes from './post-content.module.css'
import Image from "next/image"
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter"
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark"
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript'
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css'


// Register syntax highlighting languages for code blocks
SyntaxHighlighter.registerLanguage('js', js);
SyntaxHighlighter.registerLanguage('css', css);
function PostContent(props) {
  const { post } = props;
  // Construct the image path for the post
  const imagePath = `/images/posts/${post.slug}/${post.image}`;
  // Custom renderers for ReactMarkdown
  const customRenderers = {
    // Custom renderer for paragraphs
    p(paragraph) {
      const { node } = paragraph;
      // Check if the paragraph contains an image as its first child
      if (node.children[0].tagName === 'img') {
        const image = node.children[0];
        // Render an image component with specified properties
        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${post.slug}/${image.url}`}
              alt={image.alt}
              width={200}
              height={300}
            />
          </div>
        );
      }
      // If not an image, render a regular paragraph
      return <p>{paragraph.children}</p>;
    },
    // Custom renderer for code blocks
    code(code) {
      const { className, children } = code;
      const language = className.split('-')[1]; // Extract the programming language from className
      // Render syntax-highlighted code using PrismLight
      return (
        <SyntaxHighlighter
          style={atomDark}
          language={language}
          children={children}
        />
      );
    },
  };
  // Render the post content with custom renderers
  return (
    <article className={classes.content}>
      {/* Render the post header component */}
      <PostHeader title={post.title} image={imagePath} />
      {/* Render the post content using ReactMarkdown and custom renderers */}
      <ReactMarkdown renders={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  );
}
export default PostContent;