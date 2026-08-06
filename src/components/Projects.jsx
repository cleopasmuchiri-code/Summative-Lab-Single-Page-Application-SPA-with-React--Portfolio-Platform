import { Trash, SquarePen } from "lucide-react";

const Projects = ({ projects, onDeleteProject, onSelectProject }) => {
  if (projects.length <= 0) {
    return (
      <main className="shadow-lg shadow-text-muted/30 backdrop-blur-xl font-body text-text-muted flex gap-8 justify-center items-center bg-bg-card max-w-2xl p-8 rounded-xl grow lg:w-1/2">
        No projects Added
      </main>
    );
  }

  return (
    <main className="overflow-y-auto grid gap-6 max-w-2xl font-body grow lg:w-1/2">
      {projects.map((project) => (
        <article
          key={project.id}
          className="flex flex-col sm:flex-row justify-between gap-6 p-6 bg-bg-card border border-border-outer rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
        >
          {/* Left / Top Side: Title & Description Info */}
          <div className="text-left flex-1 min-w-0 space-y-2">
            <h2 className="font-heading text-xl font-bold tracking-wide text-text-primary">
              {project.title}
            </h2>
            <p className="font-body text-sm leading-relaxed text-text-secondary pr-2 wrap-break-word">
              {project.description}
            </p>
          </div>

          {/* Right / Bottom Side: Action Control Buttons */}
          <div className="flex sm:flex-col justify-end items-end gap-2 border-t sm:border-t-0 border-border-outer pt-4 sm:pt-0">
            <div className="flex gap-2">
              {/* Edit Button */}
              <button
                onClick={() => onSelectProject(project.id)}
                aria-label="Edit project"
                className="bg-action-edit hover:brightness-90 transition-all cursor-pointer w-9 h-9 grid place-items-center rounded-lg text-btn-text shadow-sm"
              >
                <SquarePen size={16} strokeWidth={2} />
              </button>

              {/* Delete Button */}
              <button
                onClick={() => onDeleteProject(project.id)}
                aria-label="Delete project"
                className="bg-action-delete-bg hover:brightness-95 transition-all cursor-pointer w-9 h-9 grid place-items-center rounded-lg text-action-delete-text shadow-sm"
              >
                <Trash size={16} strokeWidth={2} />
              </button>
            </div>
          </div>
        </article>
      ))}
    </main>
  );
};

export default Projects;
