import React from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';
import 'react-table/react-table.css'

const Data = props => {
  const data = [{
    createdDateTime: "2018-02-11T14:35:20.115Z",
    amount: 26,
    meta: {
      timeSpent: '10 seconds'
    }
  },{
    createdDateTime: "2018-02-11T14:35:20.115Z",
    amount: 36,
    meta: {
      timeSpent: '20 seconds'
    }
  }]


  const columns = [{
    Header: 'Date',
    accessor: 'createdDateTime' // String-based value accessors!
  }, {
    Header: 'Time Spent',
    accessor: 'meta.timeSpent',
  }, {
    Header: 'Money Saved',
    accessor: 'amount' // Custom value accessors!
  }]
  return (
    <div>
      <ReactTable
        data={data}
        columns={columns}
      />
    </div>
  );
};

Data.propTypes = {
  
};

export default Data;
