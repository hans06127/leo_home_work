type AppPageHeaderLayoutVariant = 'compact' | 'withTitle'
type AppPageHeaderActionTone = 'main' | 'primary' | 'subtle'

interface IAppPageSidebarTab {
  label: string
  value: string
}

interface IAppPageSidebarItem {
  index: string
  title: string
  count?: number
  icon?: string
}

interface IAppPageSidebarMenu {
  categoryId: string
  categoryName: string
  icon?: string
  list: IAppPageSidebarItem[]
}

interface IAppCaseInfoPanelData {
  tags?: {
    category1?: string[]
  }
  penaltyAmount?: string
  productName?: string
  secondLevelCategory?: string
  dispatchPrefix?: string
  dispatchNumber?: string
  penaltyDate?: string
  occurrenceDate?: string
  dispositionTarget?: string
  relatedRegulations?: string[]
}
