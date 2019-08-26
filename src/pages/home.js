import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const blogPosts = [
    {
      title: "My Second Blog Post",
      content:
        "<p>Fruitcake biscuit jujubes chupa chups brownie chocolate. Pastry jelly beans macaroon soufflé pastry marshmallow cake chocolate bar. Brownie jelly-o lemon drops sweet roll. Donut tiramisu sugar plum chocolate. Croissant muffin biscuit. Cheesecake liquorice pudding oat cake biscuit powder. Chocolate bar wafer brownie danish gummies. Pie gingerbread tart lollipop biscuit cupcake fruitcake sweet macaroon. Dragée icing bear claw sugar plum cake caramels. Dragée muffin halvah topping oat cake powder brownie. Biscuit jelly brownie pastry marshmallow croissant. Sesame snaps jelly chupa chups bonbon apple pie wafer halvah caramels cupcake. Oat cake cotton candy jelly.</p><p>Danish ice cream toffee brownie biscuit. Croissant carrot cake icing candy canes. Pastry cotton candy cake gummies jelly beans. Gingerbread macaroon pie chocolate cake cake tootsie roll. Marzipan dragée chocolate sweet lemon drops candy tiramisu candy canes sweet. Chupa chups toffee bonbon. Pastry sweet roll jelly-o donut candy jelly beans lemon drops. Chocolate cake cupcake soufflé marzipan jelly-o sweet lemon drops pastry candy canes. Candy macaroon macaroon fruitcake toffee. Dessert lollipop soufflé. Caramels biscuit pudding tootsie roll jelly fruitcake. Tiramisu bonbon liquorice chocolate bar chupa chups.</p>",
      coverImage: "http://placekitten.com/700/350",
      coverImageAlt: "Another random kitten from placekitten.com.",
      slug: "my-second-blog-post",
      date: "August 7th, 2019"
    },
    {
      title: "My First Blog Post",
      content:
        "<p>Cupcake ipsum dolor sit amet. Topping cake jelly-o biscuit marshmallow. Lemon drops topping donut biscuit toffee caramels caramels danish. Gingerbread chocolate cake chocolate. Chocolate cake jelly cotton candy gummi bears candy. Chupa chups sesame snaps dessert carrot cake chocolate liquorice gingerbread. Sesame snaps chupa chups tootsie roll croissant ice cream biscuit. Cotton candy fruitcake candy canes. Cake oat cake chocolate cake tiramisu chupa chups. Toffee jelly gingerbread gummi bears cotton candy. Liquorice tiramisu marzipan jelly beans jelly cheesecake candy. Topping cupcake bear claw carrot cake cookie dessert marzipan caramels. Bear claw liquorice cotton candy toffee jelly donut tart tiramisu chocolate. Brownie tiramisu pie halvah.</p>",
      coverImage: "http://placekitten.com/700/400",
      coverImageAlt: "A random kitten from placekitten.com.",
      slug: "my-first-blog-post",
      date: "August 1st, 2019"
    }
  ];

  return (
    <>
      <h1>Blog posts</h1>
      <p>
        Welcome to the starter code! We're showing hard-coded data right now.
      </p>
      {blogPosts.map(blogPost => (
        <section class="card">
          <img src={blogPost.coverImage} alt={blogPost.coverImageAlt} />
          <div class="card-content">
            <h2>
              {blogPost.title} &mdash;{" "}
              <span style={{ color: "#5e5e5e" }}>{blogPost.date}</span>
            </h2>
            <p
              dangerouslySetInnerHTML={{
                __html: `${blogPost.content.substring(0, 200)}...`
              }}
            ></p>
            <Link to={`/${blogPost.slug}`}>Continue reading...</Link>
          </div>
        </section>
      ))}
    </>
  );
};

export default Home;
