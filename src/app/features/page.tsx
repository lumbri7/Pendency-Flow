import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { FEATURES } from '@/lib/constants';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  CalendarClock,
  CheckCircle,
  GitBranch,
  LayoutDashboard,
  Shield,
  ShieldCheck,
  Timer,
  Users,
  Bot,
} from 'lucide-react';
import type { ReactNode } from 'react';

const heroImage = PlaceHolderImages.find((img) => img.id === 'features-hero');

const featureIconMap: { [key: string]: ReactNode } = {
  Timer: <Timer size={24} />,
  CalendarClock: <CalendarClock size={24} />,
  ShieldCheck: <ShieldCheck size={24} />,
  LayoutDashboard: <LayoutDashboard size={24} />,
  GitBranch: <GitBranch size={24} />,
  Users: <Users size={24} />,
};

export default function FeaturesPage() {
  return (
    <div>
      <section className="relative h-[40vh] w-full bg-primary">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            data-ai-hint={heroImage.imageHint}
            fill
            className="object-cover opacity-20"
          />
        )}
        <div className="relative container mx-auto h-full flex flex-col items-center justify-center text-center text-primary-foreground px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold">Our Features</h1>
          <p className="mt-4 max-w-2xl text-lg text-primary-foreground/80">
            Intelligent tools designed to streamline workflows and enhance judicial efficiency.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((feature) => (
              <div key={feature.title} className="flex gap-4">
                <div className="text-primary mt-1">{featureIconMap[feature.icon]}</div>
                <div>
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="mt-1 text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold">AI Concept Visualizer</h2>
                <p className="mt-4 text-muted-foreground">
                    See how PendencyFlow's AI provides actionable insights at a glance. Below is a static, pre-rendered example of our urgent case prioritization feature in action.
                </p>
            </div>

            <div className="mt-12 max-w-4xl mx-auto">
                <Card className="overflow-hidden shadow-2xl">
                    <CardHeader className="bg-muted/50 border-b">
                        <CardTitle className="flex items-center gap-2 text-lg"><Bot /> AI-Prioritized Case List</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                        <div className="divide-y">
                            <div className="grid grid-cols-12 gap-4 p-4 font-semibold text-sm text-muted-foreground">
                                <div className="col-span-1">Status</div>
                                <div className="col-span-4">Case Title</div>
                                <div className="col-span-3">Next Hearing</div>
                                <div className="col-span-4">AI Insight</div>
                            </div>
                             <div className="grid grid-cols-12 gap-4 p-4 items-center bg-destructive/10">
                                <div className="col-span-1 flex justify-center"><div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div></div>
                                <div className="col-span-4 text-sm font-medium">State v. John Doe (Appeal)</div>
                                <div className="col-span-3 text-sm">Oct 28, 2024</div>
                                <div className="col-span-4 text-sm text-red-700 font-medium">Urgent: Approaching statute of limitations. High delay risk.</div>
                            </div>
                            <div className="grid grid-cols-12 gap-4 p-4 items-center">
                                <div className="col-span-1 flex justify-center"><div className="w-3 h-3 rounded-full bg-yellow-500"></div></div>
                                <div className="col-span-4 text-sm font-medium">Corp Inc. v. Biz LLC</div>
                                <div className="col-span-3 text-sm">Nov 05, 2024</div>
                                <div className="col-span-4 text-sm text-yellow-700">Moderate delay risk due to multiple pending motions.</div>
                            </div>
                            <div className="grid grid-cols-12 gap-4 p-4 items-center">
                                <div className="col-span-1 flex justify-center"><div className="w-3 h-3 rounded-full bg-green-500"></div></div>
                                <div className="col-span-4 text-sm font-medium">Smith v. Smith</div>
                                <div className="col-span-3 text-sm">Nov 12, 2024</div>
                                <div className="col-span-4 text-sm text-green-700">On track. Standard duration predicted.</div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <Shield className="mx-auto h-12 w-12 text-primary" />
          <h2 className="mt-4 text-3xl font-bold">e-Courts Integration & Privacy</h2>
          <p className="mt-4 text-muted-foreground">
            We understand the sensitivity of legal data. PendencyFlow integrates with e-Courts services using read-only permissions and state-of-the-art encryption. Your data remains secure, confidential, and under your control. Our AI assists, it does not replace human judgment.
          </p>
        </div>
      </section>
    </div>
  );
}
