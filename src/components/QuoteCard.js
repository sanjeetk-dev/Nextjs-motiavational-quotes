const QuoteCard = ({ quote }) => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md transition duration-300">
      <p className="text-lg text-gray-800 dark:text-gray-200 text-center">
        {quote}
      </p>
    </div>
  );
};

export default QuoteCard;
