import IProject from "./IProject";

export default interface ITask {
    id: number,
    description: string,
    elapsedTime: number,
    project: IProject
}