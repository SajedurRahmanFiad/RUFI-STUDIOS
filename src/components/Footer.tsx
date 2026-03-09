import { Link } from 'react-router-dom';
import { Cpu, Github, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-secondary border-t border-black/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <Cpu className="text-white w-5 h-5" />
              </div>
              <span className="text-lg font-bold tracking-tight">RUFI STUDIOS</span>
            </Link>
            <p className="text-black/60 max-w-sm mb-8 leading-relaxed">
              We build digital experiences that matter. From custom web applications to 
              brand identities, we help businesses thrive in the digital age.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white rounded-lg border border-black/5 hover:border-brand-accent transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white rounded-lg border border-black/5 hover:border-brand-accent transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white rounded-lg border border-black/5 hover:border-brand-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white rounded-lg border border-black/5 hover:border-brand-accent transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-black/60 text-sm">
              <li><Link to="/services" className="hover:text-black transition-colors">Web Development</Link></li>
              <li><Link to="/services" className="hover:text-black transition-colors">Mobile Apps</Link></li>
              <li><Link to="/services" className="hover:text-black transition-colors">Graphic Design</Link></li>
              <li><Link to="/services" className="hover:text-black transition-colors">UI/UX Design</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Agency</h4>
            <ul className="space-y-4 text-black/60 text-sm">
              <li><Link to="/about" className="hover:text-black transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-black transition-colors">Contact</Link></li>
              <li><a href="#" className="hover:text-black transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-black/40">
          <p>© {new Date().getFullYear()} RUFI Studios. All rights reserved.</p>
          <p>Handcrafted with precision.</p>
        </div>
      </div>
    </footer>
  );
}
