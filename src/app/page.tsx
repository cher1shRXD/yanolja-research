import Container from "@/components/common/Container"
import Slide from "@/components/Slide"
import Shortcuts from "@/components/Shortcuts"
import Brief from "@/components/Brief"
import Report from "@/components/Report"
import Research from "@/components/Research"
import News from "@/components/News"
import Data from "@/components/Data"
import Subscription from "@/components/Subscription"

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
      <div className="w-full bg-bg-variation py-20">
        <Container>
          <Research />
        </Container>
      </div>
      <Container>
        <div className="w-full flex gap-20 overflow-x-hidden py-20">
          <News />
          <Data />
        </div>
      </Container>
      <div className="w-full bg-bg-variation pt-[70px] pb-[90px]">
        <Container>
          <Subscription />
        </Container>
      </div>
    </>
  )
}

export default HomePage