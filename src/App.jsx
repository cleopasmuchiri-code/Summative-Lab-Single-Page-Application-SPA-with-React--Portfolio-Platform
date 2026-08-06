import { useState } from "react";
import Form from "./components/Form";
import Projects from "./components/Projects";

const App = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [search, setSearch] = useState("");

  // add code
  const addProject = (formData) => {
    const id = crypto.randomUUID();

    const finalFormData = {
      id,
      ...formData,
    };

    setProjects([...projects, finalFormData]);
    console.log(finalFormData);
  };

  // delete code

  const deleteProject = (deleteProjectId) => {
    // find the project by ID
    const item = projects.find((item) => item.id === deleteProjectId);

    // return remaining project - removes the one with selected ID
    const remainingProjects = projects.filter((project) => project !== item);

    setProjects(remainingProjects);
    console.log(remainingProjects);
  };

  // select edit code
  const selectProject = (selectProjectId) => {
    // find the project by ID
    const item = projects.find((item) => item.id === selectProjectId);

    setSelectedProject({ ...item });
  };

  // update code
  const updateProject = (projectToUpdateWith) => {
    // update projects
    const finalProjects = projects.map((p) => {
      if (p.id === projectToUpdateWith.id) {
        return { ...projectToUpdateWith };
      }
      return p;
    });

    setProjects([...finalProjects]);

    // reset selected project
    setSelectedProject(null);
  };

  // filter projects by search

  // filtered project via search
  const filteredProjects = projects.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <main className="overflow-x-hidden h-screen w-screen p-8  bg-bg-main">
      <div className="font-heading w-full flex flex-col items-center mb-8">
        <h1 className="text-text-primary text-2xl">Cleopa's Project</h1>
        <div className="w-14 h-1.5 rounded-full bg-text-secondary mt-2"></div>
      </div>
      <div className="w-full h-full flex flex-col lg:flex-row  gap-8">
        <Form
          onAddProject={addProject}
          selectedProject={selectedProject}
          onUpdateProject={updateProject}
        />

        <Projects
          onDeleteProject={deleteProject}
          projects={filteredProjects}
          onSelectProject={selectProject}
          setSearch={setSearch}
        />
      </div>
    </main>
  );
};

export default App;
