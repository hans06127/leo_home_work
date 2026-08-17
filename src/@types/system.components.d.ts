interface ISystemMainBox {
  checkIsErrorAndExpand: () => void
}

type SystemDrawerBeforeClose = (done: () => void) => void
