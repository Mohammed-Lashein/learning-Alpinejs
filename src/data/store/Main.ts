import { isMobile } from "../../utils/device"

type MainStoreType = {
  isMobile: boolean
}
// Note that the below is a type assertion and not a generic type
export const Main = <MainStoreType>{
    isMobile: isMobile()
}