import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Icons } from '@/components/icons';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Mail, Phone } from 'lucide-react';

const contactImage = PlaceHolderImages.find((img) => img.id === 'contact-hero');

export default function ContactPage() {
  return (
    <div>
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">Get in Touch</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We're here to answer your questions, provide demos, and help you get started.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Card className="overflow-hidden shadow-xl">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-6">Contact Form</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First Name</Label>
                      <Input id="first-name" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input id="last-name" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john.doe@example.com" />
                  </div>
                   <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="e.g., Demo Request" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Your message..." rows={5} />
                  </div>
                  <Button type="submit" className="w-full" disabled>
                    Submit (disabled)
                  </Button>
                </form>
              </div>

              <div className="bg-secondary p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6 text-muted-foreground">
                   <div className="flex items-start gap-4">
                        <Mail className="w-6 h-6 text-primary mt-1"/>
                        <div>
                            <h3 className="font-semibold text-foreground">Email</h3>
                            <p>For sales inquiries:</p>
                            <a href="mailto:sales@pendencyflow.com" className="text-primary hover:underline">sales@pendencyflow.com</a>
                            <p className="mt-2">For support:</p>
                             <a href="mailto:support@pendencyflow.com" className="text-primary hover:underline">support@pendencyflow.com</a>
                        </div>
                   </div>
                   <div className="flex items-start gap-4">
                        <Phone className="w-6 h-6 text-primary mt-1"/>
                        <div>
                            <h3 className="font-semibold text-foreground">Phone</h3>
                            <p>+1 (555) 123-4567</p>
                            <p className="text-sm">(Mon-Fri, 9am-5pm EST)</p>
                        </div>
                   </div>
                </div>

                <div className="mt-12 pt-8 border-t">
                    <h3 className="text-2xl font-bold mb-4">Download the App</h3>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="#"><Icons.AppStore /></Link>
                        <Link href="#"><Icons.PlayStore /></Link>
                    </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
