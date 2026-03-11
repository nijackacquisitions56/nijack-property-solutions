{/* FAQ */}
<section id="faq" className="bg-emerald-50 py-24">

  <div className="mx-auto max-w-4xl px-6">

    <h2 className="text-4xl font-black text-center mb-16">
      Frequently Asked Questions
    </h2>

    {faq.map((item, i) => (

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
