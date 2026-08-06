import { useEffect, useState } from "react";

const Form = ({ onAddProject, selectedProject, onUpdateProject }) => {
  const [formData, setFormData] = useState({
    title: selectedProject ? selectedProject.title : "",
    description: selectedProject ? selectedProject.description : "",
  });

  useEffect(() => {
    if (selectedProject !== null) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setFormData(selectedProject);
    }
  }, [selectedProject]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // first check if its a selected item

    selectedProject && selectedProject.id
      ? onUpdateProject(formData)
      : onAddProject(formData);

    // return formdata to empty
    setFormData({ title: "", description: "" });
  };

  return (
    <main className="shadow-lg shadow-text-muted/30 backdrop-blur-xl max-w-2xl p-8 rounded-xl font-body bg-bg-form grow lg:w-1/2 grid items-center">
      <form
        onSubmit={handleSubmit}
        action=""
        className="grid items-center gap-6"
      >
        <div className="grid gap-2 border-b-2 border-text-muted">
          <label htmlFor="" className="text-start">
            Title
          </label>
          <input
            name="title"
            value={formData.title}
            type="text"
            className="placeholder:text-text-placeholder focus:border-0 outline-0 w-full "
            onChange={handleChange}
            required
            placeholder="Project Title"
          />
        </div>

        <div className="grid gap-2 border-b-2 border-text-muted">
          <label htmlFor="" className="text-start">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            className="placeholder:text-text-placeholder focus:border-0 outline-0 w-full"
            onChange={handleChange}
            required
            placeholder="Project Decription"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-btn-primary hover:bg-btn-hover hover:scale-99 transform-all duration-200 ease-in-out text-btn-text cursor-pointer text-xl font-bold py-2 w-full"
        >
          {selectedProject && selectedProject.id ? "Edit" : "Add"}
        </button>
      </form>
    </main>
  );
};

export default Form;
