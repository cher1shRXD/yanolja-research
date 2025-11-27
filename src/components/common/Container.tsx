import { PropsWithChildren } from "react"

const Container = ({ children }: PropsWithChildren) => {
  return (
    <div className="max-w-[1290px] mx-auto px-[15px]">{children}</div>
  )
}

export default Container