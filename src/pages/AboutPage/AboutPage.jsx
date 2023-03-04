import React from 'react';

import './AboutPage.scss';

const AboutPage = () => (
  <div className="about">
    <div className="about__wrapper">
      <h2 className="about__title">About Us</h2>
      <article className="about__descr">
        <p>
          Welcome to our chat application! We&apos;re so glad you&apos;re here.
        </p>
        <p>
          Our goal is to provide a seamless, easy-to-use platform for people to
          connect and chat with one another. We know that communication is key
          to building strong relationships, and that&apos;s why we&apos;ve put
          so much effort into creating a top-notch chat experience.
        </p>
        <p>
          Our team is made up of experienced developers and designers who are
          passionate about creating great software. We&apos;ve spent countless
          hours refining our app to make sure it&apos;s fast, reliable, and
          intuitive. Whether you&apos;re chatting with friends or coworkers, we
          want to make sure you can do it with ease.
        </p>
        <p>
          We also take privacy very seriously. Our app is designed with security
          in mind, and we use the latest encryption technologies to ensure that
          your conversations stay private and secure. You can trust that your
          data is safe with us.
        </p>
        <p>
          We&apos;re always looking for ways to improve our app and make it even
          better for our users. If you have any suggestions or feedback, please
          don&apos;t hesitate to reach out to us. We&apos;re here to help and we
          value your input.
        </p>
      </article>
    </div>
  </div>
);

export default AboutPage;
