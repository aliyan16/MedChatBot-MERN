import React from 'react';

const Breadcrumb = ({ items }) => {
  return (
    <div className="mb-6">
      <div className="flex items-center text-sm text-gray-400">
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <span className={item.active ? "text-purple-400" : "text-gray-400"}>
              {item.name}
            </span>
            {index < items.length - 1 && <span className="mx-2">›</span>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Breadcrumb;