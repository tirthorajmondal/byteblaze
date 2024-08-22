

const Footer = () => {
    return (
        <div className="min-h-5">
            <footer className="footer footer-center bg-base-300 text-base-content p-4">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by ByteBlaze</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;