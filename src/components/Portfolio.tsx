import { projects } from "@/data/projects";
import { ProjectRoom } from "@/components/ProjectRoom";

export function Portfolio({
  heading,
  placeholderTitle,
  placeholderDescription,
  roleLabel,
  stackLabel,
  yearLabel,
  viewLabel,
}: {
  heading: string;
  placeholderTitle: string;
  placeholderDescription: string;
  roleLabel: string;
  stackLabel: string;
  yearLabel: string;
  viewLabel: string;
}) {
  return (
    <section id="work" aria-label={heading}>
      <h2 className="sr-only">{heading}</h2>
      {projects.map((project, index) => (
        <ProjectRoom
          key={project.slug}
          project={project}
          index={index}
          total={projects.length}
          placeholderTitle={placeholderTitle}
          placeholderDescription={placeholderDescription}
          roleLabel={roleLabel}
          stackLabel={stackLabel}
          yearLabel={yearLabel}
          viewLabel={viewLabel}
        />
      ))}
    </section>
  );
}
