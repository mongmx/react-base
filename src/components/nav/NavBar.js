const styles = {
    div: { 
        borderBottom: '1px solid black', 
        padding: '5px' 
    },
};

const NavBar = ({children}) => {
    return (
        <div style={styles.div}>
            {children}
        </div>
    );
};

export default NavBar;