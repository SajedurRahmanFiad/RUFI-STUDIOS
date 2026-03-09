import { motion } from 'motion/react';
import { CheckCircle2, Award, Heart, Lightbulb } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-12 md:pt-24 pb-20">
      {/* Story Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <span className="text-brand-accent font-bold tracking-widest uppercase text-xs mb-4 block">Our Story</span>
              <h1 className="text-4xl md:text-6xl font-bold mb-8">Crafting digital <br />legacies since 2020.</h1>
              <p className="text-base text-black/60 mb-6 leading-relaxed">
                RUFI Studios was founded on a simple principle: digital products should be 
                as beautiful as they are functional. We started as a small team of 
                passionate developers and designers who wanted to challenge the status quo.
              </p>
              <p className="text-base text-black/60 mb-8 leading-relaxed">
                Today, we are a full-service IT agency helping brands across the globe 
                navigate the complex digital landscape. Our approach is minimal, 
                our code is clean, and our results are impactful.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-3xl font-bold mb-1">6+</p>
                  <p className="text-sm text-black/40 font-medium uppercase tracking-widest">Years Experience</p>
                </div>
                <div>
                  <p className="text-3xl font-bold mb-1">100%</p>
                  <p className="text-sm text-black/40 font-medium uppercase tracking-widest">Client Satisfaction</p>
                </div>
              </div>
            </motion.div>
            <div className="relative">
              <div className="aspect-[4/5] bg-brand-secondary rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
                  alt="Our team" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-brand-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-3xl font-bold mb-6">Our Core Values</h2>
            <p className="text-black/60">The principles that guide everything we do.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Lightbulb className="w-6 h-6" />, title: "Innovation", desc: "We constantly explore new technologies and creative solutions." },
              { icon: <CheckCircle2 className="w-6 h-6" />, title: "Quality", desc: "We never compromise on the quality of our work." },
              { icon: <Heart className="w-6 h-6" />, title: "Passion", desc: "We love what we do, and it shows in every project." },
              { icon: <Award className="w-6 h-6" />, title: "Excellence", desc: "We strive for excellence in every detail, no matter how small." }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-10 rounded-2xl border border-black/5 text-center"
              >
                <div className="w-14 h-14 bg-black text-white rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold mb-4">{value.title}</h4>
                <p className="text-black/60 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-16">The Minds Behind RUFI Studios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {[
              { name: "Mohammad Rumman", role: "Founder & Lead Designer", img: "./uploads/rumman.jpeg" },
              { name: "Md Sajedur Rahman Fiad", role: "Founder & Lead Developer", img: "./uploads/fiad.jpg" },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-black/5 text-center group"
              >
                <div className="aspect-square bg-brand-secondary rounded-full overflow-hidden mb-6 grayscale group-hover:grayscale-0 transition-all duration-500 border-4 border-transparent group-hover:border-brand-accent mx-auto w-32 h-32 md:w-60 md:h-60">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <h4 className="text-xl font-bold">{member.name}</h4>
                <p className="text-black/40 text-sm font-medium uppercase tracking-widest mt-1">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
