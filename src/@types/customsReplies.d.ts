interface ICustomsRepliesDrawer {
  openDrawer: (settings: ICustomsRepliesDrawerSettings) => void
}

interface ICustomsRepliesDrawerSettings {
  data: ICustomsRepliesId
}

interface ICustomsRepliesDrawerData {
  id: string
  title: string
  documentNumber: string
  dispositionTarget: string
  dispositionDate: string
  updatedDate: string
  relatedLaws: string
  keyProducts: string
  penalty: string
  penaltyTag: string
  files: any[]
  relatedCases: any[]
  remarks: string
  subject: string
  direction: string
}

interface ICustomsRepliesId {
  id: string
}

interface ICustomsRepliesLetter {
  senderSubUnit: string
  contact: string
  contactTel?: string
  contactExt?: string
  contactFax?: string
  handler?: string
  handlerTel?: string
  handlerExt?: string
  handlerFax?: string
  documentNumber: string
  documentDate: string
  issuingAgency: string
  recipient: string
  relatedLaws: string
  caseSummary: string
  cases: string
  description: string
}
