import { Fragment } from "react";
import PropTypes from "prop-types";
import { Post } from "./Post.jsx";
import { getTotalViews } from "../api/events.js";
import { useQueries } from "@tanstack/react-query";

let likeMap = {};

export function PostList({ posts = [] }) {
    const viewQueries = useQueries({
        queries: posts.map((post) => ({
            queryKey: ["totalViews", post.id],
            queryFn: () => getTotalViews(post.id),
        })),
    });

    const postsWithViews = posts.map((post, i) => ({
        ...post,
        views: viewQueries[i].data?.views ?? 0,
    }));

    const sorted = postsWithViews.sort((a, b) => b.views - a.views);

    return (
        <div>
            {sorted.map((post) => (
                <Fragment key={post._id}>
                    <Post {...post} key={post._id} />
                    <hr />
                </Fragment>
            ))}
        </div>
    );
}

PostList.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape(Post.propTypes)).isRequired,
};
