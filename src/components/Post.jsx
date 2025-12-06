import PropTypes from "prop-types";
import { User } from "./User.jsx";
import { Link } from "react-router-dom";
import { PostStats } from "./PostStats.jsx";
import slug from "slug";
export function Post({
    title,
    contents,
    author,
    imageURL,
    id,
    fullPost = false,
}) {
    return (
        <article>
            {fullPost ? (
                <h3>{title}</h3>
            ) : (
                <div>
                    <Link to={`/posts/${id}/${slug(title)}`}>
                        <h3>{title}</h3>
                        <img
                            src={imageURL}
                            alt=""
                            style={{
                                width: 150,
                                height: 150,
                                objectFit: "contain",
                            }}
                        />
                        <br />
                    </Link>
                    <br />
                    <PostStats postId={id} />

                    <br />
                </div>
            )}
            {fullPost && (
                <div>
                    <div>{contents}</div>
                    <img
                        src={imageURL}
                        alt=""
                        style={{
                            width: 350,
                            height: 350,
                            objectFit: "contain",
                        }}
                    />
                    <br />
                </div>
            )}
            {author && (
                <em>
                    {fullPost && <br />}
                    Written by <User {...author} />
                </em>
            )}
        </article>
    );
}
Post.propTypes = {
    title: PropTypes.string.isRequired,
    contents: PropTypes.string,
    imageURL: PropTypes.string,
    author: PropTypes.shape(User.propTypes),
    id: PropTypes.string.isRequired,
    fullPost: PropTypes.bool,
};
