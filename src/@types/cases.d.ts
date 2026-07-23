interface ICasesId {
  id: string
}

interface ICasesSaveForm {
  id?: string
  // 進出口
  tradeType: string
  // 第二層樣態
  secondLevelCategory: string
  // 第三層樣態
  thirdLevelCategory: string
  // 處理流程
  processingFlow: string
  // 發文字號-字首
  dispatchPrefix?: string
  // 發文字號-號碼
  dispatchNumber?: string
  // 回文字號-字首
  replyPrefix?: string
  // 回文字號-號碼
  replyNumber?: string
  // 處分日期
  penaltyDate?: string
  // 發生日期
  occurrenceDate?: string
  // 註銷/銷毀
  caseStatus?: string
  // 案例名稱
  caseName: string
  // 商品
  productName?: string
  // 裁罰金額(元)
  penaltyAmount?: string
  // 涉及法規 (複選，儲存選中的法規 ID 或名稱)
  relatedRegulations: string[]
  //案例標籤
  tags: {
    // 標籤分類1
    category1?: string[]
    // 標籤分類2
    category2?: string[]
    // 標籤分類3
    category3?: string[]
  }
  // 主旨
  subject: string
  // 案例說明
  caseDescription: string

  // 關聯案例
  relatedCase?: any[]
  //   上傳附件
  attachmentCount: any[]
}
