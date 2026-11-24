const Pagination = ({ page, setPage, maxPage= 10 }) => {
  const pageCount = Math.max(1, Math.min(maxPage, 10));
  const numbers = Array.from({ length: pageCount }, (_, i) => i + 1);

  return (
    <div className="flex justify-center p-4">
      <div className="join">
        {numbers.map(nr =>
            <button
              key={nr}
              type="button"
              className={`join-item btn ${page === nr ? 'btn-active' : ''}`}
              aria-current={page === nr ? "page" : undefined}
              onClick={() => setPage(nr)}
            >
              {nr}
            </button>
        )}
      </div>
    </div>
  )
}

export default Pagination
