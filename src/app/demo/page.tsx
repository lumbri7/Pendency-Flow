'use client';

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { TESTIMONIALS } from '@/lib/constants';
import { Quote, TrendingUp } from 'lucide-react';

const chartData = [
  { month: 'Jan', before: 186, after: 120 },
  { month: 'Feb', before: 205, after: 132 },
  { month: 'Mar', before: 237, after: 155 },
  { month: 'Apr', before: 173, after: 110 },
  { month: 'May', before: 209, after: 140 },
  { month: 'Jun', before: 214, after: 145 },
];

const chartConfig = {
  before: {
    label: 'Before PendencyFlow',
    color: 'hsl(var(--secondary))',
  },
  after: {
    label: 'After PendencyFlow',
    color: 'hsl(var(--primary))',
  },
};

export default function DemoPage() {
  return (
    <div className="bg-background">
      <section className="py-16 md:py-24 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold">Demo & Pilot Results</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Our pilot programs show significant improvements in efficiency and reduction in case backlogs.
          </p>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-4">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp /> Case Delay Reduction (Pilot Data)
              </CardTitle>
              <CardDescription>Average case duration in days before and after implementation.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-primary text-primary-foreground p-8 rounded-lg text-center mb-8">
                <p className="text-2xl md:text-4xl font-bold">30-50% Delay Reduction</p>
                <p className="text-primary-foreground/80">Observed across pilot courts in the first six months.</p>
              </div>
              <div className="h-[400px]">
                <ChartContainer config={chartConfig} className="w-full h-full">
                  <ResponsiveContainer>
                    <BarChart data={chartData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                      <CartesianGrid vertical={false} />
                      <XAxis
                        dataKey="month"
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                        tickFormatter={(value) => value.slice(0, 3)}
                      />
                      <YAxis
                        label={{ value: 'Avg. Duration (Days)', angle: -90, position: 'insideLeft', offset: -10 }}
                       />
                       <Tooltip
                          cursor={false}
                          content={<ChartTooltipContent indicator="dot" />}
                        />
                      <Legend />
                      <Bar dataKey="before" fill="var(--color-before)" radius={4} />
                      <Bar dataKey="after" fill="var(--color-after)" radius={4} />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">What Our Pilot Users Say</h2>
            <p className="mt-4 text-muted-foreground">
              Direct feedback from judges and lawyers who have experienced the benefits of PendencyFlow firsthand.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-1 lg:grid-cols-2">
            {TESTIMONIALS.map((testimonial, index) => (
              <Card key={index} className="bg-background border">
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
    </div>
  );
}
