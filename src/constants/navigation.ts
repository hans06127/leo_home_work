import {
  Anchor,
  ClipboardList,
  FileText,
  Mail,
  MessageSquareText,
  Scale,
  Star
} from 'lucide-vue-next'

import type { NavigationItem } from '@/@types/knowledge'

export const featureCards: NavigationItem[] = [
  {
    id: 'disposition',
    title: '處分案例',
    description: '查詢處分案例與辦理紀錄',
    to: '/diposition',
    icon: ClipboardList
  },
  {
    id: 'customReplyForm',
    title: '海關答聯單',
    description: '查詢海關答聯單與回覆紀錄',
    to: '/customReplyForm',
    icon: Anchor
  },
  {
    id: 'appeal',
    title: '聲明異議／訴願／行政訴訟',
    description: '追蹤聲明異議、訴願與行政訴訟案件',
    to: '/administrativeAppeal',
    icon: MessageSquareText
  },
  {
    id: 'publicMailbox',
    title: '民眾意見信箱處理',
    description: '管理民眾意見與回覆紀錄',
    to: '/publicMailbox',
    icon: Mail
  },
  {
    id: 'legislativeInterpellation',
    title: '立法院質詢書面及回應',
    description: '整理立法院質詢書面與回應資料',
    to: '/legislativeInquiry',
    icon: FileText
  },
  {
    id: 'otherTradeAdministration',
    title: '其他貿易管理業務',
    description: '彙整其他貿易管理案件與重要大事記',
    to: '/otherTradeAdministration',
    icon: Star
  },
  {
    id: 'tradeRegulation',
    title: '貿易法規重要函文／函釋',
    description: '彙整貿易法規重要函文與函釋',
    to: '/tradeRegulation',
    icon: Scale
  },
  {
    id: 'importExportProject',
    title: '專案輸出入',
    description: '管理專案輸出入案件與辦理紀錄',
    to: '/projectImportExport',
    icon: ClipboardList
  }
]
