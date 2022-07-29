import React from 'react'
export default function Pagination(props) {
    const { pagination, onPageChange } = props;
    const { currentPage, totalPages, totalCount } = pagination;
    const finalPage = Math.ceil(totalCount / totalPages)
    const handlePageChange = (newPage) => {
        if (onPageChange) {
            onPageChange(newPage);
        }
    }
    return (
        <div>
            <button
                // disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)
                }
            >
                Prev
            </button>
            <button
                // disabled={currentPage >= finalPage}
                onClick={() => handlePageChange(currentPage + 1)
                }
            >
                Next
            </button>
        </div>
    )
}
