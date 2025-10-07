export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "LogikLabs",
    "url": "https://logiklabs.io",
    "logo": "https://logiklabs.io/logo.png",
    "description": "Rapid MVP and POC development for startups and founders. Ship working products in 2-4 weeks with AI-accelerated development.",
    "email": "contact@logiklabs.io",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Banja Luka",
      "addressCountry": "BIH"
    },
    "sameAs": [
      "https://www.linkedin.com/company/logik-labs/"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "contact@logiklabs.io",
      "contactType": "Customer Service"
    },
    "offers": {
      "@type": "AggregateOffer",
      "offerCount": "4",
      "offers": [
        {
          "@type": "Offer",
          "name": "MVP Development",
          "description": "Launch your product in 2-4 weeks with working MVP development"
        },
        {
          "@type": "Offer",
          "name": "Proof of Concept",
          "description": "Test technical feasibility fast with working POC in days"
        },
        {
          "@type": "Offer",
          "name": "AI-Powered Features",
          "description": "Add intelligent capabilities to your product with custom AI integration"
        },
        {
          "@type": "Offer",
          "name": "Rapid Prototyping",
          "description": "Turn sketches into clickable prototypes in days"
        }
      ]
    }
  };

  const services = [
    {
      title: 'MVP Development',
      description: 'Launch your product in 2-4 weeks. We build focused, working MVPs that let you validate your idea with real users and secure your next round of funding.',
      icon: '🚀'
    },
    {
      title: 'Proof of Concept',
      description: 'Test technical feasibility fast. Get a working POC in days to validate core features, de-risk development, and make confident decisions about your product.',
      icon: '⚡'
    },
    {
      title: 'AI-Powered Features',
      description: 'Add intelligent capabilities to your product. From AI chat and automation to custom ML features—we integrate cutting-edge AI that users actually want.',
      icon: '🤖'
    },
    {
      title: 'Rapid Prototyping',
      description: 'Turn sketches into clickable prototypes in days. Perfect for investor demos, user testing, or validating design decisions before writing production code.',
      icon: '✨'
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-primary/95 backdrop-blur-sm z-50 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-center items-center">
          <div className="text-2xl md:text-3xl font-bold text-white">LOGIK LABS</div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Validate Your Idea<br />in Weeks, Not Months
          </h1>
          <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto">
            We help startups and founders ship working MVPs fast—so you can test with real users and iterate with confidence
          </p>
          <div className="mt-10">
            <a
              href="#contact"
              className="inline-block bg-accent text-white px-8 py-4 rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              Ship Your MVP
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-foreground/5">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2 text-accent">2-4 weeks</div>
              <p className="text-foreground/70">From kickoff to working MVP</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2 text-accent">Real validation</div>
              <p className="text-foreground/70">Ship to users, gather feedback, iterate</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2 text-accent">AI-accelerated</div>
              <p className="text-foreground/70">Build faster without sacrificing quality</p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Built for Founders Who Need to Move Fast</h2>
            <p className="text-lg text-foreground/70 mb-4">
              You don't have months to spend on development. You need to validate your idea, get in front of users, and prove
              your concept works—before your runway runs out.
            </p>
            <p className="text-lg text-foreground/70">
              We specialize in rapid MVP and POC development for startups and solo founders. Using modern tools and AI-assisted
              workflows, we cut development time in half while building products that are production-ready from day one.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">How We Help You Ship Fast</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-8 border border-foreground/10 rounded-2xl hover:border-accent transition-colors"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-foreground/70">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-foreground/5">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-foreground/70 mb-8">
            Looking for help? Reach out and we will do our best to assist you
          </p>
          <a
            href="mailto:contact@logiklabs.io"
            className="inline-flex items-center gap-3 text-2xl md:text-3xl font-semibold text-accent hover:opacity-70 transition-opacity"
          >
            contact@logiklabs.io
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-foreground/10">
        <div className="max-w-6xl mx-auto text-center text-foreground/60">
          <div className="mb-6">
            <p className="text-sm font-medium mb-2">Office Locations</p>
            <div className="flex justify-center gap-4 flex-wrap text-sm">
              <span>Croatia</span>
              <span>•</span>
              <span>Bosnia</span>
              <span>•</span>
              <span>Austria</span>
              <span>•</span>
              <span>Slovenia</span>
            </div>
          </div>
          <p className="mb-4">© {new Date().getFullYear()} LOGIK LABS. All rights reserved.</p>
          <div className="flex justify-center gap-6">
            <a href="https://www.linkedin.com/company/logik-labs/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
      </div>
    </>
  );
}
