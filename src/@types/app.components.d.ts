type AppPageHeaderLayoutVariant = 'compact' | 'withTitle'

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

interface IAppCaseInfoPanelField {
  key: string
  title: string
  value?: string | number | null
  tags?: string[]
  icon?: string
}
