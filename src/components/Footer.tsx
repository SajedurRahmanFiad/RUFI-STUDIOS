import { Link } from 'react-router-dom';
import { Cpu, Facebook, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-secondary border-t border-black/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <img src="/uploads/Logo.png" alt="RUFI STUDIOS Logo" className="w-40 h-18 group-hover:rotate-12 transition-transform duration-300 rounded-lg" />
            </Link>
            <p className="text-black/60 max-w-sm mb-8 leading-relaxed">
              We build digital experiences that matter. From custom web applications to 
              brand identities, we help businesses thrive in the digital age.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/rufistudios" className="p-2 bg-white rounded-md border border-black/5 hover:border-brand-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="mailto:studios.rufi@gmail.com" className="p-2 bg-white rounded-md border border-black/5 hover:border-brand-accent transition-colors">
                <Mail className="w-5 h-5" />
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
          <p>Developed by us, the RUFI Brothers.</p>
        </div>
      </div>
    </footer>
  );
}
