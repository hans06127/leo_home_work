interface ISystemMainBox {
  checkIsErrorAndExpand: () => void
}

interface ISystemCaseTagOption {
  label: string
  value: string
}

interface ISystemCaseTagGroup {
  key: string
  label: string
  options: ISystemCaseTagOption[]
}

type SystemDrawerBeforeClose = (done: () => void) => void
