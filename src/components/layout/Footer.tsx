import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="border-t dark:border-gray-800 py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-semibold mb-4 dark:text-white">Company</h3>
          <ul className="space-y-2">
            <li><Link to="/about" className="text-muted-foreground hover:text-foreground dark:text-gray-400 dark:hover:text-white">About</Link></li>
            <li><Link to="/contact" className="text-muted-foreground hover:text-foreground dark:text-gray-400 dark:hover:text-white">Contact</Link></li>
            <li><Link to="/careers" className="text-muted-foreground hover:text-foreground dark:text-gray-400 dark:hover:text-white">Careers</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4 dark:text-white">Resources</h3>
          <ul className="space-y-2">
            <li><Link to="/blog" className="text-muted-foreground hover:text-foreground dark:text-gray-400 dark:hover:text-white">Blog</Link></li>
            <li><Link to="/guides" className="text-muted-foreground hover:text-foreground dark:text-gray-400 dark:hover:text-white">Guides</Link></li>
            <li><Link to="/support" className="text-muted-foreground hover:text-foreground dark:text-gray-400 dark:hover:text-white">Support</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4 dark:text-white">Legal</h3>
          <ul className="space-y-2">
            <li><Link to="/privacy" className="text-muted-foreground hover:text-foreground dark:text-gray-400 dark:hover:text-white">Privacy</Link></li>
            <li><Link to="/terms" className="text-muted-foreground hover:text-foreground dark:text-gray-400 dark:hover:text-white">Terms</Link></li>
            <li><Link to="/cookies" className="text-muted-foreground hover:text-foreground dark:text-gray-400 dark:hover:text-white">Cookies</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4 dark:text-white">Social</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-muted-foreground hover:text-foreground dark:text-gray-400 dark:hover:text-white">Twitter</a></li>
            <li><a href="#" className="text-muted-foreground hover:text-foreground dark:text-gray-400 dark:hover:text-white">LinkedIn</a></li>
            <li><a href="#" className="text-muted-foreground hover:text-foreground dark:text-gray-400 dark:hover:text-white">Facebook</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};