const Header = () => { 
    const Title = () => <h1>Project 01: my-react-app</h1>
    const NavBar = () => <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/About">About</a></li>
        <li><a href="/">Contact Us</a></li>
    </ul>
    return (
        <>
            <Title />
            <NavBar />
        </>
    )
 }

 export default Header