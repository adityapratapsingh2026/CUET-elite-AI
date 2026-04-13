import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createActor } from "../backend";
import type {
  AwardXPArgs,
  RegisterUserArgs,
  SaveMockTestResultArgs,
  SaveQuizResultArgs,
  UpdateUserArgs,
} from "../backend.d";

export function useMyProfile() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["myProfile"],
    queryFn: async () => {
      if (!actor) return null;
      return actor.getMyProfile();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useLeaderboard() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["leaderboard"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getLeaderboard();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useMyQuizHistory() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["quizHistory"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getMyQuizHistory();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useMyMockTestHistory() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["mockTestHistory"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getMyMockTestHistory();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useStreakInfo() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["streakInfo"],
    queryFn: async () => {
      if (!actor) return null;
      return actor.getStreakInfo();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useRegisterUser() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (args: RegisterUserArgs) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.registerUser(args);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["myProfile"] }),
  });
}

export function useUpdateUser() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (args: UpdateUserArgs) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.updateUser(args);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["myProfile"] }),
  });
}

export function useSaveQuizResult() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (args: SaveQuizResultArgs) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.saveQuizResult(args);
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["quizHistory"] });
      qc.invalidateQueries({ queryKey: ["myProfile"] });
    },
  });
}

export function useSaveMockTestResult() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (args: SaveMockTestResultArgs) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.saveMockTestResult(args);
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["mockTestHistory"] });
      qc.invalidateQueries({ queryKey: ["myProfile"] });
    },
  });
}

export function useAwardXP() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (args: AwardXPArgs) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.awardXP(args);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["myProfile"] }),
  });
}

export function useCompleteDailyChallenge() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async () => {
      if (!actor) throw new Error("Actor not ready");
      return actor.completeDailyChallenge();
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["streakInfo"] });
      qc.invalidateQueries({ queryKey: ["myProfile"] });
    },
  });
}

export function useIsTodayChallengeCompleted() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["todayChallengeCompleted"],
    queryFn: async () => {
      if (!actor) return false;
      return actor.isTodayChallengeCompleted();
    },
    enabled: !!actor && !isFetching,
  });
}
