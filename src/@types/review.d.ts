interface IReviewApprove extends ICasesSaveForm {
  caseHistory: IReviewApproveHistory[]
}

interface IReviewApproveHistory {
  id: string
  casesName: string
  //版本
  version: string
}
