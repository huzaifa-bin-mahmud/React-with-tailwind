
const teamMembers = [
   { id: 1, name: "John Doe", role: "Software Engineer", img: "https://readymadeui.com/team-1.webp" },
   { id: 2, name: "Mark Adair", role: "Software Engineer", img: "https://readymadeui.com/team-2.webp" },
   { id: 3, name: "Simon Konecki", role: "Web Designer", img: "https://readymadeui.com/team-3.webp" },
   { id: 4, name: "Sophia", role: "Software Developer", img: "https://readymadeui.com/team-4.webp" },
   { id: 5, name: "Alen", role: "Software Developer", img: "https://readymadeui.com/team-5.webp" },
   { id: 6, name: "Eleanor", role: "Web Designer", img: "https://readymadeui.com/team-6.webp" },
   { id: 7, name: "John Doe", role: "Software Engineer", img: "https://readymadeui.com/team-1.webp" },
   { id: 8, name: "Mark Adair", role: "Software Engineer", img: "https://readymadeui.com/team-2.webp" },
];

export default function TeamSection() {

   return (
      <section className="px-4 md:px-8 mt-6">
         <div className="max-w-3xl mx-auto text-center md:mb-16 mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 md:text-4xl">
               Meet our team
            </h2>
            <p className="text-base leading-relaxed text-slate-600">
               Meet our team of professionals to serve you.
            </p>
         </div>

         <ul className="grid grid-cols-2 gap-x-8 gap-y-12 max-w-xl mx-auto lg:grid-cols-4 md:grid-cols-3 md:max-w-3xl lg:max-w-5xl">
            {teamMembers.map((member) => (
               <li key={member.id} className="text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-50 mx-auto">
                     <img
                        src={member.img}
                        className="w-full h-full object-cover"
                        alt={member.name}
                     />
                  </div>

                  <div className="mt-6">
                     <h3 className="text-slate-900 text-base font-semibold">
                        {member.name}
                     </h3>
                     <p className="text-slate-600 text-sm mt-2">
                        {member.role}
                     </p>
                  </div>
               </li>
            ))}
         </ul>
      </section>
   )
}