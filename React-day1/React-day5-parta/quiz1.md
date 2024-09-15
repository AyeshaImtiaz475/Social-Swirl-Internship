Quiz!

1. What is a React component?
It act as a function which perform some specific task.


2. What's wrong with this code?
```
function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
```
After the return statment the small tag was not inclose in parent element 
in react the child element should be enclose in parent element

3. What's wrong with this code?
```
function Header() {
    return (
        <header>
            <nav>
                <img src="./react-logo.png" width="40px" />
            </nav>
        </header>
    )
}

ReactDOM.render(Header(), document.getElementById("root"))
```
The error lies in the last render statment we have to pass the header as a component but you had pass it as function 
ReactDOM.render(<Header />, document.getElementById("root"))