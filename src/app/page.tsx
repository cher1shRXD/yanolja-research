import Container from "@/components/Container"
import CardSwiper from "@/components/CardSwiper"
import Shortcuts from "@/components/Shortcuts"

const HomePage = () => {
  return (
    <>
      <Container>
        <div className="w-full flex gap-20">
          <CardSwiper />
          <Shortcuts />
        </div>
      </Container>
    </>
  )
}

export default HomePage