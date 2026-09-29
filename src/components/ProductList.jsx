import { Link } from "react-router";

const products = [
   {
      id: 1,
      name: "Skin Glow Combo",
      price: "$8.00",
      originalPrice: "$11.00",
      rating: 4,
      reviews: 102,
      image: "https://readymadeui.com/images/sunscreen-img-1.webp",
      alt: "sunscreen",
   },
   {
      id: 2,
      name: "Crystal Glow",
      price: "$9.00",
      originalPrice: "$14.00",
      rating: 4,
      reviews: 100,
      image: "https://readymadeui.com/images/sunscreen-img-2.webp",
      alt: "Crystal Glow",
   },
   {
      id: 3,
      name: "Lancome La Base",
      price: "$7.00",
      originalPrice: "$11.00",
      rating: 3,
      reviews: 90,
      image: "https://readymadeui.com/images/sunscreen-img-3.webp",
      alt: "Lancome La Base",
   },
   {
      id: 4,
      name: "HD Face Primer",
      price: "$12.00",
      originalPrice: "$16.00",
      rating: 5,
      reviews: 102,
      image: "https://readymadeui.com/images/sunscreen-img-4.webp",
      alt: "HD Face Primer",
   },
   {
      id: 5,
      name: "Sunscreen Gel",
      price: "$12.00",
      originalPrice: "$18.00",
      rating: 4,
      reviews: 102,
      image: "https://readymadeui.com/images/sunscreen-img-5.webp",
      alt: "Sunscreen Gel",
   },
   {
      id: 6,
      name: "Watermelon Sunscreen",
      price: "$14.00",
      originalPrice: "$20.00",
      rating: 4,
      reviews: 102,
      image: "https://readymadeui.com/images/sunscreen-img-6.webp",
      alt: "Watermelon Sunscreen",
   },
   {
      id: 7,
      name: "Aloederm Body Cream",
      price: "$14.00",
      originalPrice: "$22.00",
      rating: 3,
      reviews: 200,
      image: "https://readymadeui.com/images/aloederm-cream-img-1.webp",
      alt: "Aloederm Body Cream",
   },
   {
      id: 8,
      name: "Aloederm Face Cream",
      price: "$12.00",
      originalPrice: "$20.00",
      rating: 4,
      reviews: 88,
      image: "https://readymadeui.com/images/aloederm-cream-img-2.webp",
      alt: "Aloederm Face Cream",
   },
   {
      id: 9,
      name: "Shower Cream",
      price: "$15.00",
      originalPrice: "$25.00",
      rating: 4,
      reviews: 72,
      image: "https://readymadeui.com/images/face-body-cream-img-1.webp",
      alt: "face and body cream",
   },
   {
      id: 10,
      name: "Face Body Shower Cream",
      price: "$16.00",
      originalPrice: "$26.00",
      rating: 4,
      reviews: 94,
      image: "https://readymadeui.com/images/face-body-cream-img-2.webp",
      alt: "face and body cream 2",
   },
];

function StarIcon({ filled }) {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         className={`size-3.5 ${filled ? "fill-[#ffc107]" : "fill-[#CED5D8] "}`}
         viewBox="0 0 24 24"
         aria-hidden="true"
      >
         <path d="m23.363 8.584-7.378-1.127L12.678.413c-.247-.526-1.11-.526-1.357 0L8.015 7.457.637 8.584a.75.75 0 0 0-.423 1.265l5.36 5.494-1.267 7.767a.75.75 0 0 0 1.103.777L12 20.245l6.59 3.643a.75.75 0 0 0 1.103-.777l-1.267-7.767 5.36-5.494a.75.75 0 0 0-.423-1.266z" data-original="#ffc107" />
      </svg>
   );
}

function StarRating({ rating, max = 5 }) {
   return (
      <div
         className="flex justify-center gap-2"
         role="img"
         aria-label={`Rated ${rating} out of ${max} stars`}
      >
         {Array.from({ length: max }, (_, i) => (
            <StarIcon key={i} filled={i < rating} />
         ))}
      </div>
   );
}

function ProductCard({ product }) {
   return (
      <li className="flex flex-col border border-slate-300 shadow-sm rounded-md p-1.5 transition-all relative overflow-hidden">
         <a href="#" className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">
            <div className="w-full bg-slate-50 rounded-sm overflow-hidden">
               <img
                  src={product.image}
                  alt={product.alt}
                  className="w-full aspect-square object-cover object-top"
               />
            </div>

            <div className="py-4 px-2 text-left">
               <Link to="/productview" className="text-sm font-semibold text-slate-900 line-clamp-2">
                  {product.name}
               </Link>

               <div className="mt-2">
                  <p className="text-slate-900 font-semibold text-sm wrap-break-word">
                     <span className="mr-1.5">MRP:</span>
                     <strike className="mr-1.5 text-slate-600">
                        {product.originalPrice}
                     </strike>
                     {product.price}
                  </p>
               </div>

               <div className="flex items-center flex-wrap gap-3 mt-4">
                  <StarRating rating={product.rating} />
                  <p className="text-sm font-medium text-slate-600">
                     ({product.reviews})
                  </p>
               </div>
            </div>
         </a>

         <div className="mt-3 h-10">
            <div className="flex items-center absolute bottom-0 left-0 right-0 w-full h-10">
               <button
                  type="button"
                  title="Save"
                  aria-label="Add to wishlist"
                  className="flex items-center justify-center cursor-pointer border-t border-slate-300 h-full w-1/4 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
               >
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     className="size-5 fill-slate-900"
                     viewBox="0 0 66 66"
                     aria-hidden="true"
                  >
                     <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z" data-original="#000000" />
                  </svg>
               </button>

               <button
                  type="button"
                  className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 cursor-pointer text-sm text-white font-semibold border-0 h-full w-9/12 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
               >
                  Add to Bag
               </button>
            </div>
         </div>
      </li>
   );
}

export default function ProductList() {
   return (
      <section className="mt-6 px-4 md:px-8" aria-labelledby="products-heading">
         <div className="max-w-7xl mx-auto">
            <div className="border-b border-slate-300 pb-4 mb-8 md:mb-12">
               <h2 id="products-heading" className="text-2xl font-bold text-slate-900">
                  Hot list
               </h2>
               <p className="text-base text-slate-600 mt-2">
                  Out the most popular and trending products.
               </p>
            </div>

            <ul className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 min-[1200px]:grid-cols-5! md:gap-4">
               {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
               ))}
            </ul>
         </div>
      </section>
   );
}