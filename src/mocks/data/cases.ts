import type { CasesPayload } from '~/types/knowledge'

export const casesPayload: CasesPayload = {
  statuses: [
    {
      id: 'export',
      label: '輸出',
      count: 9
    },
    {
      id: 'import',
      label: '輸入',
      count: 3
    }
  ],
  categories: [
    {
      id: 'origin-missing',
      title: '未依規定標示原產地',
      count: 5
    },
    {
      id: 'origin-other-country',
      title: '原產地標示不實：標示第三國',
      count: 1
    },
    {
      id: 'origin-taiwan',
      title: '原產地標示不實：標示臺灣',
      count: 2
    },
    {
      id: 'origin-other',
      title: '其他原產地標示異常',
      count: 0
    },
    {
      id: 'cites',
      title: 'CITES 保育類貨品',
      count: 0
    },
    {
      id: 'trademark',
      title: '商標與智慧財產權',
      count: 0
    }
  ],
  cases: [
    {
      id: 'case-001',
      title: '未依規定標示原產地',
      updatedAt: '114.11.25',
      caseNo: '貿服字第 14704321 號',
      penaltyDate: '中華民國 114 年 11 月 25 日',
      target: 'OOO 股份有限公司',
      regulation: '貿易法第 17 條第 2 項、第 28 條第 1 項第 6 款',
      keyword: '原產地',
      fine: '12 萬',
      summary:
        '業者輸入貨品後未於本體或包裝明顯處標示原產地，經通知限期改善仍未完成，依規定裁處罰鍰。'
    },
    {
      id: 'case-002',
      title: '標示原產地與實際來源不符',
      updatedAt: '114.11.20',
      caseNo: '貿服字第 14704108 號',
      penaltyDate: '中華民國 114 年 11 月 20 日',
      target: 'OOO 貿易有限公司',
      regulation: '貿易法第 17 條第 2 項、第 28 條第 1 項第 6 款',
      keyword: '標示不實',
      fine: '8 萬',
      summary:
        '抽查發現商品外盒標示國別與報關資料不一致，已影響消費者辨識來源，依規定要求改正並裁處罰鍰。'
    }
  ]
}
