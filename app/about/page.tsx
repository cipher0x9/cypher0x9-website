export default function AboutPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">About </span>
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Cypher0x9
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Bridging millennia of mathematical wisdom with cutting-edge blockchain technology.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-16">
          <div className="bg-dark-lighter border border-primary/20 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">Our Mission</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              At Cypher0x9, we believe that the ancient mathematical principles that have stood
              the test of time hold the key to solving modern blockchain challenges. Our mission
              is to bridge the gap between historical mathematical brilliance and contemporary
              cryptographic innovation.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              We are dedicated to advancing Web3 technology through rigorous research,
              open-source development, and community education. Our work spans cryptography,
              blockchain consensus mechanisms, zero-knowledge proofs, and decentralized systems.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-dark-lighter border border-primary/10 rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">🔐</div>
              <h3 className="text-xl font-bold text-primary mb-3">Security First</h3>
              <p className="text-gray-400">
                We prioritize security in everything we build, leveraging proven cryptographic
                principles and rigorous testing.
              </p>
            </div>
            <div className="bg-dark-lighter border border-secondary/10 rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-bold text-secondary mb-3">Open Source</h3>
              <p className="text-gray-400">
                We believe in transparency and collaboration. All our projects are open-source
                and community-driven.
              </p>
            </div>
            <div className="bg-dark-lighter border border-primary/10 rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold text-primary mb-3">Education</h3>
              <p className="text-gray-400">
                We are committed to educating the community about cryptography, mathematics,
                and blockchain technology.
              </p>
            </div>
          </div>
        </div>

        {/* What We Do */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">What We Do</h2>
          <div className="space-y-6">
            <div className="bg-dark-lighter border border-primary/10 rounded-lg p-6 hover:border-primary/30 transition-all">
              <h3 className="text-xl font-bold text-primary mb-3">Research & Development</h3>
              <p className="text-gray-400">
                We conduct cutting-edge research in cryptography, consensus mechanisms, and
                blockchain scalability. Our team publishes peer-reviewed papers and contributes
                to academic discourse in the field.
              </p>
            </div>
            <div className="bg-dark-lighter border border-secondary/10 rounded-lg p-6 hover:border-secondary/30 transition-all">
              <h3 className="text-xl font-bold text-secondary mb-3">Open Source Projects</h3>
              <p className="text-gray-400">
                We build and maintain open-source tools, libraries, and frameworks that help
                developers create secure and efficient blockchain applications.
              </p>
            </div>
            <div className="bg-dark-lighter border border-primary/10 rounded-lg p-6 hover:border-primary/30 transition-all">
              <h3 className="text-xl font-bold text-primary mb-3">Community Building</h3>
              <p className="text-gray-400">
                Through workshops, tutorials, and documentation, we help developers and
                enthusiasts learn about Web3 technology and contribute to its advancement.
              </p>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Our Team</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-8">
            We are a diverse team of mathematicians, cryptographers, blockchain developers, and
            researchers united by our passion for advancing Web3 technology.
          </p>
          <div className="inline-flex items-center px-6 py-3 bg-dark-lighter border border-primary/30 rounded-lg">
            <span className="text-primary font-semibold">
              Join us in building the future of decentralized technology
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
