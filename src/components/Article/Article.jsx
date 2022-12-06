const Article = ({ title, text, tags, image, alt }) => {
  return (
    <div className="article-card">
      <h3 className="text-xl text-blue-200 dark:text-gray-200 font-bold">
        {title}
      </h3>
      <div className="sm:w-full flex-row justify-end gap-2 pr-5 hidden sm:flex">
        {tags.map((tag) => (
          <span key={tag} className="article-tag">
            {tag}
          </span>
        ))}
      </div>
      <div className="grid gap-1">
        {text.map((content, index) => (
          <p
            className="text-blue-200 dark:text-gray-400 line-clamp-6 sm:line-clamp-none"
            key={index}
          >
            {content}
          </p>
        ))}
      </div>
      {image && <img className="p-4" src={image} />}
      {image && alt && <span className="sr-only">{alt}</span>}
    </div>
  );
};
export default Article;
