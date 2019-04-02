import React, { Component } from 'react';
import Skill from './skill';
import InlineSkill from './InlineSkill';
import './skills.scss';

import "./../../themes/import-red.scss";

export default class Tags extends Component {
    render() {
        
        let skills = this.props.data;
        let type = this.props.type;

        return (
            <div className="skills">
                {type === 'default' &&
                    skills.map((skill, i) => {
                        return <Skill name={skill.name} percentage={skill.percentage} key={"skill-default-" + i} />
                    })
                }

                {type === 'inline' &&
                    skills.map((skill, i) => {
                        return <InlineSkill name={skill.name} percentage={skill.percentage} key={"skill-inline-" + i} />
                    })
                }

                {type === 'graph' &&
                    skills.map((skill, i) => {
                        return <Skill name={skill.name} percentage={skill.percentage} key={"skill-graph-" + i} />
                    })
                }

            </div>
        )
    }
}