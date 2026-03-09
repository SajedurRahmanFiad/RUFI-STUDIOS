import { motion } from 'motion/react';
import { Code2, Palette, Globe, Smartphone, Search, Layout, BarChart, Layers } from 'lucide-react';

const serviceList = [
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Web Development",
    description: "We build fast, responsive, and SEO-friendly websites using modern frameworks like React and Next.js.",
    features: ["Custom CMS", "E-commerce", "Performance Optimization", "SEO Strategy"]
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that provide seamless user experiences.",
    features: ["iOS & Android", "React Native", "App Store Optimization", "User Analytics"]
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Graphic Design",
    description: "Creative visual solutions that communicate your brand's message effectively and beautifully.",
    features: ["Logo Design", "Brand Identity", "Marketing Assets", "Social Media Graphics"]
  },
  {
    icon: <Layout className="w-8 h-8" />,
    title: "UI/UX Design",
    description: "User-centered design that focuses on usability, accessibility, and delightful interactions.",
    features: ["Wireframing", "Prototyping", "User Research", "Interaction Design"]
  },
  {
    icon: <Search className="w-8 h-8" />,
    title: "Digital Marketing",
    description: "Data-driven strategies to increase your online presence and reach your target audience.",
    features: ["Social Media Management", "Content Strategy", "PPC Campaigns", "Email Marketing"]
  },
  {
    icon: <Layers className="w-8 h-8" />,
    title: "Custom Software",
    description: "Bespoke software solutions designed to solve complex business problems and improve efficiency.",
    features: ["API Integration", "Cloud Solutions", "Database Design", "Legacy Migration"]
  }
];

export default function Services() {
  return (
    <div className="pt-32 pb-20">
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mb-20"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-8">Our Services</h1>
            <p className="text-xl text-black/60 leading-relaxed">
              We offer a comprehensive suite of digital services designed to help 
              your business grow, innovate, and lead in your industry.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceList.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group p-10 bg-brand-secondary rounded-[2rem] border border-black/5 hover:bg-white hover:shadow-2xl transition-all duration-500"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-black group-hover:text-white transition-colors duration-500">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-black/60 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2 text-sm font-medium text-black/80">
                      <div className="w-1.5 h-1.5 bg-brand-accent rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl font-bold mb-6">Our Process</h2>
            <p className="text-white/60">How we turn your ideas into digital reality.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { step: "01", title: "Discovery", desc: "We dive deep into your business goals and user needs." },
              { step: "02", title: "Design", desc: "We craft intuitive interfaces and beautiful visuals." },
              { step: "03", title: "Develop", desc: "We build robust, scalable solutions with clean code." },
              { step: "04", title: "Deploy", desc: "We launch your product and ensure everything is perfect." }
            ].map((item, index) => (
              <div key={index} className="relative">
                <span className="text-6xl font-black text-white/10 absolute -top-10 -left-4">{item.step}</span>
                <h4 className="text-xl font-bold mb-4 relative z-10">{item.title}</h4>
                <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
