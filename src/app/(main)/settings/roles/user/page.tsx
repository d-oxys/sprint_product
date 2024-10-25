'use client';
import { Breadcrumb, Button, Popconfirm, Modal, Input } from 'antd';
import { FormOutlined, DeleteOutlined, EyeOutlined } from '@ant-design/icons';
import TableComponent from '@root/app/components/Table';
import { useRouter } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@root/libs/store';
import { getRoleList } from '@root/libs/store/thunk/user-role';
import { Role } from '@root/libs/store/slices/user-role.slice';
import AddButton from '@root/app/components/AddButton';
import DropdownStatus from '@root/app/components/DropdownStatus';

const RolePage = () => {
  const route = useRouter();
  const dispatch = useAppDispatch();
  const [showModal, setShowModal] = useState(false);
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const [updatedStatus, setUpdatedStatus] = useState<{ [key: number]: string }>({});
  const [limit, setLimit] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchParams, setSearchParams] = useState<{ name?: string }>({});
  const userRoles = useAppSelector((state) => state.userRole.roles);
  const loading = useAppSelector((state) => state.userRole.loading);
  const pagination = useAppSelector((state) => state.userRole.pagination);

  const breadcrumb = [
    {
      href: '#',
      title: 'Settings',
    },
    {
      href: '/settings/roles/user',
      title: 'Role',
    },
  ];

  useEffect(() => {
    dispatch(getRoleList(limit, currentPage, searchParams.name)).catch((error) => {
      console.error('Error fetching roles:', error);
    });
  }, [dispatch, limit, currentPage, searchParams]);

  const handleDelete = (id: string) => {
    // Implement delete logic here
  };

  const handleEdit = (id: string) => {
    route.push(`/settings/role/edit/${id}`);
  };

  const handleView = (id: string) => {
    setShowModal(true);
  };

  const handleStatusChange = (id: number, status: string) => {
    setUpdatedStatus((prev) => ({ ...prev, [id]: status }));
  };

  const handleRowLengthChange = (value: number) => {
    setLimit(value);
    setCurrentPage(1);
  };

  const handleSearch = (value: string) => {
    setSearchParams({ name: value });
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const columns = [
    {
      key: 'rownum',
      dataIndex: 'rownum',
      title: '#',
      render: (_: string, __: any, index: number) => (currentPage - 1) * limit + index + 1,
      sorter: true,
      width: 50,
    },
    {
      key: 'name',
      dataIndex: 'name',
      title: 'Name',
      width: 200,
    },
    {
      key: 'show',
      dataIndex: 'show',
      title: 'Show',
      width: 300,
      render: (text: string, record: any) => (
        <div className='flex justify-center'>
          <Button className='bg-primary/25 rounded-lg text-primary cursor-pointer' onClick={() => handleView(record.id)}>
            <EyeOutlined />
          </Button>
        </div>
      ),
    },
    {
      key: 'status',
      dataIndex: 'status',
      title: 'Status',
      width: 100,
      render: (_: string, record: any) => (
        <div className='flex justify-center'>
          <DropdownStatus
            initialValue={updatedStatus[record.id] || record.status}
            id={record.id}
            statusOptions={[
              { value: 'Tidak Aktif', label: 'Tidak Aktif' },
              { value: 'Aktif', label: 'Aktif' },
            ]}
            onChangeStatus={handleStatusChange}
          />
        </div>
      ),
    },
    {
      key: 'action',
      width: 170,
      title: 'Action',
      render: (text: string, record: any) => (
        <div className='flex gap-2 justify-center'>
          <Button className='bg-primary/25 rounded-lg text-primary cursor-pointer' onClick={() => handleEdit(record.id)}>
            <FormOutlined />
          </Button>

          <Popconfirm title='Delete data' description='Are you sure to delete this data?' onConfirm={() => handleDelete(record.id)} okText='Yes' cancelText='No'>
            <Button className='bg-danger/25 rounded-lg text-danger cursor-pointer'>
              <DeleteOutlined />
            </Button>
          </Popconfirm>
        </div>
      ),
    },
  ];

  return (
    <Suspense>
      <div>
        <div className='mb-5'>
          <div className='flex mb-5 justify-between'>
            <div>
              <p className='font-bold text-lg'>Roles</p>
              <Breadcrumb items={breadcrumb} />
            </div>
            <div>
              <AddButton label='Add Role' destinationPage='/settings/role/create' />
            </div>
          </div>
          <div>
            <TableComponent
              loading={loading}
              bordered
              columns={columns}
              dataSource={userRoles}
              withExport={false}
              withLengthOption={true}
              handleChangeRowLength={handleRowLengthChange}
              handleSearch={handleSearch}
              currentPage={currentPage}
              totalPage={pagination.total}
              perPage={limit}
              handlePageChange={handlePageChange}
              rowSelection={{
                type: 'checkbox',
              }}
            />
          </div>
        </div>
      </div>
      <Modal title='Role Details' visible={showModal} onCancel={() => setShowModal(false)} footer={null}>
        <TableComponent bordered loading={false} rowKey={(record) => record.id} pagination={false} withExport={false} withLengthOption={false} tableOnly={true} className='max-h-[80vh] overflow-y-auto' />
      </Modal>
    </Suspense>
  );
};

export default RolePage;
