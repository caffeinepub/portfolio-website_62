import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Portfolio {
    bio: string;
    projects: Array<Project>;
    skills: Array<Skill>;
}
export interface Project {
    skillsUsed: Array<Skill>;
    link: string;
    name: string;
    description: string;
}
export interface Skill {
    name: string;
    level: bigint;
}
export interface backendInterface {
    addProject(username: string, project: Project): Promise<void>;
    addSkill(username: string, skill: Skill): Promise<void>;
    createPortfolio(username: string, bio: string, skills: Array<Skill>, projects: Array<Project>): Promise<void>;
    getPortfolio(username: string): Promise<Portfolio>;
}
