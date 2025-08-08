import React from 'react'
import Project from './Project'

import projects from '@/app/data/projects'

const Projects = () => {
  return (
    <section id='projects' className='flex flex-col gap-9 px-8 py-16'>
      <header className='flex flex-col gap-4 text-center'>
        <h2 className='font-bold text-4xl color-laranja'>Projetos em Destaque</h2>
        <p className='text-lg color-cinza'>Alguns dos meus trabalhos mais recentes e desafiadores</p>
      </header>
      <div className="projects-grid flex gap-6">
        {projects.map((project) => (
          <Project key={project.title} data={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
