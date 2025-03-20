
import { Link } from "react-router-dom";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Phone, 
  Mail, 
  CreditCard, 
  Shield 
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-50 pt-16 pb-8 mt-auto">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">About Treebo</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-brand transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-sm text-muted-foreground hover:text-brand transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-sm text-muted-foreground hover:text-brand transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm text-muted-foreground hover:text-brand transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/press" className="text-sm text-muted-foreground hover:text-brand transition-colors">
                  Press
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Guest Policies</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/terms" className="text-sm text-muted-foreground hover:text-brand transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-muted-foreground hover:text-brand transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/guest-policy" className="text-sm text-muted-foreground hover:text-brand transition-colors">
                  Guest Policy
                </Link>
              </li>
              <li>
                <Link to="/cancellation" className="text-sm text-muted-foreground hover:text-brand transition-colors">
                  Cancellation Policy
                </Link>
              </li>
              <li>
                <Link to="/responsible-disclosure" className="text-sm text-muted-foreground hover:text-brand transition-colors">
                  Responsible Disclosure
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/faq" className="text-sm text-muted-foreground hover:text-brand transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-brand transition-colors">
                  Contact Us
                </Link>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-brand" />
                <span className="text-sm text-muted-foreground">1800-203-5969</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-brand" />
                <span className="text-sm text-muted-foreground">hello@treebo.com</span>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-muted-foreground hover:text-brand transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Twitter" className="text-muted-foreground hover:text-brand transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-brand transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-brand transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            
            <h3 className="text-lg font-bold mt-6">We Accept</h3>
            <div className="flex space-x-4">
              <CreditCard className="w-8 h-8 text-muted-foreground" />
              <Shield className="w-8 h-8 text-muted-foreground" />
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground mb-4 md:mb-0">
              © {new Date().getFullYear()} Treebo Hotels. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/sitemap" className="text-sm text-muted-foreground hover:text-brand transition-colors">
                Sitemap
              </Link>
              <Link to="/accessibility" className="text-sm text-muted-foreground hover:text-brand transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
