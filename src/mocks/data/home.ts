import type { HomePayload } from '~/types/knowledge'

export const homePayload: HomePayload = {
  pendingCount: 6,
  userName: '王小明',
  bulletins: [
    {
      id: 'b-001',
      category: '系統公告',
      title: '貿易知識入口樣板 v1.0 上線',
      date: '2026/06/25',
      description: '提供首頁、案件列表、公告與快速連結的切版練習資料。'
    },
    {
      id: 'b-002',
      category: '法規更新',
      title: '出口管理相關作業流程更新',
      date: '2026/01/20',
      description: '可作為列表、標籤、日期與摘要文字的版面測試內容。'
    },
    {
      id: 'b-003',
      category: '教育訓練',
      title: '進出口管理案例研習課程報名開放',
      date: '2025/11/10',
      description: '適合用來練習公告卡片、資訊密度與響應式排列。'
    }
  ],
  quickLinks: [
    {
      id: 'q-001',
      label: '農業部動植物防疫檢疫署',
      href: 'https://www.aphia.gov.tw/'
    },
    {
      id: 'q-002',
      label: '關港貿單一窗口',
      href: 'https://portal.sw.nat.gov.tw/'
    },
    {
      id: 'q-003',
      label: '經濟部國際貿易署',
      href: 'https://www.trade.gov.tw/'
    }
  ]
}
