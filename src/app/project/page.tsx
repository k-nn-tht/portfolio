import { Column, Row } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { about, person, project } from "@/app/resources/content";
import { Meta, Schema } from "@/once-ui/modules";
import { Project } from "@/components/project/Project";

export async function generateMetadata() {
  return Meta.generate({
    title: project.title,
    description: project.description,
    baseURL: baseURL,
    image: `${baseURL}/og?title=${encodeURIComponent(project.title)}`,
    path: project.path,
  });
}

export default function AllProject() {
  return (
    <Row gap="l" style={{ 
      display: "flex",
      width: "100%",
      justifyContent:"space-between",
      alignItems:"start"
      }}>
      <Column maxWidth="m" style={{ flex: 1 }}>
        <Schema
          as="webPage"
          baseURL={baseURL}
          path={project.path}
          title={project.title}
          description={project.description}
          image={`${baseURL}/og?title=${encodeURIComponent(project.title)}`}
          author={{
            name: person.name,
            url: `${baseURL}${about.path}`,
            image: `${baseURL}${person.avatar}`,
          }}
        />
        <Project filterType="odd"/>
      </Column>
      <Column maxWidth="m" style={{ flex: 1 }}>
        <Schema
          as="webPage"
          baseURL={baseURL}
          path={project.path}
          title={project.title}
          description={project.description}
          image={`${baseURL}/og?title=${encodeURIComponent(project.title)}`}
          author={{
            name: person.name,
            url: `${baseURL}${about.path}`,
            image: `${baseURL}${person.avatar}`,
          }}
        />
        <Project filterType="even"/>
      </Column>
    </Row>
  );
}