import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Toolbar, Sort, Filter, Edit } from '@syncfusion/ej2-react-grids';
import { customersData, customersGrid } from '../data/dummy';
import { Header } from '../components';


const Customers = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header 
        title="Customers"
        category="Page"
      />
      <GridComponent
        dataSource={customersData}
        allowPaging={true}
        allowSorting={true}
        toolbar={["Delete", "Edit"]}
        editSettings={{allowDeleting: true, allowEditing: true}}
        width="auto"
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item}/>
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Toolbar, Selection, Sort, Filter, Edit]} />
      </GridComponent>
    </div>
  )
}

export default Customers