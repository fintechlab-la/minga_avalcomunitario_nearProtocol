import { Context } from "near-sdk-as";
import { projects, ProjectsForAval, Status } from "./models";

export function hello(): string {
    let user = Context.sender
    return "hello " + user;
}

export function createProject(
  title: string,
  description: string,
): void {
assert(title.length>0,"debes incluir un titulo")
assert(description.length>0 && description.length<50, 'Incluye una descripcion corta')


projects.push(
    new ProjectsForAval(projects.length, title, description)
  );
}

export function getProjects(): Array<ProjectsForAval> {
    const result = new Array<ProjectsForAval>(projects.length);
    for (let i = 0; i < projects.length; i++) {
      result[i] = projects[i];
    }
    return result;
  }

  export function avalProject(
    id: i32,
    amount: i32,
    ): ProjectsForAval {
    assert(<i32>amount>0,"debes incluir al menos 1 near")
     let project  = projects[id]
     project.avalCount+=amount
     projects.replace(<i32>id, project)
    return project 
  }

  export function changeStatus(id: i32): ProjectsForAval {
    let project  = projects[id]
    project.status = Status.goal_reached
    projects.replace(<i32>id, project)
    return project
  }

  export function eliminateProject(id: i32): void {
    assert(id>=0,"No tenemos contratos con id negativos")
    projects.swap_remove(<i32>id)
  }
