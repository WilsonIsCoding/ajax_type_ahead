"use client";
export default function NumberBtn({
  numOfPages,
  currentPage,
  setCurrentPage,
}: {
  numOfPages: any;
  currentPage: any;
  setCurrentPage: any;
}) {
  if (numOfPages <= 1) {
    return;
  }
  const handlePageChange = (pageNumber: Number) => {
    setCurrentPage(pageNumber);
  };
  const addPageButton = ({
    pageNumber,
    activeClass,
  }: {
    pageNumber: any;
    activeClass: boolean;
  }) => {
    return (
      <button
        className={`btn page-btn mt-3 ${activeClass && "active"}`}
        key={pageNumber}
        onClick={() => handlePageChange(pageNumber)}
      >
        {pageNumber}
      </button>
    );
  };
  const renderPageButtons = () => {
    const pageButtons = [];
    pageButtons.push(
      addPageButton({ pageNumber: 1, activeClass: currentPage === 1 })
    );
    if (currentPage > 3) {
      pageButtons.push(
        <span className="page-btn dots" key="dots-1">
          ...
        </span>
      );
    }
    if (currentPage !== 1 && currentPage !== 2) {
      pageButtons.push(
        addPageButton({
          pageNumber: currentPage - 1,
          activeClass: false,
        })
      );
    }
    if (currentPage !== 1 && currentPage !== numOfPages) {
      pageButtons.push(
        addPageButton({
          pageNumber: currentPage,
          activeClass: true,
        })
      );
    }
    if (currentPage !== numOfPages && currentPage !== numOfPages - 1) {
      pageButtons.push(
        addPageButton({
          pageNumber: currentPage + 1,
          activeClass: false,
        })
      );
    }
    if (currentPage < numOfPages - 2) {
      pageButtons.push(
        <span className="page-btn dots" key="dots+1">
          ...
        </span>
      );
    }
    pageButtons.push(
      addPageButton({
        pageNumber: numOfPages,
        activeClass: currentPage === numOfPages,
      })
    );
    return pageButtons;
  };
  return (
    <>
      <div className="btn-container mb-6">{renderPageButtons()}</div>
    </>
  );
}
