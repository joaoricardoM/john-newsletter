const Article = ({ title, text, tags, image, alt }) => {
  return (
    <div className="p-5 bg-gray-200 dark:bg-dark-200 sm:rounded-xl sm:shadow-lg flex flex-col items-center gap-2">
      <h3 className="text-xl text-blue-200 dark:text-gray-200 font-bold">
        {title}
      </h3>
      <div className="sm:w-full flex-row justify-end gap-2 pr-5 hidden sm:flex">
        {tags.map((tag) => (
          <span
            key={tag}
            className="bg-blue-100 dark:bg-dark-100 px-4 py-1 rounded-full text-gray-200 font-bold text-xs uppercase"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="grid gap-1">
        {text.map((content, index) => (
          <p className="text-blue-200 dark:text-gray-400" key={index}>
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
