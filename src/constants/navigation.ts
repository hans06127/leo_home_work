import {
  Anchor,
  ClipboardList,
  FileText,
  Mail,
  MessageSquareText,
  Scale,
  Star
} from 'lucide-vue-next'

import type { NavigationItem } from '~/types/knowledge'

export const featureCards: NavigationItem[] = [
  {
    id: 'apply',
    title: '輸出入申辦',
    description: '申請、審核與案件進度管理',
    to: '/',
    icon: ClipboardList
  },
  {
    id: 'cases',
    title: '裁罰案例',
    description: '查詢違規樣態、法規依據與裁罰摘要',
    to: '/cases',
    icon: ClipboardList
  },
  {
    id: 'contact',
    title: '聯絡窗口',
    description: '整理常用承辦窗口與支援資訊',
    to: '/',
    icon: Anchor
  },
  {
    id: 'laws',
    title: '貿易法規',
    description: '彙整公告、命令與相關規範',
    to: '/',
    icon: Scale
  },
  {
    id: 'appeals',
    title: '陳情與申訴',
    description: '追蹤陳情、回覆與辦理紀錄',
    to: '/',
    icon: MessageSquareText
  },
  {
    id: 'mailbox',
    title: '機關信箱',
    description: '集中管理外部來信與回覆狀態',
    to: '/',
    icon: Mail
  },
  {
    id: 'parliament',
    title: '立院資料',
    description: '整理質詢、提案與回覆素材',
    to: '/',
    icon: FileText
  },
  {
    id: 'events',
    title: '活動與公告',
    description: '維護近期活動、跑馬燈與公告內容',
    to: '/',
    icon: Star
  }
]
