import { hello , createProject} from "..";
import { Context } from "near-sdk-as";
import * as contract from '..';

/*Test para la función de saludo*/
describe("hello function test", () => {
  it("should return 'hello + user name'", () => {
    let user = Context.sender
    expect(hello()).toStrictEqual("hello " + user );
  })
});

/*Test para la función createProject*/
describe("Create a project",()=>{
  it("should run fine", () => {
      expect(() => {
          contract.createProject("Proyecto1","descripcion de proyecto1");
      }).not.toThrow();
});
  it("should fail if we give it a empty title", () => {
       expect(() => {
      contract.createProject("","descripcion de proyecto1");
   }).toThrow();
});

it("should fail if we give it a empty description", () => {
       expect(() => {
      contract.createProject("titulo","");
   }).toThrow();
});

it("should fail if we give a longer than 50 characters description", () => {
       expect(() => {
      contract.createProject("titulo","asdfjklñasddfjfhfjdkskdkdkdkdkdkdkdlskdkdkdkdkdkdkdk");
   }).toThrow();
});
})

/*Test para la función avalProject*/
describe("Aval a project",()=>{
  it("should run fine", () => {
     contract.createProject("title","description");
      expect(() => {
          contract.avalProject(0, 20);
      }).not.toThrow();
});
  it("should fail if we try to aval with 0 nears", () => {
       contract.createProject("title","description");
       expect(() => {
      contract.avalProject(0,0);
   }).toThrow();
});
})
