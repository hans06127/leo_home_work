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
