interface IMajorEventCategory {
  id: string
  name: string
  list: IMajorEventItemForm[]
}

interface IMajorEventItemForm {
  id: string
  no: string
  title: string
  statusCode: string
  status: string
  content: string
  isSpecial: boolean
  isFavorite: boolean
  createdDate: string
  updatedDate: string
  dept: string
}

interface IMajorEventSaveForm {
  id: string
  no: string
  title: string
  statusCode: string
  content: string
  tags: string[]
  createdDate: string
  updatedDate: string
  dept: string
  files: File[]
  timeline: IMajorEventTimeline[]
}

interface IMajorEventTimeline {
  id: string
  timestamp: [string, string] | string
  files: File[]
  content: string
}
