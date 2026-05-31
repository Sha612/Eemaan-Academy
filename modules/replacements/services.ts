import { serverApi } from '@/lib/server-api';
import {
  CreateReplacementPayload,
  PaginatedReplacementsResponse,
  ReplacementResponse,
} from './types';

export async function getReplacements() {
  return serverApi<
    | PaginatedReplacementsResponse
    | ReplacementResponse[]
    | ReplacementResponse
  >('/replacements');
}

export async function getReplacementById(id: number) {
  return serverApi<ReplacementResponse>(`/replacements/${id}`);
}

export async function createReplacement(payload: CreateReplacementPayload) {
  return serverApi<ReplacementResponse>('/replacements', {
    method: 'POST',
    data: payload,
  });
}

export async function deleteReplacement(id: number) {
  return serverApi(`/replacements/${id}`, {
    method: 'DELETE',
  });
}