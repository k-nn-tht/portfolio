import { getPosts } from "@/app/utils/utils";
import { Grid } from "@/once-ui/components";
import { ProjectCard } from "@/components";

interface ProjectsProps {
  filterType?: "even" | "odd";
  range?: [number, number?];
  columns?: "1" | "2" | "3";
}

export function Project({ filterType, range, columns = "1" }: ProjectsProps) {
  let allProjects = getPosts(["src", "app", "project", "projects"]);

  const sortedProjects = allProjects.sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  let filteredProjects = sortedProjects;

  if (filterType) {
    filteredProjects = filteredProjects.filter((_, index) =>
      filterType === "even" ? index % 2 === 1 : index % 2 === 0
    );
  }

  const displayedProjects = range
    ? filteredProjects.slice(range[0] - 1, range[1] ?? filteredProjects.length)
    : filteredProjects;
  
  

  return (
    <>
      {displayedProjects.length > 0 && (
        <Grid
          columns={columns} // Dynamically set columns
          mobileColumns="1"
          fillWidth
          marginBottom="40"
          gap="12"
        >
          {displayedProjects.map((post, index) => (
            <ProjectCard
              priority={index < 2}
              key={post.slug}
              href={`/project/${post.slug}`}
              images={post.metadata.images}
              title={post.metadata.title}
              description={post.metadata.summary}
              content={post.content}
              avatars={post.metadata.team?.map((member) => ({ src: member.avatar })) || []}
              link={post.metadata.link || ""}
            />
          ))}
        </Grid>
      )}
    </>
  );
}