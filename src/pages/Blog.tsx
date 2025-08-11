import SEO from "@/components/SEO";
import { useEffect, useState } from "react";

interface Post {
  title: string;
  brief: string;
  slug: string;
  publishedAt: string;
  coverImage?: { url?: string } | null;
}

const HASHNODE_USERNAME = "capwell";

const Blog = () => {
  const [posts, setPosts] = useState<Post[] | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      const query = `\n        query {\n          publication(host: \"${HASHNODE_USERNAME}.hashnode.dev\") {\n            posts(first: 12) {\n              edges {\n                node {\n                  title\n                  brief\n                  slug\n                  publishedAt\n                  coverImage { url }\n                }\n              }\n            }\n          }\n        }\n      `;
      const res = await fetch("https://gql.hashnode.com/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query })
      });
      const data = await res.json();
      const edges = data?.data?.publication?.posts?.edges || [];
      setPosts(edges.map((e: any) => e.node));
    }
    fetchPosts().catch(() => setPosts([]));
  }, []);

  return (
    <main className="pt-28 pb-20">
      <SEO title="Write-ups — Capwell Murimi" description="Latest Hashnode blogs by Capwell Murimi." />
      <section className="mx-auto w-[min(1100px,93%)]">
        <h1 className="text-3xl font-bold">My Hashnode Write ups</h1>
        {!posts && <p className="mt-6 text-muted-foreground">Loading latest posts…</p>}
        {posts && posts.length === 0 && <p className="mt-6">No blog posts found.</p>}
        {posts && posts.length > 0 && (
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article key={post.slug} className="overflow-hidden rounded-xl border bg-card hover:shadow-lg transition">
                {post.coverImage?.url && (
                  <img src={post.coverImage.url} alt={`${post.title} cover`} loading="lazy" className="h-40 w-full object-cover" />
                )}
                <div className="p-4">
                  <a
                    href={`https://${HASHNODE_USERNAME}.hashnode.dev/${post.slug}`}
                    target="_blank"
                    rel="noopener"
                    className="text-lg font-semibold hover:underline"
                  >
                    {post.title}
                  </a>
                  <div className="mt-1 text-xs text-muted-foreground">{new Date(post.publishedAt).toLocaleDateString()}</div>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-4">{post.brief}</p>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
};

export default Blog;
