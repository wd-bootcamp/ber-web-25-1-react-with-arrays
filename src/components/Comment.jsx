import "./Comment.css";

export default function Comment({ user, text, upvotes }) {
  return (
    <article className="comment">
      <h2 className="comment__user">{user}</h2>
      <p className="comment__text">{text}</p>
      <p className="comment__upvotes">
        <span className="comment__upvotes-count">{upvotes}</span>
        <span className="comment__upvotes-label"> Upvotes</span>
      </p>
    </article>
  );
}
