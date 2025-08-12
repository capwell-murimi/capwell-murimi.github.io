import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Briefcase, GraduationCap, Award, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Index = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Capwell Murimi',
    jobTitle: 'Data Scientist',
    url: typeof window !== 'undefined' ? window.location.origin : '',
    sameAs: [
      'https://www.linkedin.com/in/capwell-murimi/',
      'https://github.com/capwell-murimi'
    ]
  };

  return (
    <main>
      <SEO
        title="Capwell Murimi — Data Scientist | Machine Learning"
        description="Turning data into actionable insights, one model at a time. Explore Capwell Murimi's projects, resume, and contact."
        jsonLd={jsonLd}
      />

      <section className="relative min-h-[85vh] flex items-center">
        <div className="mx-auto w-[min(1100px,93%)] grid md:grid-cols-[1.1fr_0.9fr] gap-10 pt-28">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Capwell Murimi
            </h1>
            <p className="mt-3 text-lg text-muted-foreground">
              Data Scientist | Machine Learning Enthusiast
            </p>
            <p className="mt-4 text-base md:text-lg text-muted-foreground">
              "Turning data into actionable insights, one model at a time."
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/resume">
                <Button size="lg">View Resume</Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline">Contact Me</Button>
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4">
              <div className="rounded-xl border p-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground"><Briefcase className="h-4 w-4"/> Experience</div>
                <div className="mt-1 text-2xl font-semibold">1+ yrs</div>
              </div>
              <div className="rounded-xl border p-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground"><Award className="h-4 w-4"/> Certifications</div>
                <div className="mt-1 text-2xl font-semibold">6+</div>
              </div>
              <div className="rounded-xl border p-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground"><TrendingUp className="h-4 w-4"/> Projects</div>
                <div className="mt-1 text-2xl font-semibold">10+</div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex items-center justify-center">
            <div className="relative size-56 md:size-72 rounded-2xl border overflow-hidden shadow-lg">
              <img
                src="../assets/images/capwell.png"
                alt="Professional headshot placeholder of Capwell Murimi"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto w-[min(1100px,93%)]">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-primary"/>
            <h2 className="text-2xl font-semibold">Featured Work</h2>
          </div>
          <p className="mt-2 text-muted-foreground">Explore selected projects showcasing ML, NLP, and analytics.</p>
          <div className="mt-6">
            <Link to="/projects" className="text-primary hover:underline">View all projects →</Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
