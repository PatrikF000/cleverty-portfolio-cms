'use client'
import { Project } from '@/payload-types'
import { FC, useEffect, useState } from 'react'
import { Select, ReactSelectOption } from '@payloadcms/ui'
import Cookies from 'js-cookie'
import { User } from 'payload'
import Link from 'next/link'
import './projectSwitcher.scss'

export interface IProjectSelector {
  className?: string
  user?: User
}

const ProjectSelector: FC<IProjectSelector> = () => {
  const [projects, setProjects] = useState<Project[]>([])
  const [selectedProject, setSelectedProject] = useState<string | null>(null)
  const [options, setOptions] = useState<ReactSelectOption[] | []>([])

  useEffect(() => {
    const storedProject = Cookies.get('activeProject')
    if (storedProject) {
      setSelectedProject(storedProject)
    }
    const handleProject = async () => {
      const response = await fetch('/api/projects', {
        method: 'GET',
      })
      if (!response) {
        return false
      }
      const data = await response.json()
      setProjects(data?.docs)
      /*fetch('/api/projects') // přizpůsob podle svých endpointů
                    .then(res => res.json())
                    .then(data => setProjects(data.docs))*/
    }
    handleProject()
  }, [])

  useEffect(() => {
    const handleOptions = () => {
      const optionsForSelect: ReactSelectOption[] = projects?.map((item) => {
        return {
          id: item.id.toString(),
          value: item.name,
          label: item.name,
        }
      })
      return optionsForSelect
    }
    setOptions(handleOptions)
  }, [projects])

  const handleChange = (value: ReactSelectOption | ReactSelectOption[]) => {
    if (!value || Array.isArray(value)) {
      //localStorage.setItem('activeProject', '')
      //localStorage.setItem('activeProjectName', '')
      Cookies.set('activeProject', '')
      Cookies.set('activeProjectName', '')
      setSelectedProject('')
      location.reload()
      return
    }
    const projectId = value.id?.toString()
    const projectName = value?.value?.toString() || ''
    if (!projectId) {
      return
    }

    //localStorage.setItem('activeProject', projectId)
    //localStorage.setItem('activeProjectName', projectName)
    Cookies.set('activeProject', projectId)
    Cookies.set('activeProjectName', projectName)
    setSelectedProject(projectId)
    location.reload() // reload pro aplikaci filtru*/
  }
  return (
    <div className="projectSwitcher">
      <div className="projectSwitcher__flexheadline">
        <h3>Vyberte projekt:</h3>
        <div>
          <Link href="/admin/collections/projects" className="dashboard__allProjects button">
            Všechny projekty
          </Link>
        </div>
      </div>
      {options && (
        <Select
          value={options.filter((item) => item.id === selectedProject)}
          options={options}
          onChange={handleChange}
          className="projectSwitcher__select"
        />
      )}
    </div>
  )
}

export default ProjectSelector
