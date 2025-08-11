const FloatingHireMe = () => {
  return (
    <a
      href="mailto:capwellmurimi@gmail.com?subject=Opportunity%20for%20Data%20Scientist"
      target="_blank"
      rel="noopener"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full border bg-background px-5 py-3 text-sm shadow-lg ring-1 ring-primary/30 hover:shadow-xl hover:ring-primary/50 transition"
      aria-label="Hire Capwell"
    >
      Hire Me
      <span aria-hidden>→</span>
    </a>
  );
};

export default FloatingHireMe;
