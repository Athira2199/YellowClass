import { Navbar,FormControl,Form,Button } from 'react-bootstrap'
function MainNavbar({searchHandler,getImages,query}){

    return(
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Navbar.Brand href="#home">Tasveer-Shaakha</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Form inline style={{width:"100%"}} >
            <FormControl type="text" placeholder="Search" className="mr-sm-2 input-lg" style={{width:"90%"}} name="query" onChange={searchHandler} value={query} />
            <Button variant="outline-info" className="mr-sm-4" onClick={getImages}>explore</Button>
        </Form>
        </Navbar.Collapse>
        </Navbar>
    )
}

export default MainNavbar