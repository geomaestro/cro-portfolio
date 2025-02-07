import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, useParams } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const caseStudies = [
  {
    id: 1,
    title: "E-Commerce CRO Case Study",
    description: "Optimized checkout flow to increase conversion rates by 30%.",
    beforeImg: "before-checkout.png",
    afterImg: "after-checkout.png",
    conversionBefore: "1.5%",
    conversionAfter: "3.2%",
    abTest: {
      variationA: "Get Started CTA - 1.5%",
      variationB: "Start Your Free Trial CTA - 3.2%",
    },
    funnelBefore: "Users → Add to Cart → Checkout → Purchase (Drop-off 50%)",
    funnelAfter: "Users → Add to Cart → Checkout → Purchase (Drop-off 30%)",
    content: "<p>This case study details the changes made to the checkout flow, resulting in a significant improvement in conversion rates.</p>"
  },
];

function Home() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Conversion Rate Optimization Portfolio</h1>
      <p className="text-gray-600">Helping businesses improve conversions with data-driven insights.</p>
      <div className="grid grid-cols-1 md-grid-cols-2 gap-6 mt-6">
        {caseStudies.map((caseStudy) => (
          <Card key={caseStudy.id} className="p-4 shadow-lg">
            <CardContent>
              <h2 className="text-xl font-semibold">{caseStudy.title}</h2>
              <p className="text-gray-500">{caseStudy.description}</p>
              <Link to={`/case-study/${caseStudy.id}`}>
                <Button className="mt-4">View Case Study</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function CaseStudy() {
  const { id } = useParams();
  const caseStudy = caseStudies.find((study) => study.id === parseInt(id));

  if (!caseStudy) return <p>Case Study Not Found</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{caseStudy.title}</h1>
      <p className="text-gray-600">{caseStudy.description}</p>

      <h2 className="text-2xl font-semibold mt-4">Before & After</h2>
      <div className="grid grid-cols-2 gap-4">
        <img src={caseStudy.beforeImg} alt="Before Optimization" className="rounded-lg shadow" />
        <img src={caseStudy.afterImg} alt="After Optimization" className="rounded-lg shadow" />
      </div>

      <h2 className="text-2xl font-semibold mt-4">A/B Test Results</h2>
      <p>Variation A: {caseStudy.abTest.variationA}</p>
      <p>Variation B: {caseStudy.abTest.variationB}</p>

      <h2 className="text-2xl font-semibold mt-4">Funnel Optimization</h2>
      <p><strong>Before:</strong> {caseStudy.funnelBefore}</p>
      <p><strong>After:</strong> {caseStudy.funnelAfter}</p>

      <div className="mt-6 p-4 border rounded shadow-lg bg-white">
        <h2 className="text-2xl font-semibold">Full Case Study</h2>
        <div dangerouslySetInnerHTML={{ __html: caseStudy.content }}></div>
      </div>

      <div className="mt-6">
        <Link to="/">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
            ← Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Contact Me</h1>
      <p className="text-gray-600">Get in touch for CRO services.</p>
      <form className="mt-4">
        <label className="block mb-2">Name</label>
        <input type="text" className="w-full p-2 border rounded" placeholder="Your Name" />
        <label className="block mt-4 mb-2">Email</label>
        <input type="email" className="w-full p-2 border rounded" placeholder="Your Email" />
        <label className="block mt-4 mb-2">Message</label>
        <textarea className="w-full p-2 border rounded" placeholder="Your Message"></textarea>
        <Button className="mt-4">Send Message</Button>
      </form>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-study/:id" element={<CaseStudy />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
