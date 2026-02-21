import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { PRICING_TIERS } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { Check, Star } from 'lucide-react';
import Link from 'next/link';

export default function PricingPage() {
  return (
    <div className="bg-background">
      <section className="py-16 md:py-24 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold">Flexible Pricing for Every Need</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Choose the plan that's right for your court, firm, or organization.
          </p>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {PRICING_TIERS.map((tier) => (
              <Card
                key={tier.name}
                className={cn(
                  'flex flex-col h-full shadow-lg',
                  tier.isFeatured && 'border-primary ring-2 ring-primary scale-105 bg-secondary'
                )}
              >
                {tier.isFeatured && (
                  <div className="bg-primary text-primary-foreground text-sm font-bold py-1 text-center rounded-t-lg flex items-center justify-center gap-2">
                    <Star className="w-4 h-4" /> Most Popular
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  <CardDescription>{tier.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="text-center mb-6">
                    <span className="text-4xl font-bold">{tier.price}</span>
                    {tier.period && <span className="text-muted-foreground">/{tier.period}</span>}
                  </div>
                  <ul className="space-y-4">
                    {tier.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full" variant={tier.isFeatured ? 'default' : 'outline'}>
                    <Link href="/contact">{tier.cta}</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
