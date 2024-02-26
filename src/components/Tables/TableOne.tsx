import React, { useState } from 'react';
import { BRAND } from '../../types/brand';

const brandData: BRAND[] = [
  {
    name: 'Mouse',
    quantity: 5,
  },
  {
    name: 'Cartridge',
    quantity: 4,
  },
  {
    name: 'Mouse',
    quantity: 5,
  },
  {
    name: 'Cartridge',
    quantity: 4,
  },
  {
    name: 'Mouse',
    quantity: 5,
  },
  {
    name: 'Cartridge',
    quantity: 4,
  },
  {
    name: 'Mouse',
    quantity: 5,
  },
  {
    name: 'Cartridge',
    quantity: 4,
  },
  {
    name: 'Mouse',
    quantity: 5,
  },
  {
    name: 'Cartridge',
    quantity: 4,
  },
  {
    name: 'Mouse',
    quantity: 5,
  },
  {
    name: 'Cartridge',
    quantity: 4,
  },
  {
    name: 'Mouse',
    quantity: 5,
  },
  {
    name: 'Cartridge',
    quantity: 4,
  },
  {
    name: 'Mouse',
    quantity: 5,
  },
  {
    name: 'Cartridge',
    quantity: 4,
  },
  {
    name: 'Mouse',
    quantity: 5,
  },
  {
    name: 'Cartridge',
    quantity: 4,
  },
  {
    name: 'Mouse',
    quantity: 5,
  },
  {
    name: 'Cartridge',
    quantity: 4,
  },
];

const TableOne = () => {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentBrandData = brandData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(brandData.length / itemsPerPage);

  const changePage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Low Stock
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-2 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-2">
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Item
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Stock
            </h5>
          </div>
        </div>

        {currentBrandData.map((brand, key) => (
          <div
            className={`grid grid-cols-2 sm:grid-cols-2 ${
              key === currentBrandData.length - 1
                ? ''
                : 'border-b border-stroke dark:border-strokedark'
            }`}
            key={key}
          >
            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-white">{brand.name}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5 text-red-500">
              <p className="text-meta-5">{brand.quantity}</p>
            </div>
          </div>
        ))}

        {/* Pagination */}
        <div className="flex justify-end mt-4">
          <nav>
            <ul className="flex space-x-2">
              {[...Array(totalPages).keys()].map((page) => (
                <li
                  key={page}
                  className={`pagination-item ${
                    page + 1 === currentPage ? 'active' : ''
                  }`}
                >
                  <button
                    onClick={() => changePage(page + 1)}
                    className="pagination-link"
                  >
                    {page + 1}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default TableOne;
