

const blogPosts = [
   {
      id: 1,
      image: "https://readymadeui.com/images/food22.webp",
      date: "August 16, 2023",
      title: "The Future of Food and Tech",
      description: "Explore how robotics and AI are revolutionizing fast food.",
      link: "#"
   },
   {
      id: 2,
      image: "https://readymadeui.com/images/food11.webp",
      date: "August 16, 2023",
      title: "Eating Clean, Feeling Great",
      description: "Healthy eating doesn’t have to be boring. Discover delicious meals that boost your mood.",
      link: "#"
   },
   {
      id: 3,
      image: "https://readymadeui.com/images/food.webp",
      date: "August 16, 2023",
      title: "Pasta That Tells a Story",
      description: "Dive into the world of bold flavors and cultural traditions.",
      link: "#"
   },
   {
      id: 4,
      image: "https://readymadeui.com/images/food33.webp",
      date: "June 10, 2023",
      title: "Food That Inspires",
      description: "Bright meals, bold ideas—see how vibrant food presentation can spark imagination and joy.",
      link: "#"
   },
   {
      id: 5,
      image: "https://readymadeui.com/images/food44.webp",
      date: "April 20, 2023",
      title: "Energize Your Routine",
      description: "Power your day with nourishing bowls packed with flavor and crunch.",
      link: "#"
   },
   {
      id: 6,
      image: "https://readymadeui.com/images/food55.webp",
      date: "August 16, 2023",
      title: "Sweet Trends to Watch",
      description: "From aesthetic plating to bite-sized delights, uncover what’s trending in the world of desserts and snacks.",
      link: "#"
   }
];

export default function Blog() {

   return (
      <section className="mt-6 px-4 md:px-8">
         <div className="max-w-md mx-auto sm:max-w-3xl lg:max-w-6xl">
            <div className="mb-12 max-w-3xl mx-auto text-center md:mb-16">
               <h2 className="text-3xl font-bold mb-6 text-slate-900 md:text-4xl">
                  Latest Blog Posts
               </h2>
               <p className="text-base text-slate-600 leading-relaxed">
                  Explore our latest articles, insights, and practical tips designed to help you stay updated,
                  improve your workflow, and build better products with confidence.
               </p>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
               {blogPosts.map((post) => (
                  <article
                     key={post.id}
                     className="bg-gray-100 border border-slate-200 rounded-lg overflow-hidden group"
                  >
                     <div className="relative overflow-hidden">
                        <img
                           src={post.image}
                           alt={post.title}
                           className="w-full h-60 object-cover group-hover:scale-110 transition-all duration-300"
                           loading="lazy"
                        />
                        <div className="px-3 py-2 text-white text-sm font-medium bg-pink-500 absolute bottom-0 right-0">
                           {post.date}
                        </div>
                     </div>

                     <a href={post.link} className="block p-6">
                        <div>
                           <h3 className="text-lg font-semibold text-slate-900 mb-3">
                              {post.title}
                           </h3>
                           <p className="text-base text-slate-600 leading-relaxed line-clamp-2">
                              {post.description}
                           </p>
                        </div>
                     </a>
                  </article>
               ))}
            </div>
         </div>
      </section>
   );
}