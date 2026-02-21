import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Users, Scale, Bot } from 'lucide-react';
import { Card } from '@/components/ui/card';

const missionImage = PlaceHolderImages.find((img) => img.id === 'about-mission');
const teamImage = PlaceHolderImages.find((img) => img.id === 'about-team');

export default function AboutPage() {
  return (
    <div className="bg-background">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">About PendencyFlow</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We are a team of legal experts, data scientists, and engineers dedicated to modernizing the justice system.
          </p>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-4">
          <Card className="overflow-hidden shadow-xl">
            <div className="grid md:grid-cols-2 items-center">
              <div className="p-8 md:p-12">
                <h2 className="text-3xl font-bold text-primary mb-4 flex items-center gap-2">
                  <Scale /> Our Mission
                </h2>
                <blockquote className="text-2xl font-semibold italic text-foreground border-l-4 border-primary pl-4">
                  "Justice Delayed is Justice Denied"
                </blockquote>
                <p className="mt-6 text-muted-foreground">
                  This age-old maxim is the core of our "why". We believe that technology, specifically artificial intelligence, holds the key to unlocking unprecedented efficiency in our legal systems. Our mission is to eliminate avoidable delays, reduce case backlogs, and ensure that justice is delivered swiftly and fairly to all. We are committed to building tools that empower legal professionals to focus on what truly matters: the practice of law and the administration of justice.
                </p>
              </div>
              <div className="relative h-64 md:h-full w-full">
                {missionImage && (
                  <Image
                    src={missionImage.imageUrl}
                    alt={missionImage.description}
                    data-ai-hint={missionImage.imageHint}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
            </div>
          </Card>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold">Who We Serve</h2>
                <p className="mt-4 text-muted-foreground">
                Our platform is meticulously designed for the key stakeholders within the judicial ecosystem.
                </p>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="flex flex-col items-center">
                    <Users className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold">Judges & Court Staff</h3>
                    <p className="mt-2 text-muted-foreground">Optimize dockets, manage workloads, and gain a clear overview of court performance.</p>
                </div>
                <div className="flex flex-col items-center">
                    <Users className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold">Lawyers & Law Firms</h3>
                    <p className="mt-2 text-muted-foreground">Gain predictability in case timelines, manage client expectations, and streamline firm operations.</p>
                </div>
                <div className="flex flex-col items-center">
                    <Users className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold">Government Bodies</h3>
                    <p className="mt-2 text-muted-foreground">Utilize macro-level data for policy-making, resource allocation, and systemic improvements.</p>
                </div>
            </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative h-80 md:h-[450px] w-full rounded-lg overflow-hidden shadow-lg">
                    {teamImage && (
                        <Image
                            src={teamImage.imageUrl}
                            alt={teamImage.description}
                            data-ai-hint={teamImage.imageHint}
                            fill
                            className="object-cover"
                        />
                    )}
                </div>
                <div>
                    <h2 className="text-3xl font-bold text-primary mb-4 flex items-center gap-2"><Bot /> The Role of AI</h2>
                    <h3 className="text-xl font-semibold">Assisting, Not Replacing Humans</h3>
                    <p className="mt-4 text-muted-foreground">
                        We firmly believe that the nuances of law and justice require human intellect, empathy, and judgment. Our AI is not designed to make judicial decisions. Instead, it serves as a powerful assistant, handling the data-heavy, repetitive tasks that consume valuable time.
                    </p>
                    <p className="mt-4 text-muted-foreground">
                        By automating scheduling, identifying patterns, and making predictions based on historical data, PendencyFlow frees up legal professionals to apply their expertise where it is most needed, ensuring that technology serves justice, not the other way around.
                    </p>
                </div>
            </div>
        </div>
      </section>

    </div>
  );
}
