'use client';

import { Button } from '@/components/ui/button';
import { Heart, Target, Sparkles, Users, ArrowRight, Check, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden bg-gradient-to-br from-secondary/30 via-background to-background">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]"></div>
        <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm text-primary">
                <Heart className="w-4 h-4 mr-2" />
                Life Coaching for Women
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
                Empower Your Journey.
                <span className="text-primary block">Thrive in Life.</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Personalized life coaching to help you create meaningful plans, 
                navigate challenges, and heal from past experiences. 
                Transform your life with guidance, support, and empowerment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8" asChild>
                  <Link href="#contact">
                    Start Your Journey
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                  <Link href="#services">Explore Services</Link>
                </Button>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full border-2 border-background bg-primary/20"></div>
                  <div className="w-10 h-10 rounded-full border-2 border-background bg-accent/20"></div>
                  <div className="w-10 h-10 rounded-full border-2 border-background bg-primary/30"></div>
                </div>
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">500+</span> women empowered
                </p>
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/generated/hero-coaching-main.png"
                  alt="Professional life coach in welcoming environment"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-card">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              How I Can Support You
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive coaching services tailored to your unique journey and goals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-background rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-border">
              <div className="relative w-full h-48">
                <Image
                  src="/generated/service-planning.png"
                  alt="Goal planning and strategy"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">Goal Planning & Strategy</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Create clear, actionable plans for your personal and professional goals. 
                We'll break down big dreams into achievable steps.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Personalized goal mapping</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Action plan development</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Progress tracking & accountability</span>
                </li>
              </ul>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-background rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-border">
              <div className="relative w-full h-48">
                <Image
                  src="/generated/service-healing.png"
                  alt="Healing and personal growth"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
                  <Heart className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">Healing & Growth</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Work through past experiences and emotional challenges in a safe, 
                supportive environment designed for healing and growth.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Trauma-informed support</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Emotional resilience building</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Self-compassion practices</span>
                </li>
              </ul>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-background rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-border">
              <div className="relative w-full h-48">
                <Image
                  src="/generated/service-transitions.png"
                  alt="Life transitions and new beginnings"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <Sparkles className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">Life Transitions</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Navigate major life changes with confidence and clarity. 
                Whether career shifts, relationships, or personal evolution.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Career transition support</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Relationship guidance</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Identity exploration</span>
                </li>
              </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/generated/about-coach-portrait.png"
                  alt="Professional life coach portrait"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-heading font-bold">
                Your Partner in Personal Growth
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a certified life coach specializing in women's empowerment, 
                trauma recovery, and personal development. With over 10 years of 
                experience, I've helped hundreds of women transform their lives.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My approach combines evidence-based coaching techniques with 
                deep empathy and understanding. Every session is tailored to your 
                unique needs, goals, and journey.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div>
                  <div className="text-3xl font-heading font-bold text-primary mb-1">500+</div>
                  <div className="text-sm text-muted-foreground">Women Empowered</div>
                </div>
                <div>
                  <div className="text-3xl font-heading font-bold text-primary mb-1">10+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-heading font-bold text-primary mb-1">98%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-heading font-bold text-primary mb-1">24/7</div>
                  <div className="text-sm text-muted-foreground">Support Access</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section-padding bg-card">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Stories of Transformation
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real experiences from women who've transformed their lives through coaching
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-background rounded-xl p-8 shadow-md border border-border">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Heart key={i} className="w-4 h-4 text-accent fill-accent" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "Working with this coach changed my life. I went from feeling stuck 
                and uncertain to having clear goals and the confidence to achieve them. 
                The support has been incredible."
              </p>
              <div className="flex items-center">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src="/generated/testimonial-sarah.png"
                    alt="Sarah M."
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold">Sarah M.</div>
                  <div className="text-sm text-muted-foreground">Marketing Executive</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-background rounded-xl p-8 shadow-md border border-border">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Heart key={i} className="w-4 h-4 text-accent fill-accent" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "I finally feel like I'm living authentically. The healing work we did 
                together helped me process past trauma and build a future I'm excited about. 
                Truly life-changing."
              </p>
              <div className="flex items-center">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src="/generated/testimonial-jessica.png"
                    alt="Jessica T."
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold">Jessica T.</div>
                  <div className="text-sm text-muted-foreground">Entrepreneur</div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-background rounded-xl p-8 shadow-md border border-border">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Heart key={i} className="w-4 h-4 text-accent fill-accent" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "The personalized approach and genuine care made all the difference. 
                I've achieved goals I never thought possible and developed tools I'll 
                use for the rest of my life."
              </p>
              <div className="flex items-center">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src="/generated/testimonial-emily.png"
                    alt="Emily R."
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold">Emily R.</div>
                  <div className="text-sm text-muted-foreground">Teacher</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="section-padding bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-xl border border-border text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Ready to Start Your Transformation?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Take the first step towards a more empowered, fulfilling life. 
              Schedule a free consultation to discuss your goals and see how coaching can help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                Schedule Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                Learn More
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              No credit card required • 30-minute consultation • Completely confidential
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
