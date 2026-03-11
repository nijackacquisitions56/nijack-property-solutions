import React, { useState } from "react";

export default function NijackPropertySolutionsWebsite() {

const [submitted,setSubmitted] = useState(false);

const handleSubmit = (e) => {
e.preventDefault();
setSubmitted(true);
};

const steps = [
{title:"Submit Property Info",text:"Tell us about the property and your timeline."},
{title:"Property Review",text:"We review the property and local market data."},
{title:"Receive Your Offer",text:"If it fits our buying criteria we present a clear cash offer."},
{title:"Choose Closing Date",text:"Close through a local title company on your timeline."}
];

const faq = [
{q:"Do I need to make repairs before selling?",a:"No. We buy houses as-is."},
{q:"How fast can closing happen?",a:"Many closings happen within 14-21 days depending on title work."},
{q:"What areas do you buy in?",a:"We serve homeowners in Ohio and nationwide through our investor network."},
{q:"Are there commissions or fees?",a:"No commissions when we purchase the property."}
];

return (

<div className="min-h-screen bg-gradient-to-br from-white to-emerald-50 text-gray-800 font-sans">

{/* HEADER */}

<header className="sticky top-0 z-50 border-b bg-white">

<div className="mx-auto max-w-7xl px-6 py-4 flex justify-between items-center">

<div>

<div className="font-bold text-lg text-emerald-900">
Nijack Property Solutions
</div>

<div className="text-xs text-gray-500 uppercase tracking-widest font-semibold">
Real Estate Investment Solutions
</div>

</div>

<nav className="hidden md:flex gap-6 text-sm font-bold text-emerald-900">

<a href="#process">Process</a>

<a href="#faq">FAQ</a>

<a href="#contact" className="bg-emerald-700 text-white px-4 py-2 rounded-full">
Get Offer
</a>

</nav>

</div>

</header>

{/* HERO */}

<section className="mx-auto max-w-5xl px-6 py-14 text-center">

<div className="mb-4 inline-flex rounded-full bg-emerald-100 px-4 py-1 text-emerald-700 text-sm font-bold">

Serving Homeowners in Ohio & Nationwide

</div>

<h1 className="text-4xl md:text-6xl font-black mb-6">

Sell Your House Fast For Cash

</h1>

<p className="text-xl text-gray-600 mb-10">

No Repairs. No Commissions. Flexible Closing.

</p>

</section>

{/* FORM */}

<section id="contact" className="mx-auto max-w-3xl px-6 pb-24">

<div className="bg-white rounded-3xl p-10 shadow-xl border">

{!submitted ? (

<>

<h2 className="text-3xl font-bold text-center mb-8">
Request Your Cash Offer
</h2>

<form onSubmit={handleSubmit} className="space-y-5">

<input required placeholder="Full Name" className="rounded-xl border p-4 w-full"/>

<input required type="tel" placeholder="Phone Number" className="rounded-xl border p-4 w-full"/>

<input required placeholder="Property Address" className="rounded-xl border p-4 w-full"/>

<select required className="rounded-xl border p-4 w-full">

<option value="">How Soon Are You Looking To Sell?</option>
<option>ASAP (Within 30 Days)</option>
<option>30-60 Days</option>
<option>60-90 Days</option>
<option>3-6 Months</option>
<option>Just Exploring Options</option>

</select>

<div>

<p className="font-bold mb-2">
What best describes your situation?
</p>

<div className="space-y-2 text-sm">

<label className="flex gap-2"><input type="checkbox"/> Inherited property</label>
<label className="flex gap-2"><input type="checkbox"/> Property needs repairs</label>
<label className="flex gap-2"><input type="checkbox"/> Behind on property taxes</label>
<label className="flex gap-2"><input type="checkbox"/> Problem tenants</label>
<label className="flex gap-2"><input type="checkbox"/> Property currently vacant</label>
<label className="flex gap-2"><input type="checkbox"/> Relocating</label>
<label className="flex gap-2"><input type="checkbox"/> Divorce or life change</label>
<label className="flex gap-2"><input type="checkbox"/> Just exploring options</label>

</div>

</div>

<textarea placeholder="Tell us about the property (repairs, tenants, taxes, etc.)"
className="rounded-xl border p-4 w-full"/>

<button type="submit"
className="w-full rounded-xl bg-emerald-700 py-5 font-bold text-white text-lg hover:bg-emerald-800">

Get My Cash Offer

</button>

<p className="text-xs text-gray-400 text-center">

By submitting you consent to be contacted regarding your property inquiry.

</p>

</form>

</>

):( 

<div className="text-center py-12">

<div className="text-6xl mb-4 text-emerald-600">✅</div>

<h2 className="text-3xl font-bold mb-2">
Property Details Received
</h2>

<p className="text-gray-600">
Our team will review your property and contact you shortly.
</p>

</div>

)}

</div>

</section>

{/* PHONE */}

<section className="text-center pb-20">

<p className="text-sm uppercase text-gray-500 font-bold">

Prefer to speak with someone?

</p>

<a href="tel:3303319070"
className="text-4xl font-black text-emerald-700 block mt-2">

330-331-9070

</a>

<p className="text-xs text-gray-400 mt-2 italic">
Local Ohio Real Estate Investment Company
</p>

</section>

{/* PROCESS */}

<section id="process" className="bg-white py-24">

<div className="mx-auto max-w-6xl px-6 text-center">

<h2 className="text-4xl font-black mb-16">

Our Simple 4-Step Process

</h2>

<div className="grid md:grid-cols-4 gap-10">

{steps.map((step,i)=>(
<div key={i}>

<div className="text-emerald-700 font-black text-xl mb-2">
{i+1}
</div>

<h3 className="font-bold mb-2">{step.title}</h3>

<p className="text-gray-600 text-sm">{step.text}</p>

</div>
))}

</div>

</div>

</section>

{/* FAQ */}

<section id="faq" className="bg-emerald-50 py-24">

<div className="mx-auto max-w-4xl px-6">

<h2 className="text-4xl font-black text-center mb-16">

Frequently Asked Questions

</h2>

{faq.map((item,i)=>(

<div key={i} className="mb-6 bg-white p-6 rounded-xl shadow">

<h3 className="font-bold text-emerald-900 mb-2">
{item.q}
</h3>

<p className="text-gray-600">
{item.a}
</p>

</div>

))}

</div>

</section>

{/* PRIVACY */}

<section className="bg-stone-50 py-16 border-t text-center">

<h2 className="text-2xl font-bold mb-8">
Privacy Policy
</h2>

<p className="text-sm text-gray-600 max-w-xl mx-auto">

Information submitted through this website is used only to evaluate the
property and respond to your inquiry. We do not sell your personal information.

</p>

</section>

{/* FOOTER */}

<footer className="bg-white py-12 border-t text-center">

<div className="font-bold text-emerald-900 text-xl mb-2">
Nijack Property Solutions
</div>

<p className="text-gray-500 text-sm mb-6">
Serving Homeowners in Ohio & Nationwide
</p>

<div className="flex flex-col md:flex-row justify-center items-center gap-6 text-sm font-bold text-emerald-800 mb-8">

<a href="tel:3303319070">📞 330-331-9070</a>

<span className="hidden md:block text-gray-300">|</span>

<a href="mailto:info@nijackpropertysolutions.com">

info@nijackpropertysolutions.com

</a>

</div>

<p className="text-xs text-gray-400 max-w-xl mx-auto">

Nijack Property Solutions is a real estate investment company. We may purchase
properties directly or assign contracts to investment partners.

</p>

<p className="text-xs text-gray-400 mt-4">
© {new Date().getFullYear()} Nijack Property Solutions
</p>

</footer>

</div>

);

}
