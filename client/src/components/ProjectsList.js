import React, { Component } from 'react';

class ProjectsList extends Component {
    render() {
        return (
            <div>
               {this.props.projects.map(project => {
                   return (
                       <div key={project.id}>
                       <p>{project.name}</p>
                       <p>{project.description}</p>
                       <p>{project.completed}</p>
                       </div>
                   )
               })}
            </div>
        );
    }
}

export default ProjectsList;