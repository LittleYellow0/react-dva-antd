import React from 'react';
import PropTypes from 'prop-types';
import { Table, Popconfirm, Button } from 'antd';

const productList = ({ onDelete, products }) => {
  const columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  }, {
    title: 'Actions',
    render: (text, record) => {
      return (
        <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
          <Button>Delete</Button>
        </Popconfirm>
      );
    },
    key: 'actions',
  }];
  return (
    <Table
      dataSource={products}
      columns={columns}
    />
  );
};

productList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
};

export default productList;