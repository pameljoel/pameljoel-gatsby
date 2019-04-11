import React, { Component } from 'react';
import Skill from './skill';
import InlineSkill from './InlineSkill';
import './skills.scss';

import "./../../themes/import-red.scss";

export default class Tags extends Component {
    render() {
        const { data, type } = this.props.data;

        return (
            <div className="skills">
                {type === 'default' &&
                    data.map((skill, i) => {
                        return <Skill name={skill.name} percentage={skill.percentage} key={"skill-default-" + i} />
                    })
                }

                {type === 'inline' &&
                    data.map((skill, i) => {
                        return <InlineSkill name={skill.name} percentage={skill.percentage} key={"skill-inline-" + i} />
                    })
                }

                {type === 'graph' &&
                    data.map((skill, i) => {
                        return <Skill name={skill.name} percentage={skill.percentage} key={"skill-graph-" + i} />
                    })
                }
            </div>
        )
    }
}