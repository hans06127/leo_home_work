import type { Component } from 'vue'

export interface ApiResponse<T> {
  data: T
  message: string
}

export interface NavigationItem {
  id: string
  title: string
  description: string
  to: string
  icon: Component
}

export interface Bulletin {
  id: string
  category: string
  title: string
  date: string
  description: string
}

export interface QuickLink {
  id: string
  label: string
  href: string
}

export interface HomePayload {
  bulletins: Bulletin[]
  quickLinks: QuickLink[]
  pendingCount: number
  userName: string
}

export interface CaseStatus {
  id: string
  label: string
  count: number
}

export interface CaseCategory {
  id: string
  title: string
  count: number
}

export interface PenaltyCase {
  id: string
  title: string
  updatedAt: string
  caseNo: string
  penaltyDate: string
  target: string
  regulation: string
  keyword: string
  fine: string
  summary: string
}

export interface CasesPayload {
  statuses: CaseStatus[]
  categories: CaseCategory[]
  cases: PenaltyCase[]
}
