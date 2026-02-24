import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { Portfolio, Skill, Project } from '../backend';

export const PORTFOLIO_USERNAME = 'portfolio';

export function useGetPortfolio() {
    const { actor, isFetching } = useActor();

    return useQuery<Portfolio | null>({
        queryKey: ['portfolio', PORTFOLIO_USERNAME],
        queryFn: async () => {
            if (!actor) return null;
            try {
                return await actor.getPortfolio(PORTFOLIO_USERNAME);
            } catch {
                // Portfolio doesn't exist yet
                return null;
            }
        },
        enabled: !!actor && !isFetching,
    });
}

export function useCreatePortfolio() {
    const { actor } = useActor();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async ({
            bio,
            skills,
            projects,
        }: {
            bio: string;
            skills: Skill[];
            projects: Project[];
        }) => {
            if (!actor) throw new Error('Actor not initialized');
            await actor.createPortfolio(PORTFOLIO_USERNAME, bio, skills, projects);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['portfolio', PORTFOLIO_USERNAME] });
        },
    });
}

export function useAddSkill() {
    const { actor } = useActor();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (skill: Skill) => {
            if (!actor) throw new Error('Actor not initialized');
            await actor.addSkill(PORTFOLIO_USERNAME, skill);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['portfolio', PORTFOLIO_USERNAME] });
        },
    });
}

export function useAddProject() {
    const { actor } = useActor();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (project: Project) => {
            if (!actor) throw new Error('Actor not initialized');
            await actor.addProject(PORTFOLIO_USERNAME, project);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['portfolio', PORTFOLIO_USERNAME] });
        },
    });
}
