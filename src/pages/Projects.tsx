import SEO from "@/components/SEO";

const projects = [
  {
    img: "https://images.pexels.com/photos/579474/pexels-photo-579474.jpeg",
    alt: "Breast Cancer Predictor Cover",
    title: "Breast Cancer Predictor Web App",
    problem: "Early detection of breast cancer is critical, but traditional diagnosis can be slow and requires specialized expertise.",
    approach: "Built a machine learning model for breast cancer prediction using scikit-learn. Deployed as an interactive web app with Streamlit for real-time risk assessment based on user input.",
    tools: "Python, scikit-learn, Streamlit, pandas, CSS",
    result: "Provides instant breast cancer risk assessment with a user-friendly interface.",
    links: [
      { href: "https://breastcancerprediction-capwellsapp.streamlit.app/", label: "Live Web App" },
      { href: "https://breastcancerprediction-capwellsapp.streamlit.app/", label: "Try the App" }
    ]
  },
    {
    img: "https://plus.unsplash.com/premium_photo-1664304160128-ca5a08ac46ce?q=80&w=1453&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Database Migration Project Cover",
    title: "One-Time MySQL to PostgreSQL Migration",
    problem: "Migrating legacy MySQL databases to PostgreSQL can be error-prone and complex, especially on Windows systems.",
    approach: "Used pgloader in Docker to automate schema and data migration, handling type conversions and ensuring minimal downtime.",
    tools: "pgloader, Docker, MySQL, PostgreSQL, Windows",
    result: "Achieved seamless migration with a reproducible workflow and documented steps for future migrations.",
    links: [
      { href: "https://capwell.hashnode.dev/one-time-mysql-to-postgresql-migration-with-pgloader-docker-windows-friendly", label: "Read Guide" }
    ]
  },
  {
    img: "https://images.unsplash.com/photo-1617240016072-d92174e44171?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Slack ETL Pipeline Cover",
    title: "Slack ETL Pipeline",
    problem: "Extracting, transforming, and loading Slack data for analytics is challenging due to API limitations and data structure complexity.",
    approach: "Developed an ETL pipeline to fetch Slack data, transform it, and load into PostgreSQL for downstream analysis.",
    tools: "Python, Slack API, PostgreSQL, Docker",
    result: "Enabled automated, reliable Slack data ingestion for reporting and analytics.",
    links: [
      { href: "https://github.com/capwell-murimi/powerDMARCxSLACKxpostgreSQL-ETL", label: "View Code" }
    ]
  },
  {
    img: "https://images.unsplash.com/photo-1585288766827-c62e98d70191?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0",
    alt: "LinkedIn Post Generator Cover",
    title: "LinkedIn Post Generator",
    problem: "Creating high-quality LinkedIn posts is time-consuming and requires creativity, especially for professionals and marketers who need consistent online presence.",
    approach: "Built an AI-powered LinkedIn post generator using Llama3.2 (open-source LLM), Langchain for orchestration, Streamlit for the web UI, and deployed on Groq cloud for fast inference.",
    tools: "Llama3.2, Langchain, Streamlit, Groq Cloud",
    result: "Instantly generates engaging LinkedIn posts based on user prompts, allowing for rapid content creation and idea inspiration.",
    links: [
      { href: "https://linkedin-post-generator-capwell.streamlit.app/", label: "Live Web App" },
      { href: "https://linkedin-post-generator-capwell.streamlit.app/", label: "Try the App" }
    ]
  },
  {
    img: "https://images.unsplash.com/photo-1506788941197-1cbf01bb8bc5?q=80&w=1470&auto=format&fit=crop",
    alt: "BERT Sentence Similarity preview",
    title: "NLP: BERT-Based Sentence Similarity Classifier",
    problem: "Automating the assessment of semantic similarity between sentence pairs for applications in NLP, such as duplicate detection and information retrieval.",
    approach: "Fine-tuned a pre-trained BERT model for binary sentence similarity classification. Steps included data preprocessing, BERT tokenization, model training, and evaluation.",
    tools: "Python, PyTorch, Hugging Face Transformers, Google Colab",
    result: "Achieved robust classification accuracy and meaningful cosine similarity evaluation. The notebook allows prediction of new sentence pairs after training.",
    links: [
      { href: "https://colab.research.google.com/drive/1pcDVBwET-aaP5N4bTJvv6melPOz8Ccwc?usp=sharing", label: "Colab Notebook" },
      { href: "https://colab.research.google.com/drive/1pcDVBwET-aaP5N4bTJvv6melPOz8Ccwc?usp=sharing", label: "View Notebook" }
    ]
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1726079247110-5e593660c7b2?q=80&w=1470&auto=format&fit=crop",
    alt: "RAG PDF Project Cover",
    title: "RAG PDF Query System",
    problem: "Efficient semantic querying of large PDF documents using Retrieval-Augmented Generation (RAG).",
    approach: "The PDF is uploaded and split into chunks, embedded using Sentence Transformers, stored in FAISS, and queried through a LangChain-powered RAG pipeline integrated with a HuggingFace LLM for context-aware responses.",
    tools: "Python, LangChain, FAISS, HuggingFace Transformers, Sentence Transformers",
    result: "Enables powerful semantic search and Q&A over PDF documents directly in a Colab notebook.",
    links: [
      { href: "https://colab.research.google.com/drive/1nkV09VibjssSBBn1z9dwDVhBxOxAf20v?usp=sharing", label: "Colab Notebook" },
      { href: "https://colab.research.google.com/drive/1nkV09VibjssSBBn1z9dwDVhBxOxAf20v?usp=sharing", label: "View Notebook" }
    ]
  },
  {
    img: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1374&auto=format&fit=crop",
    alt: "MLOps Project preview",
    title: "MLOps: KNN Model Deployment",
    problem: "Bridging the gap between model development and scalable, production-ready deployment for machine learning solutions.",
    approach: "Developed a KNN classification model and deployed it as a RESTful API using best practices in MLOps, enabling seamless integration with production systems.",
    tools: "Python, scikit-learn, Flask, Google Colab, Docker, GitHub Actions",
    result: "End-to-end workflow: from model training to API deployment, showcasing automation and reproducibility.",
    links: [
      { href: "https://github.com/capwell-murimi/KNN_model_API.git", label: "View API Code" },
      { href: "https://colab.research.google.com/drive/1VAutBx5ju4_x3qj0ofB7wVvS4kbrI1vI?usp=sharing", label: "View Model Notebook" }
    ]
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1681710503974-e1eb619564a3?q=80&w=880&auto=format&fit=crop",
    alt: "ANN MNIST Project preview",
    title: "Handwritten Digit Recognition with ANN (MNIST)",
    problem: "Recognizing handwritten digits efficiently and accurately using machine learning.",
    approach: "Built an Artificial Neural Network (ANN) using TensorFlow and Keras, following the full ML pipeline.",
    tools: "TensorFlow, Keras, Python, Matplotlib",
    result: "Successfully trained, evaluated, and visualized the ANN model’s predictions.",
    links: [
      { href: "https://colab.research.google.com/drive/1wYFQlLk1SfIiti3QpRaf4g1m5Qz3-1Ei?usp=sharing", label: "View Code" }
    ]
  },
  {
    img: "https://images.unsplash.com/photo-1674476459435-92fa2ab3ac04?q=80&w=880&auto=format&fit=crop",
    alt: "Linear Regression Project preview",
    title: "Linear Regression Analysis",
    problem: "Need to predict numerical values and understand relationships between variables in a dataset.",
    approach: "Applied linear regression modeling to real-world data, visualizing trends and evaluating model performance.",
    tools: "Python, scikit-learn, Pandas, Matplotlib",
    result: "Built an interpretable predictive model and generated visual insights.",
    links: [
      { href: "https://colab.research.google.com/drive/10PQGfLbKVuuhbbq-aHdtEhQtVaof-GM4?usp=sharing", label: "View Code" }
    ]
  },
  {
    img: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=1974&auto=format&fit=crop",
    alt: "Data Scraping Project preview",
    title: "Data Scraping Project",
    problem: "Manual data collection from websites was time-consuming and error-prone.",
    approach: "Built Python scripts using Beautiful Soup and Requests to automate extraction of tabular web data.",
    tools: "Beautiful Soup, Requests, Pandas",
    result: "Reduced data collection time by 80%; datasets were ready for immediate analytics use.",
    links: [
      { href: "https://colab.research.google.com/drive/1O6ZkB5XcXt1ALwwNA4dhEw2FwGZbnoLx?usp=sharing", label: "View Code" }
    ]
  },
  {
    img: "https://images.unsplash.com/photo-1621955964441-c173e01c135b?q=80&w=2086&auto=format&fit=crop",
    alt: "Data Wrangling Project",
    title: "Data Wrangling Project (Netflix Dataset)",
    problem: "Raw Netflix data was inconsistent, messy, and unsuitable for analysis.",
    approach: "Designed data cleaning and transformation pipelines to handle missing values, normalize columns, and validate data integrity.",
    tools: "Python",
    result: "Produced a high-quality dataset ready for exploratory and predictive analytics.",
    links: [
      { href: "https://www.kaggle.com/code/capwellmurimi/data-wrangling-netflix", label: "View Code" }
    ]
  },
  {
    img: "https://images.unsplash.com/photo-1561625116-df74735458a5?q=80&w=2074&auto=format&fit=crop",
    alt: "Titanic EDA Project",
    title: "Exploratory Data Analysis Project (Titanic Dataset)",
    problem: "Lack of actionable insights from historical passenger data limited business strategy formation.",
    approach: "Used Pandas, Matplotlib, and Seaborn to visualize distributions, correlations, and survival factors.",
    tools: "Pandas, Matplotlib, Seaborn",
    result: "Identified key predictors of survival and presented actionable recommendations.",
    links: [
      { href: "https://www.kaggle.com/code/capwellmurimi/titanic-eda", label: "View Code" }
    ]
  },
  {
    img: "/assets/images/dashboard.png",
    alt: "Power BI Hotel Dashboard",
    title: "Power BI Hotel Dashboard",
    problem: "Hotel managers needed real-time visibility into key business metrics but were bogged down by static reports.",
    approach: "Designed and implemented an interactive Power BI dashboard to visualize occupancy, revenue, and guest trends.",
    tools: "Power BI",
    result: "Enabled data-driven decisions and increased operational efficiency for hotel management.",
    links: [
      { href: "https://drive.google.com/drive/folders/1QJVILO4gPyY9POEoFYBTBFj_tmWnvzRx", label: "View Code" }
    ]
  },
  {
    img: "/assets/images/HR.png",
    alt: "Tableau HR Dashboard",
    title: "Tableau HR Dashboard",
    problem: "HR teams struggled to visualize and track employee metrics, leading to inefficient decision-making.",
    approach: "Developed an interactive Tableau dashboard displaying employee demographics, turnover rates, and key HR KPIs.",
    tools: "Tableau",
    result: "Empowered HR departments with real-time analytics and improved workforce planning.",
    links: [
      { href: "https://public.tableau.com/views/HRDashboard_17500918044660/HRSummary?:language=en-US&publish=yes&:sid=1FD192C878D84B8EB2FF575B28ED0DA2-0:0&:redirect=auth&:display_count=n&:origin=viz_share_link", label: "View Dashboard" }
    ]
  },
  {
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1974&auto=format&fit=crop",
    alt: "Kai and Karo Scraper Project",
    title: "Kai & Karo Vehicle Scraper",
    problem: "Vehicle data on the Kai and Karo website was not easily accessible in bulk for analysis.",
    approach: "Automated web scraping to extract vehicle listings across multiple pages.",
    tools: "Python, Beautiful Soup, Requests, Pandas",
    result: "Collected a complete dataset for analysis and market research.",
    links: [
      { href: "https://colab.research.google.com/drive/1Q56xu_3H9Kcf8lYfCl7lnPK9nLeYA3uY?usp=sharing", label: "View Code" }
    ]
  },
  {
    img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=465&auto=format&fit=crop",
    alt: "Classification Models Project",
    title: "Classification Models",
    problem: "Needed to accurately categorize data points into distinct classes for predictive analysis.",
    approach: "Developed and compared multiple classification algorithms to determine the most effective model.",
    tools: "Python, scikit-learn, Pandas, Matplotlib",
    result: "Achieved high accuracy in classifying data and provided interpretable results.",
    links: [
      { href: "https://colab.research.google.com/drive/18mNog6qU3IxcGB3kyS6U-L1BU5Ps5y_C?usp=sharing", label: "View Code" }
    ]
  },
];

const Label = ({ children, color }: { children: React.ReactNode; color: string }) => (
  <span className={`inline-block rounded px-2 py-0.5 text-xs ${color} mr-2`}>{children}</span>
);

const Projects = () => {
  return (
    <main className="pt-28 pb-20">
      <SEO title="Projects — Capwell Murimi" description="Projects in ML, NLP, analytics, dashboards, and MLOps." />
      <section className="mx-auto w-[min(1200px,93%)]">
        <h1 className="text-3xl font-bold">Projects</h1>
        <p className="mt-2 text-muted-foreground">A selection of end-to-end projects with clear problem, approach, tools, and results.</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group overflow-hidden rounded-xl border bg-card hover:shadow-lg transition">
              <img src={p.img} alt={p.alt} loading="lazy" className="h-44 w-full object-cover" />
              <div className="p-4">
                <h2 className="project-title text-lg font-semibold group-hover:text-primary transition">{p.title}</h2>
                <div className="mt-3 space-y-2 text-sm">
                  <div><Label color="bg-secondary text-secondary-foreground">Problem</Label>{p.problem}</div>
                  <div><Label color="bg-accent text-accent-foreground">Approach</Label>{p.approach}</div>
                  <div><Label color="bg-muted text-foreground">Tools</Label>{p.tools}</div>
                  <div>
                    <Label color="bg-primary text-primary-foreground">Result</Label>
                    {p.result}
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.links.map((l) => (
                    <a key={l.href} href={l.href} target="_blank" rel="noopener" className="text-sm text-primary hover:underline">
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Projects;
