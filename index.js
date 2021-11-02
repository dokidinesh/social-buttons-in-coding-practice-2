function Button(props) {
  //   Write your code here.
  const { text, className } = props;
  return <button className={`button ${className}`}>{text}</button>;
}

const element = (
  //   Write your code here.
  <div className="button-container">
    <h1 className="page-heading">Social Buttons</h1>
    <div>
      <Button text="Like" className="like-button" />
      <Button text="Comment" className="comment-button" />
      <Button text="Share" className="share-button" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
