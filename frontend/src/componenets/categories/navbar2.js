import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
    const navbarStyles = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1% 3%',
        backgroundColor: 'white',
    };

    const logoStyles = {
        display: 'flex',
        alignItems: 'center',
        gap: '2%',
    };

    const logoImageStyles = {
        width: '100%',
        height: '45px',
    };

    const searchWrapperStyles = {
        position: 'relative',
    };

    const searchStyles = {
        padding: '10px 10px',
        border: '1px solid #ccc',
        borderRadius: '20px',
        fontSize: '14px',
        width: '300px',
        backgroundColor: 'white',
        paddingRight: '30px', // Space for the icon
        paddingLeft: '10px',
    };

    const searchIconStyles = {
        position: 'absolute',
        right: '7px', // Position the icon to the right side
        top: '50%',
        transform: 'translateY(-50%)',
        fontSize: '18px',
        color: '#023047',
    };

    const linksStyles = {
        listStyle: 'none',
        display: 'flex',
        gap: '30px',
        margin: 0,
        padding: 0,
    };

    const linkStyles = {
        textDecoration: 'none',
        color: '#023047',
        fontSize: '16px',
        transition: 'color 0.3s ease',
    };

    const actionsStyles = {
        display: 'flex',
        alignItems: 'center',
        gap: '15px',
    };

    const buttonStyles = {
        padding: '8px 15px',
        fontSize: '14px',
        color: 'white',
        backgroundColor: '#16697a',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    };

    const loginButtonStyles = {
        ...buttonStyles,
        color: '#16697a',
        backgroundColor: 'white',
        padding: '8px 15px',
        fontSize: '14px',
        border: '1%',
        borderColor: '#16697a',

    };

    return (
        <nav style={navbarStyles}>
            {/* Logo Section */}
            <div style={logoStyles}>
                <a
                    href="/"
                >
                    <img src="./images/logo_seul.png" alt="Lodgini logo" style={logoImageStyles} />
                </a>
            </div>

            {/* Search Bar Section with Material-UI Search Icon */}
            <div style={searchWrapperStyles}>
                <input type="text" placeholder="Search by name" style={searchStyles} />
                <SearchIcon style={searchIconStyles} />
            </div>

            {/* Navigation Links */}
            <ul style={linksStyles}>
                <li>
                    <a
                        href="/"
                        style={linkStyles}
                        onMouseEnter={(e) => (e.target.style.color = '#82c0cc')}
                        onMouseLeave={(e) => (e.target.style.color = '#023047')}
                    >
                        Home
                    </a>
                </li>
                <li>
                    <a
                        href="/profile"
                        style={linkStyles}
                        onMouseEnter={(e) => (e.target.style.color = '#82c0cc')}
                        onMouseLeave={(e) => (e.target.style.color = '#023047')}
                    >
                        Profile
                    </a>
                </li>
                <li>
                    <a
                        onClick={() => window.location.href = "/about"}
                        style={{
                            ...linkStyles,
                            cursor: 'pointer' // Ajout du curseur de type main
                        }}
                        onMouseEnter={(e) => (e.target.style.color = '#82c0cc')}
                        onMouseLeave={(e) => (e.target.style.color = '#023047')}
                    >
                        About Us
                    </a>

                </li>
                <li>
                    <a
                        href="#footer"
                        style={linkStyles}
                        onMouseEnter={(e) => (e.target.style.color = '#82c0cc')}
                        onMouseLeave={(e) => (e.target.style.color = '#023047')}
                    >
                        Contact Us
                    </a>
                </li>
            </ul>

            {/* Buttons Section */}
            <div style={actionsStyles}>
                <button
                    style={buttonStyles}
                    onMouseEnter={(e) => (e.target.style.backgroundColor = '#0f4c59')}
                    onMouseLeave={(e) => (e.target.style.backgroundColor = '#16697a')}
                    onClick={() => window.location.href = "../sign_up"}
                >
                    Register
                </button>

                <button
                    style={loginButtonStyles}
                    onMouseEnter={(e) => (e.target.style.backgroundColor = '#f5efeb')}
                    onMouseLeave={(e) => (e.target.style.backgroundColor = 'white')}
                    onClick={() => window.location.href = "../sign_in"}
                >
                    Login
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
