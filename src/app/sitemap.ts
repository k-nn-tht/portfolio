import { getPosts } from "@/app/utils/utils";
import { baseURL, routes as routesConfig } from "@/app/resources";

export default async function sitemap() {
  const blogs = getPosts(["src", "app", "blog", "posts"]).map((post) => ({
    url: `${baseURL}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  const works = getPosts(["src", "app", "work", "projects"]).map((post) => ({
    url: `${baseURL}/work/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  const projects = getPosts(["src", "app", "project", "projects"]).map((post) => ({
    url: `${baseURL}/project/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  // Debugging in sitemap.ts
  console.log(getPosts(["src", "app", "project", "projects"]));

  const activeRoutes = Object.keys(routesConfig).filter((route) => routesConfig[route as keyof typeof routesConfig]);
  console.log("Active Routes:", activeRoutes);
  console.log(baseURL);
  const routes = activeRoutes.map((route) => ({
    url: `${baseURL}${route !== "/" ? route : ""}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs, ...works, ...projects];
}
