import { Column, Row } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { about, person, work } from "@/app/resources/content";
import { Meta, Schema } from "@/once-ui/modules";
import { Projects } from "@/components/project/Projects";

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: `${baseURL}/og?title=${encodeURIComponent(work.title)}`,
    path: work.path,
  });
}

// export default function Work() {
//   return (
//     <Column maxWidth="m">
//       <Schema
//         as="webPage"
//         baseURL={baseURL}
//         path={work.path}
//         title={work.title}
//         description={work.description}
//         image={`${baseURL}/og?title=${encodeURIComponent(work.title)}`}
//         author={{
//           name: person.name,
//           url: `${baseURL}${about.path}`,
//           image: `${baseURL}${person.avatar}`,
//         }}
//       />
//       <Projects />
//     </Column>
//   );
// }

export default function Work() {
  return (
    <Row gap="l" style={{ 
      display: "flex",
      width: "100%",
      justifyContent:"space-between",
      alignItems:"start"
      }}> {/* Adjust gap and alignment as needed */}
      <Column maxWidth="m" style={{ flex: 1 }}>
        <Schema
          as="webPage"
          baseURL={baseURL}
          path={work.path}
          title={work.title}
          description={work.description}
          image={`${baseURL}/og?title=${encodeURIComponent(work.title)}`}
          author={{
            name: person.name,
            url: `${baseURL}${about.path}`,
            image: `${baseURL}${person.avatar}`,
          }}
        />
        <Projects filterType="odd"/>
      </Column>
      <Column maxWidth="m" style={{ flex: 1 }}>
        <Schema
          as="webPage"
          baseURL={baseURL}
          path={work.path}
          title={work.title}
          description={work.description}
          image={`${baseURL}/og?title=${encodeURIComponent(work.title)}`}
          author={{
            name: person.name,
            url: `${baseURL}${about.path}`,
            image: `${baseURL}${person.avatar}`,
          }}
        />
        <Projects filterType="even"/>
      </Column>
    </Row>
  );
}