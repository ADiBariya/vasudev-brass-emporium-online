
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-brass rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">V</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Vasudev Brass</h3>
                <p className="text-sm text-slate-400">Precision Brass Components</p>
              </div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Leading manufacturer of precision brass components with over 25 years of experience 
              in delivering quality solutions to industries worldwide.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center hover:bg-brass-600 transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center hover:bg-brass-600 transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center hover:bg-brass-600 transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center hover:bg-brass-600 transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Products', 'Quality', 'Capabilities', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase().replace(' ', '')}`} 
                    className="text-slate-300 hover:text-brass-400 transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              {[
                'Electrical Components',
                'Plumbing Fittings', 
                'Automotive Parts',
                'Industrial Hardware',
                'Custom Components',
                'Panel Locks'
              ].map((product) => (
                <li key={product}>
                  <a 
                    href="#products" 
                    className="text-slate-300 hover:text-brass-400 transition-colors text-sm"
                  >
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-brass-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-300 text-sm">+91 93281 02299</p>
                  <p className="text-slate-300 text-sm">+91 22 2345 6789</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-brass-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-300 text-sm">info@vasudevbrass.com</p>
                  <p className="text-slate-300 text-sm">sales@vasudevbrass.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-brass-400 flex-shrink-0 mt-0.5" />
                <p className="text-slate-300 text-sm">
                  Industrial Area, Sector 12<br />
                  Mumbai, Maharashtra 400001<br />
                  India
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © 2024 Vasudev Brass. All rights reserved. | ISO 9001:2015 Certified Company
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-brass-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-brass-400 text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-slate-400 hover:text-brass-400 text-sm transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
