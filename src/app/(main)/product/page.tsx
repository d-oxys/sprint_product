'use client';
import React, { useState } from 'react';
import { Avatar, Breadcrumb, Button, Col, DatePicker, Input, Modal, Row, Table, TableColumnsType } from 'antd';
import { FormOutlined, DeleteOutlined, FilterOutlined, SearchOutlined } from '@ant-design/icons';
import TableComponent from '@root/app/components/Table';
import { useRouter } from 'next/navigation';
import { Suspense } from 'react';
import { useAppDispatch } from '@root/libs/store';
import LoadingComponent from '@root/app/components/Loading';

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
  description: string;
  children?: DataType[];
}

const ProductPage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [dateFilter, setDateFilter] = useState(null);
  const route = useRouter();
  const dispatch = useAppDispatch();

  const columns: TableColumnsType<DataType> = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Age', dataIndex: 'age', key: 'age' },
    { title: 'Address', dataIndex: 'address', key: 'address' },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: () => <a>Delete</a>,
    },
  ];

  const data: DataType[] = [
    {
      key: 1,
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      description: 'John Brown is a 32-year-old living in New York No. 1 Lake Park.',
      children: [
        { key: 11, name: 'John Brown Jr.', age: 8, address: 'New York No. 1 Lake Park', description: 'John Brown Jr. is 8 years old.' },
        { key: 12, name: 'John Brown Sr.', age: 58, address: 'New York No. 1 Lake Park', description: 'John Brown Sr. is 58 years old.' },
      ],
    },
    {
      key: 2,
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      description: 'Jim Green is a 42-year-old living in London No. 1 Lake Park.',
      children: [{ key: 21, name: 'Jim Green Jr.', age: 18, address: 'London No. 1 Lake Park', description: 'Jim Green Jr. is 18 years old.' }],
    },
    {
      key: 3,
      name: 'Not Expandable',
      age: 29,
      address: 'Jiangsu No. 1 Lake Park',
      description: 'This entry is not expandable.',
    },
    {
      key: 4,
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
      description: 'Joe Black is a 32-year-old living in Sydney No. 1 Lake Park.',
      children: [{ key: 41, name: 'Joe Black Jr.', age: 10, address: 'Sydney No. 1 Lake Park', description: 'Joe Black Jr. is 10 years old.' }],
    },
  ];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => setSearchText(e.target.value);
  const handleDateChange = (date: any) => setDateFilter(date);

  const filteredData = data.filter((item) => item.name.toLowerCase().includes(searchText.toLowerCase()) && (!dateFilter || /* Add logic for date comparison based on your date property if available */ true));

  const showFilterModal = () => setIsModalVisible(true);
  const handleOk = () => setIsModalVisible(false);
  const handleCancel = () => setIsModalVisible(false);

  return (
    <Suspense fallback={<LoadingComponent />}>
      <Row justify='space-between' style={{ marginBottom: '16px' }}>
        <Col>
          <Breadcrumb
            items={[
              { href: '#', title: 'Home' },
              { href: '/my-profile', title: 'My Profile' },
            ]}
          />
        </Col>
        <Col>
          <Input placeholder='Search by Name' prefix={<SearchOutlined />} value={searchText} onChange={handleSearchChange} style={{ width: 200, marginRight: '16px' }} />
          <DatePicker onChange={handleDateChange} style={{ marginRight: '16px' }} />
          <Button icon={<FilterOutlined />} onClick={showFilterModal}>
            Filter
          </Button>
        </Col>
      </Row>
      <Table<DataType>
        columns={columns}
        expandable={{
          expandedRowRender: (record) => (record.children ? <Table columns={columns} dataSource={record.children} pagination={false} showHeader={false} /> : <p style={{ margin: 0 }}>{record.description}</p>),
          rowExpandable: (record) => record.name !== 'Not Expandable',
        }}
        dataSource={filteredData}
      />
      <Modal title='Filter Options' visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>More filter options can be placed here.</p>
      </Modal>
    </Suspense>
  );
};

export default ProductPage;
