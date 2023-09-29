import { getProjects } from "../../sanity/sanity-utils"

export default async function Home() {
  const projects = await getProjects();

  return (
    <div className="max-w-5xl mx-auto py-20">
      <h1 className="text-7xl font-extrabold">Hello I&apos;m <span className="bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 bg-clip-text text-transparent">Zohaib</span>!</h1>

      {projects.map((project) => (
        <div key={project._id}>
          {project.name}
        </div>
      ))}
    </div>
  );
}
