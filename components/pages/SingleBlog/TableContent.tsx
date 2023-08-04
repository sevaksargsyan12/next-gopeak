import React from 'react';

const TableContent = ({tableContent}:any) => {
  return (
    <section className="table-content">
      <h3>Table of content</h3>
      <div className="table">
        {tableContent.map((item: any, index: number) => (
          <div key={index} className={`table-item ${item.type}`}>
            <span className="num">{item.num}.</span>
            <a href={`#${item.id}`}>{item.title}</a>
          </div>))}
      </div>
    </section>
  );
};

export default TableContent;