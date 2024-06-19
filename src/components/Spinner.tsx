function Spinner() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50">
      <div className="min-h-screen min-w-screen flex flex-row justify-center items-center absolute">
        <div
          className="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500"
          role="status"
          aria-label="loading"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  );
}

export default Spinner;
