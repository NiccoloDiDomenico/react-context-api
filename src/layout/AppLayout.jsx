import PostPage from "../components/PostPage"

function AppLayout() {
    return (
        <>
            <header className="bg-primary">
                <h2 className='text-center py-3 m-0'>Il tuo header</h2>
            </header>
            <main>
                <PostPage />
            </main>
            <footer className="bg-danger">
                <h3 className="text-center py-3 m-0">Il tuo footer</h3>
            </footer>
        </>
    )
}

export default AppLayout