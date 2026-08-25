interface IPublicMailboxTagGroup {
  category1: string[]
  category2: string[]
}

interface IPublicMailboxCase {
  id: string
  title: string
  caseNo: string
  receiveDate: string
  sourceUnit: string
  category: string
  secondLevelCategory?: string
  thirdLevelCategory?: string
  modifierDate?: string
  modifier?: string
  isFavorite?: boolean
  status: string
  summary: string
  tags: IPublicMailboxTagGroup
}

interface IPublicMailboxCategory {
  id: string
  title: string
  list: IPublicMailboxCase[]
}

// 處理流程
interface IPublicMailboxStep {
  id: string
  step: number
  title: string
  unit: string
  status: string
  content: string
}

interface IPublicMailboxSaveForm {
  // 編號
  id?: string
  // 主旨
  title: string
  // 來源單位
  sourceUnit: string
  // 標籤(多個)
  tags: string[]
  // 相關附件
  attachments: File[]
  // 處理流程
  processingFlow: IPublicMailboxStep[]
  // 創建日期
  createdDate?: string
  // 創建人
  creator?: string
  // 異動日期
  updatedDate?: string
  // 異動人
  modifier?: string
}
