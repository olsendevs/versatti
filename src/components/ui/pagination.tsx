interface CustomInputProps {
  setCurrentPage: (value: number) => void;
  currentPage: number;
  totalPages: number;
}

export function Pagination({
  setCurrentPage,
  currentPage,
  totalPages,
}: CustomInputProps) {
  return (
    <div className="flex justify-center mt-4 mb-4 space-x-2 text-base">
      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="border border-solid px-2 disabled:bg-gray-200 rounded-md h-8"
      >
        {'<'}
      </button>

      {currentPage > 2 ? (
        <button onClick={() => setCurrentPage(1)}>
          <h2 className="px-2  border border-solid border-gray-200 rounded-md h-8">
            1
          </h2>
        </button>
      ) : (
        <></>
      )}

      {currentPage > 1 ? (
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          <h2 className="px-2 border border-solid border-gray-200 rounded-md h-8">
            {currentPage - 1}
          </h2>
        </button>
      ) : (
        <></>
      )}

      <h2
        className="bg-orange-500 text-white px-2 border border-solid border-gray-200 rounded-md h-8"
        id="page"
      >
        {currentPage}
      </h2>

      {currentPage + 1 <= totalPages ? (
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          <h2 className="px-2  border border-solid border-gray-200 rounded-md h-8">
            {currentPage + 1}
          </h2>
        </button>
      ) : (
        <></>
      )}

      {currentPage + 2 <= totalPages ? (
        <button onClick={() => setCurrentPage(totalPages)}>
          <h2 className="px-2  border border-solid border-gray-200 rounded-md h-8">
            {totalPages}
          </h2>
        </button>
      ) : (
        <></>
      )}

      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="border border-solid px-2 disabled:bg-gray-200 rounded-md h-8"
      >
        {'>'}
      </button>
    </div>
  );
}
