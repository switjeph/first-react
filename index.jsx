import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById('root'))

function Header(){
    return (
      <header>
        <img src="react-logo.png" width="40px" alt="React logo" />
      </header>
    );
}

function MainContent() {
    return(
        <main>
           <h1>Why i'm excited to learn React!</h1>
          <ol>
            <li>It's a front-end library!</li>
            <li>It makes building websites and mobile apps easy</li>
            <li>It widly used library</li>
            <li>Fun to code with</li>
            <li>A roadmap to my career path!</li>
          </ol>
        </main>
    )
}

function Footer() {
    return(
         <footer>
            <small>@ 20204 Jeph  name here development. All rights reserved.</small>
        </footer>
      
    )
}

function Page() {
    return (
      <>

        <Header />
        <MainContent/>
        <Footer/>


      </>
    );
}

root.render(
  <Page />
)