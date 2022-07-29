import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { fectDataListUser } from './reducer/actions';
import Pagination from './Pagination';
import queryString from "query-string"
import './style.css'
export default function AddUser(props) {
  const { Search } = Input;
  const dispatch = useDispatch();
  const prop = useSelector((state) => state.listUserReducer)
 
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 11,
    totalCount: 12,
  })
  const [filters, setFilter] = useState({
    soTrang: 1,
  })
  useEffect(() => {
    const paramsString = queryString.stringify(filters)
    dispatch(fectDataListUser(paramsString))
  }, [filters])

  const renderListUser = () => {
    return prop.data?.items.map((user, index) => {
      return <tr key={index}>
        <td>{index}</td>
        <td>{user.taiKhoan}</td>
        <td>{user.hoTen}</td>
        <td>{user.email}</td>
        <td>{user.soDT}</td>
        <td>{user.matKhau}</td>
        <td>{user.maLoaiNguoiDung}</td>
        <td>
          <i class="fas fa-trash"></i>
          <i class="fas fa-edit"></i>
        </td>
      </tr>
    })
  }
  const handlePageChange = (newPage) => {
    console.log(newPage);
    setFilter({
      soTrang:newPage,
    })
  }
  return (
    <div className='grid wide'>
      <div className='row'>
        <div className='col l-12'>
          <h1 style={{ textAlign: 'center' }}>Quản lý người dùng</h1>
          <Button className='mb-2' variant="contained">Thêm người dùng</Button>
          <Search className='mb-2' placeholder="Tìm kiếm" enterButton />
          <div className='table__user'>
            <table>
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Tài khoản</th>
                  <th>Họ Tên</th>
                  <th>Email</th>
                  <th>Số điện thoại</th>
                  <th>Mật khẩu</th>
                  <th>Mã loại người dùng</th>
                  <th>Hành động</th>
                </tr>
              </thead>
              <tbody>
                {renderListUser()}
              </tbody>
            </table>
          </div>
          <Pagination
            pagination={pagination}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  )
}
