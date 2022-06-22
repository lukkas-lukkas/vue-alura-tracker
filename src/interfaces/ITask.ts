import IProject from "./IProject";

export default interface ITask {
    description: string,
    elapsedTime: number,
    project: IProject
}