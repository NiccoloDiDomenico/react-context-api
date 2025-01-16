function PostCard(props) {
    return (
        <>
            <ul className="p-3 m-0">
                <li>{props.post.title}</li>
                <li>{props.post.description}</li>
            </ul>

        </>
    )
}

export default PostCard;