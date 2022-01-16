import Header from '../../UI/organisms/LandingPage/Header'
import Banner from '../../UI/organisms/LandingPage/Banner'
import ApaItuMyPoints from '../../UI/organisms/LandingPage/ApaituMyPoints'
import CaraDapatPoints from '../../UI/organisms/LandingPage/CaraDapatPoints'
import DaftarPertanyaan from '../../UI/organisms/LandingPage/DaftarPertanyaan'
import Footer from '../../UI/organisms/LandingPage/Footer'

const LandingPage = () => {
  document.title = 'MyPoints Admin'
  document.body.style = 'background: #FFFFFF;'

  return (
    <>
      <Header />
      <Banner />
      <ApaItuMyPoints />
      <CaraDapatPoints />
      <DaftarPertanyaan />
      <Footer />
    </>
  )
}

export default LandingPage
