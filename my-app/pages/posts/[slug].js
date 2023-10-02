import { Fragment } from "react";
import Head from "next/head";
import PostContent from "@/components/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from "@/lib/posts-util";

function PostDetailPage(props) {
  return (
    <Fragment>
      {/* Head component for setting title and meta description */}
      <Head>
        <title>{props.post.title}</title>
        <meta name='description' content={props.post.exerpt}/>
      </Head>
      {/* Rendering the content of the blog post */}
      <PostContent post={props.post} />
    </Fragment>
  )
}
// This function fetches data for the specific blog post based on the 'slug' from the URL
export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;
  const postData = getPostData(slug); // Fetching blog post data
  return {
    props: {
      post: postData,
    },
    revalidate: 600, // Revalidation interval for static generation (in seconds)
  };
}
// This function defines the possible paths for static site generation
export function getStaticPaths() {
  const postFileNames = getPostsFiles(); // Fetching list of blog post file names
  const slugs = postFileNames.map((fileName) => fileName.replace(/\.md$/, "")); // Extracting slugs
  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })), // Generating paths based on slugs
    fallback: false, // Returning a 404 error for non-existent paths
  };
}
export default PostDetailPage;