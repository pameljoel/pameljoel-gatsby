import Fade from 'react-reveal/Fade'
import GraphSkills from '../skills/GraphSkills'
import Tags from '../tags/Tags'
import React from 'react'
import PropTypes from 'prop-types'
import GraphSkill from '../skills/GraphSkill'
import Tag from '../tags/Tag'

const Section = (props) => {
  const { name, description, skills, tags } = props;
  return (
    <Fade big cascade key={name}>
      <div className="card">
        <h2 className="title">{name}</h2>
        <div className="description">{description}</div>
        <GraphSkills data={skills} color="#E38627" />
        <h3>Other {name} skills:</h3>
        <div className="tags">
          <Tags data={tags} />
        </div>
      </div>
    </Fade>
  )
}

Section.PropTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  skills: PropTypes.arrayOf({
    name: PropTypes.string,
    description: PropTypes.string,
    percentage: PropTypes.string,
    pro: PropTypes.string,
  }),
  tags: PropTypes.arrayOf({
    name: PropTypes.string,
    top: PropTypes.bool,
    new:  PropTypes.bool,
  })
}

export default Section;
