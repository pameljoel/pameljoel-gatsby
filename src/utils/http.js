export const getJson = (url) => {
  return window.fetch(url)
    .then(data => data.json())
}

export const setSelectedProject = (number) => {
  return { selectedProject: number };
}
