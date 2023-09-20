import classes from './post-detail.module.css'
import PostHeader from './post-header'

const DUMMY_POST = {
     slug: 'getting-started-with-nextjs', title: 'Getting started with NextJS', 
     image: 'getting-started-nextjs.png', 
     date: '2023-09-20' ,
    content: '# This is a first post'
     
}

export default function PostContent() {
const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;


    return(
        <article>
            <PostHeader title='' image={imagePath} />
            CONTENT
        </article>
    )
}