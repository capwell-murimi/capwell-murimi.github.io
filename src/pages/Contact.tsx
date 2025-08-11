import SEO from "@/components/SEO";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <main className="pt-28 pb-20">
      <SEO title="Contact — Capwell Murimi" description="Contact Capwell Murimi for data science opportunities." />
      <section className="mx-auto w-[min(800px,93%)]">
        <h1 className="text-3xl font-bold">Contact Me</h1>
        <p className="mt-2 text-muted-foreground">Let's connect! Fill out the form or use the links below.</p>

        <form className="mt-8 space-y-4" action="https://formspree.io/f/mvgrkjlz" method="POST" target="_blank" rel="noopener">
          <div>
            <label htmlFor="name" className="text-sm">Name</label>
            <Input id="name" name="name" required placeholder="Your full name" autoComplete="name" />
          </div>
          <div>
            <label htmlFor="email" className="text-sm">Email</label>
            <Input id="email" name="email" type="email" required placeholder="you@example.com" autoComplete="email" />
          </div>
          <div>
            <label htmlFor="message" className="text-sm">Message</label>
            <Textarea id="message" name="message" rows={5} required placeholder="How can I help?" />
          </div>
          <Button type="submit">Send Message</Button>
        </form>

        <div className="mt-8 text-sm">
          Or email me directly at
          {" "}
          <a href="mailto:capwellmurimi@gmail.com" className="text-primary hover:underline" target="_blank" rel="noopener">capwellmurimi@gmail.com</a>
        </div>

        <div className="mt-6 flex items-center gap-4">
          <a href="https://www.linkedin.com/in/capwell-murimi/" target="_blank" rel="noopener" aria-label="LinkedIn" className="text-muted-foreground hover:text-foreground">LinkedIn</a>
          <a href="https://github.com/capwell-murimi" target="_blank" rel="noopener" aria-label="GitHub" className="text-muted-foreground hover:text-foreground">GitHub</a>
          <a href="https://capwell.hashnode.dev/" target="_blank" rel="noopener" aria-label="Hashnode" className="text-muted-foreground hover:text-foreground">Hashnode</a>
        </div>
      </section>
    </main>
  );
};

export default Contact;
