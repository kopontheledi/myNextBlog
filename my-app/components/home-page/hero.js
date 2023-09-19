import Image from 'next/image';

import classes from './home.module.css'


export function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src='/images/site/default.png' alt='An image showing Kopo' width={300} height={300} />
      </div>
      <h1>Hi, I'm Kopo Ntheledi</h1>
      <p>I blog about web development - especially frontend frameworks like React.</p>
    </section>
  );
}
