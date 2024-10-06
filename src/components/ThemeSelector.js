const ThemeSelector = ({ themes, onSelectTheme }) => {
  return (
    <div className="flex space-x-4 mt-4">
      {themes.map((theme) => (
        <button
          key={theme}
          className="bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 py-2 px-4 rounded transition duration-300 hover:bg-gray-300 dark:hover:bg-gray-500"
          onClick={() => onSelectTheme(theme)}
        >
          {theme}
        </button>
      ))}
    </div>
  );
};

export default ThemeSelector;
