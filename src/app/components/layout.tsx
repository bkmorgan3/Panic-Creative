

export default function Layout({children}) {
    return (
        <div>
            <header>Navigation</header>
            <main>{children}</main>
            <footer>Footer</footer>
        </div>
    )
}