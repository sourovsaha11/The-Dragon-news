import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div>
      {/* new latest news section */}

      <section className="latestNews flex gap-3 justify-center mx-auto bg-base-200 p-2 w-11/12 my-3">
        <p className="text-base-100 bg-secondary p-2 text-accent rounded-md">
          Latest
        </p>
        <Marquee speed={60} pauseOnHover={true}>
          <div className="flex gap-7">
            <p>
              A . Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum cum adipisci repellendus vero rerum accusamus similique
              molestiae est quasi aperiam enim quae itaque, voluptatem ratione
              corporis doloribus sunt! Tenetur, cupiditate?
            </p>
            <p>
              B . Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum cum adipisci repellendus vero rerum accusamus similique
              molestiae est quasi aperiam enim quae itaque, voluptatem ratione
              corporis doloribus sunt! Tenetur, cupiditate?
            </p>
            <p>
              C . Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum cum adipisci repellendus vero rerum accusamus similique
              molestiae est quasi aperiam enim quae itaque, voluptatem ratione
              corporis doloribus sunt! Tenetur, cupiditate?
            </p>
          </div>
        </Marquee>
      </section>
    </div>
  );
};

export default LatestNews;
