import { Fragment } from "react";
import { Hero } from "@/components/home-page/hero";
import FeaturedPosts from "@/components/home-page/featured-posts";

const DUMMY_POSTS = [ 
    { slug: 'getting-started-with-nextjs', title: 'Getting started with NextJS', image: 'getting-started-nextjs.png', excerpt: 'NextJS is a React framework for production- it makes building fullstack react so much easier', date: '2023-09-20' },
    
    { slug: 'getting-started-with-nextjs2', title: 'Getting started with NextJS', image: 'getting-started-nextjs.png', excerpt: 'NextJS is a React framework for production- it makes building fullstack react so much easier', date: '2023-09-20' },

    { slug: 'getting-started-with-nextjs3', title: 'Getting started with NextJS', image: 'getting-started-nextjs.png', excerpt: 'NextJS is a React framework for production- it makes building fullstack react so much easier', date: '2023-09-20' },

    { slug: 'getting-started-with-nextjs4', title: 'Getting started with NextJS', image: 'getting-started-nextjs.png', excerpt: 'NextJS is a React framework for production- it makes building fullstack react so much easier', date: '2023-09-20' }
];

function HomePage () {
return (
    <Fragment>
        <Hero />
        <FeaturedPosts posts={DUMMY_POSTS} />
        
    </Fragment>
)
}
export default HomePage;

