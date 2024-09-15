// Rewrite the line of code as best you can from memory

//ReactDOM.render(<h1>Hello, everyone</h1>, document.getElementById("root"));

//Try to write the line we cover in the previous video 
//ReactDOM.render(<p>Hi, my name is ayesha!</p>, document.querySelector("#root"));

// ReactDOM.render(
//     <ul>
//         <li>Thing 1</li>
//         <li>Thing 2</li>
//     </ul>,
//     document.getElementById("root")
// )

//Challenge-1: Create your own custom react component!
//Call it "Main content", and have it return a simple h1 element that says
//" I am learning react!"
//render it below the reactDom.render

// function MainContent()
// {
//     return(
//         <h1>I'm learning react!</h1>
//     )
// }


// ReactDOM.render(
//     <div>
//          <MainContent />
//     </div>,
//     document.getElementById("root")
// )

//Declarative: What should be done?
//Imperative: How should be done?


// Challenge-2: Recreate a new h1 element , give it some textcontent, 
//give it a clas name of "header", append it as a child of the div#root

// let h1 = document.createElement("h1");
// h1.textContent = "Hello, react";
// h1.className = "header";
// console.log(h1);

//JSX
// ReactDOM.render(<h1>This is JSX</h1>, document.getElementById("root"));

// const h1 = document.createElement("h1");
// h1.textContent = "Hello world";
// h1.className = "header";
// console.log(h1);

//<h1 class="header"></h1>
// const element = <h1 className="header">This is JSX</h1>;
// console.log(element);

//JSX
// ReactDOM.render(element, document.getElementById("root"));

// ReactDOM.render
// (
// <div>
// <h1 className="header">This is JSX</h1>
// <p>This is a paragraph</p>
// </div>, 
// document.getElementById("root"));


// const page = (
//     <div>
//         <h1 className="header">This is JSX</h1>
//         <p>This is a paragraph</p>
//     </div>
// )
// console.log(page);
// ReactDOM.render(
//     page,
//     document.getElementById("root")
// )


//challenge- 3: Create a navbar in JSX: 
//Use the semantic 'nav' element as the parent wrapper
//have an h1 element with the brand name of your "website"
//insert an unordered list for other nav elemenets
//inside the 'ul', have three 'li' for "pricing",
//"about", and "contact"

const website = (
    <nav>
        <h1>--PersonalStoreAisha--</h1>
        <ul>
            <li>Pricing </li>
            <li>about</li>
            <li>Contact</li>
        </ul>
    </nav>
)
//console.log(website);
ReactDOM.render(
    website,
    document.getElementById("root")
)


//Challenge - 4: Find out what happens if we try to append JSX to our div # root
//using.append() instad of ReactDom

const page = (
    <div>
        <h1>My awesome website in React</h1>
        <h3>Reasons I love React</h3>
        <ol>
            <li>It's composable</li>
            <li>It's Declarative</li>
            <li>It's a hirable skill</li>
            <li>It's actively maintained by skilled people</li>
        </ol>
    </div>
)
ReactDOM.render(page, document.getElementById("root"));
//document.getElementById("root").append(JSON.stringify(page)); -> objects