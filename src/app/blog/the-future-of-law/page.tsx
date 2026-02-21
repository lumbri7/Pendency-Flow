import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { BLOG_POSTS } from '@/lib/constants';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const post = BLOG_POSTS.find(p => p.slug === 'the-future-of-law');
const postImage = PlaceHolderImages.find(img => img.id === post?.image_id);

export default function BlogPostPage() {
    if (!post || !postImage) {
        return <div>Post not found.</div>
    }

    return (
        <article className="bg-background">
            <section className="py-12 md:py-16">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="mb-8">
                         <Button asChild variant="ghost">
                            <Link href="/blog" className="text-muted-foreground"><ArrowLeft className="mr-2 h-4 w-4"/> Back to Blog</Link>
                         </Button>
                    </div>

                    <header className="mb-8">
                        <h1 className="text-3xl md:text-5xl font-extrabold mb-4">{post.title}</h1>
                        <p className="text-muted-foreground">Published on <time dateTime="2024-05-20">May 20, 2024</time></p>
                    </header>
                    
                    <div className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden mb-8 shadow-lg">
                        <Image
                            src={postImage.imageUrl}
                            alt={post.title}
                            data-ai-hint={postImage.imageHint}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    <div className="prose prose-lg dark:prose-invert max-w-none mx-auto text-foreground">
                        <p className="lead">{post.excerpt}</p>
                        
                        <p>The legal profession, traditionally one of the most resistant to technological change, is on the cusp of a revolution. Artificial Intelligence (AI) is no longer a futuristic concept but a present-day reality, actively reshaping how legal professionals work. From automating mundane tasks to providing deep analytical insights, AI is setting a new standard for efficiency and efficacy in the legal landscape.</p>
                        
                        <h2>Automating Legal Research</h2>
                        <p>One of the most time-consuming aspects of legal work is research. AI-powered platforms can now sift through millions of documents, case laws, and statutes in seconds, identifying relevant precedents and information that would take a human paralegal or lawyer hours, if not days, to find. This not only accelerates the research process but also improves its accuracy, ensuring that legal arguments are built on the most comprehensive and relevant information available.</p>
                        
                        <h2>Enhancing Case Management</h2>
                        <p>This is where tools like PendencyFlow come into play. AI is transforming case management by introducing predictive analytics. By analyzing historical data from thousands of similar cases, AI can predict the likely duration of a new case, identify potential bottlenecks, and suggest optimal scheduling. This allows courts and law firms to manage their dockets and resources with an unprecedented level of foresight, reducing delays and improving client outcomes.</p>

                        <h2>The Ethical Considerations</h2>
                        <p>As with any powerful technology, the integration of AI into law comes with ethical considerations. Questions of bias in algorithms, data privacy, and the role of human oversight are paramount. The goal is not to replace human judges or lawyers but to augment their capabilities. A responsible approach to legal AI, one that prioritizes transparency, fairness, and human-in-the-loop systems, is crucial for building trust and ensuring that technology serves the ultimate goal of justice.</p>
                        
                        <p>The future of law is not about robots in robes; it's about empowering legal professionals with smarter tools. By embracing AI, the legal sector can become more efficient, accessible, and ultimately, more just.</p>
                    </div>
                </div>
            </section>
        </article>
    );
}
