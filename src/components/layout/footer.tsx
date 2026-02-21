import Link from 'next/link';
import { Icons } from '@/components/icons';
import { NAV_LINKS, SOCIAL_LINKS } from '@/lib/constants';
import { Facebook, Linkedin, Twitter } from 'lucide-react';

const socialIconMap = {
  Twitter: Twitter,
  Linkedin: Linkedin,
  Facebook: Facebook,
};

export function Footer() {
  return (
    <footer className="bg-secondary border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="mb-4 inline-block">
              <Icons.Logo className="h-7 w-auto" />
            </Link>
            <p className="text-muted-foreground text-sm">
              Revolutionizing case management with AI for a more efficient justice system.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Email: <a href="mailto:support@pendencyflow.com" className="hover:text-primary">support@pendencyflow.com</a></li>
              <li>Support: <a href="mailto:help@pendencyflow.com" className="hover:text-primary">help@pendencyflow.com</a></li>
            </ul>
            <div className="flex space-x-4 mt-4">
              {SOCIAL_LINKS.map((social) => {
                 const Icon = socialIconMap[social.icon as keyof typeof socialIconMap];
                 return (
                    <Link key={social.name} href={social.href} className="text-muted-foreground hover:text-primary transition-colors">
                        <Icon className="h-5 w-5" />
                        <span className="sr-only">{social.name}</span>
                    </Link>
                );
              })}
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} PendencyFlow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
