import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import './styles.css'

export default function Layout({ children }) {
    return (
      <>
        <Header />
        <div className="container">
          <Sidebar />
            <main className="main">
              {children}
            </main>
        </div>
        <Footer />
      </>
    )
}