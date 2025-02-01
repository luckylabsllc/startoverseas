import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="py-8 md:py-12 px-4 md:px-0">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-semibold text-lg mb-2 dark:text-white">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-muted-foreground hover:text-foreground dark:text-gray-400 dark:hover:text-white transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-foreground dark:text-gray-400 dark:hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/careers" className="text-muted-foreground hover:text-foreground dark:text-gray-400 dark:hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold text-lg mb-2 dark:text-white">Resources</h3>
            <ul className="space-y-3">
              <li><Link to="/blog" className="text-muted-foreground hover:text-foreground dark:text-gray-400 dark:hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/guides" className="text-muted-foreground hover:text-foreground dark:text-gray-400 dark:hover:text-white transition-colors">Guides</Link></li>
              <li><Link to="/support" className="text-muted-foreground hover:text-foreground dark:text-gray-400 dark:hover:text-white transition-colors">Support</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold text-lg mb-2 dark:text-white">Legal</h3>
            <ul className="space-y-3">
              <li><Link to="/privacy" className="text-muted-foreground hover:text-foreground dark:text-gray-400 dark:hover:text-white transition-colors">Privacy</Link></li>
              <li><Link to="/terms" className="text-muted-foreground hover:text-foreground dark:text-gray-400 dark:hover:text-white transition-colors">Terms</Link></li>
              <li><Link to="/cookies" className="text-muted-foreground hover:text-foreground dark:text-gray-400 dark:hover:text-white transition-colors">Cookies</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold text-lg mb-2 dark:text-white">Social</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-foreground dark:text-gray-400 dark:hover:text-white transition-colors">Twitter</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground dark:text-gray-400 dark:hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground dark:text-gray-400 dark:hover:text-white transition-colors">Facebook</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};