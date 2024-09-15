//project 1 -static webapge in react
// const project = (
//     <div>
//         <img src="./react.png" alt="React logo" with="100px" height="100px"/>
//         <h1>Fun facts about React</h1>
//         <ul>
//         <li>Was first released in 2013</li>
//         <li>Was originally created by Jordan Walke</li>
//         <li>Has well over 100k stars on Github</li>
//         <li>Is maintained by Facebook</li>
//         <li>Powers thousands of enterprise apps, including mobile apps</li>
//         </ul>
//     </div>
// )
// ReactDOM.render(project, document.getElementById("root"));

// function Project() {
//     return(
//     <div>
//         <img src="./react.png" alt="React logo" with="100px" height="100px"/>
//         <h1>Fun facts about React</h1>
//         <ul>
//         <li>Was first released in 2013</li>
//         <li>Was originally created by Jordan Walke</li>
//         <li>Has well over 100k stars on Github</li>
//         <li>Is maintained by Facebook</li>
//         <li>Powers thousands of enterprise apps, including mobile apps</li>
//         </ul>
//     </div>
//     )
// }
// ReactDOM.render(<Project />, document.getElementById("root"));

//challenge 
//add the navbar inside nav with li "pricing", "about", "contact"
function Header()
{
    return(
        <header>
            <nav>
                <img src="./react.png" width="100px" height="100px"/>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>Contact</li>
                    <li>About</li>
                </ul>
            </nav>
        </header>
    )
}


function MainContent()
{
    return(
        <div className="content">
              <h1>Reasons I'm excited to learn React</h1>
              <br/>
            <ul>
                <li>Hey, My name is Ayesha!</li>
                <li>I want to learn react because it just scared me how the think work </li>
                <li>So, i take this challenge to understand the concepts in React</li>
                <li>Also want to learn the latest technology</li>
                <li>Complete my fyp project</li>
            </ul>
        </div>
    )
}
function Footer(){
    return(
        <footer>
               <small> @ 2021 ayesha development. All right reserved.</small>
        </footer>
    )
}
function Page()
{
    return(
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(<Page/>, document.getElementById("root"));