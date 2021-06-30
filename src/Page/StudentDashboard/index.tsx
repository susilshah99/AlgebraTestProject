import React from 'react'
import { Table} from "antd";
import styled from '@emotion/styled'

const StyledTable = styled(Table)`
  .ant-table-row,
  .ant-table-row-level-0 {
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000008;
    // border: 1px solid #008ce933;
  }
  .ant-table-thead > tr > th {
    background: #f9fcff 0% 0% no-repeat padding-box;
    font-size: 16px;
  }
  .ant-table-tbody > tr > td {
    // border-bottom: 1px solid #008ce930;
  }
  .ant-table-row {
    box-shadow: 1px 1px 10px #1c3faa1a !important;
  }
  .ant-table-tbody > tr:last-child {
    & > td {
      border-bottom: none;
    }
  }
`;

const StudentDashboard=()=>{

                const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
    questions:'5',
    totaltime:'15s'
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
questions:'5',
    totaltime:'15s'
  },
    {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
questions:'5',
    totaltime:'15s'
  },
    {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
questions:'5',
    totaltime:'15s'
  },
    {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
questions:'5',
    totaltime:'15s'
  },
];

                const columns = [
  {
    title: 'Algebra Topic',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Attempted',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Passed',
    dataIndex: 'address',
    key: 'address',
  },
    {
    title: 'Question Attempted',
    dataIndex: 'questions',
    key: 'address',
  },
     {
    title: 'Total time',
    dataIndex: 'totaltime',
    key: 'address',
  },
];

                return(
                                <React.Fragment>
                                         <StyledTable pagination={false} dataSource={dataSource} columns={columns}/>
                                </React.Fragment>
                )
}
export default StudentDashboard