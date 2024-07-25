import styled from 'styled-components';
import Table from "react-bootstrap/Table";
import { useSelector } from 'react-redux';
import CurrentUser from '../../interfaces/currentUserModel';

const AllAppUser = () => {
  const userInfo: CurrentUser = useSelector(
    (state: any) => state.persistedReducer.auth
  );
  return (
    <AllUsers>
      <h1 className="heading">All App Users</h1>
      <Table striped size="sm" className="table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Email</th>
            <th>FullName</th>
            <th></th>
          </tr> 
        </thead>
        <tbody className="tbody">
          <tr>
            <td>1</td>
            <td>applicationadmin@gmail.com</td>
            <td>Application Tester</td>
            <td className="call-to-action">
              {userInfo?.isBlocked || userInfo?.isBlocked === true ?
              <button className="approve">Un-Block User</button>
                : 
              <button className="delete">Block User</button>
               }
            </td>
          </tr>
        </tbody>
      </Table>
    </AllUsers>
  );
}


const AllUsers = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  .table {
    font-size: 0.8rem;
  }
  .call-to-action {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    .approve {
      font-size: 0.8rem;
      background: green;
      color: white;
      padding: 0.2rem 1rem;
      letter-spacing: 1px;
      cursor: pointer;
    }
    .delete {
      background: red;
      color: white;
      font-size: 0.8rem;
      padding: 0.2rem 1rem;
      letter-spacing: 1px;
      cursor: pointer;
    }
  }
`;
export default AllAppUser