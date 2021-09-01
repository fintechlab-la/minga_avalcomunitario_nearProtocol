import { Context } from "near-sdk-as";
import { projects, ProjectsForAval, Status } from "./models";

export function hello_world(): string {
    let user = Context.sender
    return "hello " + user;
}

export function createProject(
  title: string,
  description: string,
): void {
assert(title.length>0,"a tittle must be included")
assert(description.length>0 && description.length<10)
let key = Context.sender + "k"


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

  export function avalProject(id: i32): ProjectsForAval {
     let project  = projects[id]
     project.avalCount+=1
     projects.replace(<i32>id, project)
    return project }