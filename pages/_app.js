import Footer from '../components/Footer'
import Header from '../components/Header'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  
  if(Component.getLayout) return getLayout(<Component {...pageProps} />)
  
  return getLayout(
    <>
    <Header/>
    <Component {...pageProps} />
    <Footer/>
    </>
  )
}

export default MyApp
