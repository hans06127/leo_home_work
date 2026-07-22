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
