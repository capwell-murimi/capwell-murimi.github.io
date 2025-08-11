import SEO from "@/components/SEO";
import { BadgeCheck, Briefcase, GraduationCap, Languages, Mail, Sparkles } from "lucide-react";

const Resume = () => {
  return (
    <main className="pt-28 pb-20">
      <SEO
        title="Resume — Capwell Murimi"
        description="Resume of Capwell Murimi: experience, education, certifications, skills, and languages."
      />
      <section className="mx-auto w-[min(1100px,93%)]">
        <h1 className="text-3xl font-bold">Capwell Murimi — Resume</h1>
        <p className="mt-2 text-muted-foreground max-w-2xl">Detail-oriented IT professional with 1 year of practical experience and demonstrated data science capabilities through personal projects. Combines hands-on technical skills with strong analytical and communication abilities. Skilled in email security, data science, and empowering communities through technology.</p>

        <div className="mt-10 grid md:grid-cols-2 gap-10">
          <article>
            <div className="flex items-center gap-2 mb-4"><Briefcase className="h-5 w-5 text-primary"/><h2 className="text-2xl font-semibold">Work History</h2></div>
            <ol className="relative border-l pl-6 space-y-8">
              <li>
                <div className="absolute -left-[9px] mt-1.5 h-4 w-4 rounded-full bg-primary" />
                <h3 className="font-semibold">IT INTERN</h3>
                <div className="text-sm text-muted-foreground">Usercare Limited – Nairobi, WestLands • May 2024 – Aug 2024</div>
                <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground space-y-1">
                  <li>Managed email security: DMARC, SPF, DKIM, BIMI, MTA-STS, TLS-RPT.</li>
                  <li>Analyzed email traffic for threats, visualized metrics for reporting.</li>
                  <li>Studied Huawei Data Storage Solutions; achieved HCSA Presales Storage Certification.</li>
                </ul>
              </li>
              <li>
                <div className="absolute -left-[9px] mt-1.5 h-4 w-4 rounded-full bg-primary" />
                <h3 className="font-semibold">GDSC CO–LEAD VOLUNTEER</h3>
                <div className="text-sm text-muted-foreground">Co-operative University – Nairobi, Karen • Jun 2023 – Aug 2024</div>
                <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground space-y-1">
                  <li>Organized tech-focused events: Data Science, web & mobile development.</li>
                  <li>Grew community through data-driven workshops and feedback analysis.</li>
                  <li>Earned a professional badge for project execution and community growth.</li>
                </ul>
              </li>
            </ol>
          </article>

          <aside className="space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-3"><BadgeCheck className="h-5 w-5 text-primary"/><h2 className="text-xl font-semibold">Certifications</h2></div>
              <ul className="text-sm space-y-1">
                <li>React Andela Learning React Program (Oct 2023) [See Credential]</li>
                <li>Azure AI Responsible AI Workshop (Mar 2024) [See Credential]</li>
                <li>Global AI Bootcamp Nairobi Attendee (2025) [See Credential]</li>
                <li>Huawei HCSA Presales Storage Certification (Aug 2024)</li>
                <li>Huawei HCSA Sales Storage Certification (Oct 2024)</li>
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3"><GraduationCap className="h-5 w-5 text-primary"/><h2 className="text-xl font-semibold">Education</h2></div>
              <ul className="text-sm space-y-1">
                <li>CYBER SHUJAA — Data Science and AI (May 2025 - Recent)</li>
                <li>The Cooperative University of Kenya — Bachelor of Business Information Technology (Oct 2021 - May 2025)</li>
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3"><Sparkles className="h-5 w-5 text-primary"/><h2 className="text-xl font-semibold">Technical Skills</h2></div>
              <div className="space-y-3">
                {[
                  { label: 'Python & SQL', level: 80 },
                  { label: 'Power BI', level: 75 },
                  { label: 'Machine Learning & AI', level: 70 },
                  { label: 'TensorFlow / PyTorch', level: 60 },
                  { label: 'Statistical Modeling / scikit-learn', level: 75 },
                  { label: 'Git', level: 70 },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="flex justify-between text-sm"><span>{s.label}</span><span className="text-muted-foreground">{s.level}%</span></div>
                    <div className="mt-1 h-2 rounded bg-muted">
                      <div className="h-full rounded bg-primary/80" style={{ width: s.level + '%' }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3"><Languages className="h-5 w-5 text-primary"/><h2 className="text-xl font-semibold">Languages</h2></div>
              <ul className="text-sm space-y-1">
                <li>English</li>
                <li>Kiswahili</li>
                <li>German</li>
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3"><Mail className="h-5 w-5 text-primary"/><h2 className="text-xl font-semibold">Referees</h2></div>
              <p className="text-sm text-muted-foreground">Available upon request</p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default Resume;
