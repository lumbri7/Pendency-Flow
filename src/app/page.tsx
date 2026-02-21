import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { FEATURES, TESTIMONIALS } from '@/lib/constants';
import {
  CalendarClock,
  CheckCircle,
  ChevronRight,
  LayoutDashboard,
  Quote,
  ShieldCheck,
  Timer,
} from 'lucide-react';
import type { ReactNode } from 'react';

const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-home');

const featureIconMap: { [key: string]: ReactNode } = {
  Timer: <Timer size={24} />,
  CalendarClock: <CalendarClock size={24} />,
  ShieldCheck: <ShieldCheck size={24} />,
  LayoutDashboard: <LayoutDashboard size={24} />,
};

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative h-[60vh] md:h-[80vh] w-full">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            data-ai-hint={heroImage.imageHint}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative container mx-auto h-full flex flex-col items-center justify-center text-center text-primary-foreground px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Revolutionize Case Management with AI
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl text-primary-foreground/80">
            PendencyFlow empowers legal professionals by automating scheduling,
            predicting case durations, and prioritizing urgent matters, bringing
            unprecedented efficiency to the justice system.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/contact">Request Demo</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link href="/contact">Download App</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold">
              Key Features for Modern Legal Practice
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              Discover the tools that will transform your workflow and reduce delays.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {FEATURES.slice(0, 4).map((feature) => (
              <Card key={feature.title} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full w-fit">
                    {featureIconMap[feature.icon]}
                  </div>
                  <CardTitle className="pt-4">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
             <Button asChild variant="link" className="text-primary text-lg">
                <Link href="/features">See All Features <ChevronRight className="ml-1" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold">How PendencyFlow Works</h2>
                <p className="mt-4 text-muted-foreground">
                A simple, three-step process to bring efficiency to your courtroom or firm. Our AI integrates seamlessly with your existing workflow.
                </p>
            </div>
            <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
                <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-4">1</div>
                    <h3 className="text-xl font-semibold mb-2">Integrate e-Courts Data</h3>
                    <p className="text-muted-foreground">Securely connect with e-Courts services to import case data with robust privacy controls.</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-4">2</div>
                    <h3 className="text-xl font-semibold mb-2">AI Analyzes & Predicts</h3>
                    <p className="text-muted-foreground">Our algorithms analyze historical data to predict case durations and identify potential bottlenecks.</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-4">3</div>
                    <h3 className="text-xl font-semibold mb-2">View Actionable Dashboards</h3>
                    <p className="text-muted-foreground">Access intuitive dashboards for auto-scheduling, workload management, and case prioritization.</p>
                </div>
            </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">Trusted by Legal Professionals</h2>
            <p className="mt-4 text-muted-foreground">
              Our pilot programs have demonstrated significant improvements in judicial efficiency. Here's what our users are saying.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-1 lg:grid-cols-2">
            {TESTIMONIALS.map((testimonial, index) => (
              <Card key={index} className="bg-secondary border-none">
                <CardContent className="pt-6">
                  <Quote className="w-8 h-8 text-primary/50 mb-4" />
                  <p className="text-muted-foreground italic mb-4">
                    "{testimonial.quote}"
                  </p>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold">Ready to Reduce Delays?</h2>
          <p className="mt-4 max-w-xl mx-auto text-primary-foreground/80">
            Join the growing number of courts and law firms embracing the future of case management. Request a personalized demo today.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/contact">Get Started Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
