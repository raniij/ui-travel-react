import Header from './Header/Header'
import Footer from './Footer/Footer'

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />

      <main className="pageContent"
      style={{ height: 500 }}>
        {children}
      </main>

      <Footer />
    </div>
  )
}

export default Layout