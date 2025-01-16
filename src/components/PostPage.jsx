import PostList from "./PostList";

function PostPage() {
    return (
        <>
            <section className='bg-danger-subtle'>
                {/* Homepage section */}
                <div className="container">
                    <h1 className="py-3 m-0">Sei nella PostPage</h1>
                    <PostList />
                </div>
            </section>
        </>
    )
}

export default PostPage;