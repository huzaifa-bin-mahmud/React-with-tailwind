

const faqData = [
   {
      question: "How can I create an account?",
      answer: "Creating an account is easy! Click on the \"Sign Up\" button and follow the simple steps to get started."
   },
   {
      question: "Is there a mobile app available?",
      answer: "Yes, we offer a mobile app for both iOS and Android. Visit the App Store or Google Play to download it."
   },
   {
      question: "How can I reset my password?",
      answer: "To reset your password, go to the login page and click on the \"Forgot Password\" link. Follow the instructions sent to your email."
   },
   {
      question: "Can I use the platform without a subscription?",
      answer: "Yes, we offer a free plan with limited features. You can explore the core tools without any upfront cost."
   },
   {
      question: "Where can I find tutorials and guides?",
      answer: "Visit our Help Center for detailed tutorials, video walkthroughs, and troubleshooting tips to get the most out of the platform."
   },
   {
      question: "Is my data secure on your platform?",
      answer: "Absolutely. We use industry-standard encryption and security practices to ensure your data is always protected and private."
   }
];

export default function FAQs() {
   return (
      <section className="mt-6 px-4 md:px-8">
         <div className="max-w-7xl mx-auto rounded-lg border border-slate-300">
            {/* Header Section */}
            <div className="p-6 border-b border-slate-300">
               <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  Frequently Asked Questions
               </h2>
               <p className="text-slate-600 text-base">
                  Explore our comprehensive FAQ to find answers to common queries.
               </p>
            </div>

            {/* Grid Section */}
            <div className="grid lg:grid-cols-2 gap-6 p-6">
               {faqData.map((item, index) => (
                  <div
                     key={index}
                     className="bg-gray-100 p-4 rounded-md border border-slate-300 sm:p-6"
                  >
                     <h3 className="text-base font-semibold text-slate-900 mb-4">
                        {item.question}
                     </h3>
                     <p className="text-slate-600 text-base leading-relaxed">
                        {item.answer}
                     </p>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}