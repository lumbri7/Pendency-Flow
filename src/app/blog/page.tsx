import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { BLOG_POSTS } from '@/lib/constants';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function BlogPage() {
  return (
    <div className="bg-background">
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">The PendencyFlow Blog</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Insights on legal technology, judicial efficiency, and the future of law.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => {
              const postImage = PlaceHolderImages.find((img) => img.id === post.image_id);
              return (
                <Card key={post.slug} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  {postImage && (
                    <div className="relative h-48 w-full">
                      <Image
                        src={postImage.imageUrl}
                        alt={post.title}
                        data-ai-hint={postImage.imageHint}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle>{post.title}</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground pt-2">
                       <time dateTime="2024-05-20">May 20, 2024</time> &middot; 5 min read
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{post.excerpt}</p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="secondary" className="w-full">
                      <Link href={`/blog/${post.slug}`}>Read More</Link>
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
