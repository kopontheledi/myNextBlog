import fs from 'fs';
import path from "path";
import matter from "gray-matter";


// Define the directory where your posts are stored
const postsDirectory = path.join(process.cwd(), "posts");
// Function to get the list of all post files in the directory
export function getPostsFiles(){
    return fs.readdirSync(postsDirectory);
}
// Function to retrieve data from a specific post file
export function getPostData(postIdentifier) {
    // Remove the file extension (e.g., ".md") from the post identifier
    const postSlug = postIdentifier.replace(/\.md$/, "");
    // Construct the file path for the specific post
    const filePath = path.join(postsDirectory, `${postSlug}.md`);
    // Read the content of the post file
    const fileContent = fs.readFileSync(filePath, "utf-8");
    // Parse the front matter (metadata) and content of the post using gray-matter
    const { data, content } = matter(fileContent);
    // Combine the parsed data with the post slug and content
    const postData = {
        slug: postSlug,
        ...data,
        content,
    };
    return postData;
}
// Function to get a list of all posts, sorted by date in descending order
export function getAllPosts() {
    // Get a list of all post files
    const postFiles = getPostsFiles();
    // Retrieve post data for each file and create an array of posts
    const allPosts = postFiles.map(postFile => {
        return getPostData(postFile);
    });
    // Sort the posts by date in descending order
    const sortedPosts = allPosts.sort((postA, postB) => postA.date > postB.date ? -1 : 1);
    return sortedPosts;
}
// Function to get a list of featured posts
export function getFeaturedPosts(){
    // Get data for all posts
    const allPosts = getAllPosts();
    // Filter the posts to select only featured ones (based on the 'isFeatured' property)
    const featuredPosts = allPosts.filter(post => post.isFeatured);
    return featuredPosts;
}






