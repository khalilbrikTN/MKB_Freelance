import Image from "next/image";
import type { Project } from "@/data/projects";

export function ProjectRoom({
  project,
  index,
  total,
  placeholderTitle,
  placeholderDescription,
  roleLabel,
  stackLabel,
  yearLabel,
  viewLabel,
}: {
  project: Project;
  index: number;
  total: number;
  placeholderTitle: string;
  placeholderDescription: string;
  roleLabel: string;
  stackLabel: string;
  yearLabel: string;
  viewLabel: string;
}) {
  const isPlaceholder = !project.title;
  const title = project.title ?? placeholderTitle;
  const description = project.description ?? placeholderDescription;

  return (
    <section
      data-accent-room={project.accent}
      className="relative flex min-h-screen flex-col items-center justify-center gap-10 px-6 py-24 text-wall"
      style={{ backgroundColor: `var(${project.accent})` }}
    >
      {/* Piece number in the exhibition sequence — real information
          (which frame, out of how many), not a decorative section index. */}
      <span className="font-label text-xs uppercase tracking-[0.2em] opacity-80">
        {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </span>

      {project.image && (
        <div className="w-full max-w-4xl rounded-sm bg-wall p-2 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.45)] sm:p-3">
          <Image
            src={project.image.src}
            alt={title}
            width={project.image.width}
            height={project.image.height}
            className="h-auto w-full rounded-[1px]"
            sizes="(min-width: 896px) 56rem, 100vw"
            priority={index === 0}
          />
        </div>
      )}

      <div
        className={
          "flex max-w-3xl flex-col items-center gap-6 text-center" +
          (isPlaceholder
            ? " rounded-2xl border border-dashed border-white/40 px-8 py-14 sm:px-16"
            : "")
        }
      >
        <h3 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight text-balance">
          {title}
        </h3>
        <p className="max-w-xl text-base text-wall/90 sm:text-lg">
          {description}
        </p>

        {(project.role || project.stack || project.year) && (
          <dl className="flex flex-wrap items-center justify-center gap-6 font-label text-xs uppercase tracking-[0.15em] opacity-80">
            {project.role && (
              <div className="flex items-center gap-2">
                <dt>{roleLabel}</dt>
                <dd>{project.role}</dd>
              </div>
            )}
            {project.stack && (
              <div className="flex items-center gap-2">
                <dt>{stackLabel}</dt>
                <dd>{project.stack}</dd>
              </div>
            )}
            {project.year && (
              <div className="flex items-center gap-2">
                <dt>{yearLabel}</dt>
                <dd>{project.year}</dd>
              </div>
            )}
          </dl>
        )}

        {project.href && !isPlaceholder && (
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-2 rounded-full bg-wall px-6 py-3 text-sm font-medium text-ink transition-transform hover:scale-105"
          >
            {viewLabel}
          </a>
        )}
      </div>
    </section>
  );
}
