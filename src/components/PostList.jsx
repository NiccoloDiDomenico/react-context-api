import { useContext } from "react";
import PostCard from "./PostCard";
import GlobalContext from "../context/GlobalContext";

function PostList() {
    const { post } = useContext(GlobalContext);

    return (
        <>
            <section>
                <h1>Ecco la lista di tutti i post:</h1>
                {
                    post.length > 0 && (
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 gx-0 gy-2">
                            {post.map((curPost) => (
                                <PostCard key={curPost.id} post={curPost} />
                            ))}
                        </div>
                    )
                }
            </section>
        </>
    )
}

export default PostList;