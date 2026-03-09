import { motion } from 'motion/react';
import { ArrowRight, Code2, Palette, Globe, Zap, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Web Development",
    description: "Modern, high-performance websites built with the latest technologies."
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Web Applications",
    description: "Custom software solutions tailored to your business needs."
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "Graphic Design",
    description: "Stunning visual identities and marketing materials that stand out."
  }
];

export default function Home() {
  return (
    <div className="pt-12 md:pt-6">
      {/* Hero Section */}
      <section className="section-padding min-h-[80vh] flex flex-col justify-center items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <span className="inline-block px-4 py-1.5 bg-brand-accent/10 text-brand-accent rounded-full text-xs font-bold tracking-widest uppercase mb-6">
            Digital Excellence
          </span>
          <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
            We build digital products that <span className="text-black/40">define the future.</span>
          </h1>
          <p className="text-base md:text-xl text-black/60 mb-10 max-w-2xl mx-auto leading-relaxed">
            RUFI Studios is a boutique IT agency dedicated to crafting minimal, 
            high-performance digital experiences for forward-thinking brands.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-black/80 transition-all flex items-center justify-center gap-2 group"
            >
              Start a project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/services" 
              className="bg-white border border-black/10 px-8 py-4 rounded-full font-medium hover:bg-brand-secondary transition-all flex items-center justify-center"
            >
              View services
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-brand-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">Our Expertise</h2>
              <p className="text-black/60">We combine technical precision with creative vision to deliver results that matter.</p>
            </div>
            <Link to="/services" className="text-sm font-bold flex items-center gap-2 hover:text-brand-accent transition-colors">
              Explore all services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-10 rounded-2xl border border-black/5 hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className="w-12 h-12 bg-black text-white rounded-2xl flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-black/60 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
              Why brands choose <br />RUFI Studios
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-secondary rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6 text-brand-accent" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2">Speed & Performance</h4>
                  <p className="text-black/60">We prioritize performance in every line of code, ensuring lightning-fast load times.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-secondary rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-brand-accent" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2">Reliable Support</h4>
                  <p className="text-black/60">We don't just build and leave. We provide ongoing support to help you scale.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-secondary rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-brand-accent" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2">Client-Centric</h4>
                  <p className="text-black/60">Your vision is our blueprint. We work closely with you at every stage.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-brand-secondary rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1000" 
                alt="Our workspace" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-xl shadow-2xl hidden md:block border border-black/5">
              <p className="text-3xl font-bold mb-1">50+</p>
              <p className="text-xs text-black/40 font-medium uppercase tracking-widest">Projects Delivered</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto bg-black rounded-3xl p-12 md:p-24 text-center text-white overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-accent rounded-full blur-[120px]"></div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h2 className="text-3xl md:text-6xl font-bold mb-8">Ready to start your <br />next digital journey?</h2>
            <p className="text-white/60 text-lg mb-12 max-w-xl mx-auto">
              Let's build something extraordinary together. Our team is ready to 
              bring your vision to life.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex bg-white text-black px-10 py-5 rounded-full font-bold hover:bg-brand-secondary transition-all"
            >
              Get started now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
