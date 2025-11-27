import Container from "@/components/common/Container"
import Slide from "@/components/Slide"
import Shortcuts from "@/components/Shortcuts"
import Brief from "@/components/Brief"
import Report from "@/components/Report"

const HomePage = () => {
  return (
    <>
      <Container>
        <div className="w-full flex gap-20 overflow-x-hidden">
          <Slide />
          <Shortcuts />
        </div>
        <div className="w-full flex gap-20 mt-13 mb-20">
          <Brief />
          <Report />
        </div>
      </Container>
    </>
  )
}

export default HomePage