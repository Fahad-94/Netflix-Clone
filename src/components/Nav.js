import React, {useState, useEffect} from 'react';


function Nav() {

    const [isScroll, setIsScroll] = useState(false);

    useEffect(() => {
        function scroll() {
            if (window.scrollY > 250) {
                setIsScroll(true);
            } else setIsScroll(false);
        }
        window.addEventListener('scroll', scroll);

        return () => window.removeEventListener('scroll', scroll);
     
    }, [])

    const logo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png';
    const avatar = 'https://cdn-icons-png.flaticon.com/128/149/149071.png';
    
    return (
        <div className={`nav ${isScroll && 'nav-black'}`}>
            <img src={logo} id="logo" alt='Netflix Logo'/>
            <img src={avatar} id="avatar" alt='Avatar'/>
        </div>
    )
}


export default Nav;