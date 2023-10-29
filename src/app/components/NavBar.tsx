import './components.css';

const NavBar = ()=>{
    return(
        <>
    <nav style={{margin:'2px' ,padding:'2px' , border:'1px solid white' , borderRadius:'8px'}}>
        <div className='navbar'>
        <div style={{marginLeft:'5px' , cursor :'pointer'}}>
            BRAND
        </div>
        <div className='navlist'>
            <li>Home</li>
            <li>About</li>
            <li>ContactUs</li>
            <li>Status</li>
            
        </div>
        <div className='profile' style={{marginRight:'5px' , border:'2px solid white' , padding:'15px' , cursor:'pointer'}}>
                <p >PROFILE</p>
        </div>
        </div>
    </nav>
    </>
    )
}

export default NavBar;