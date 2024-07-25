import styled from "styled-components";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { all_applicationUser } from "../../redux/adminRedux/adminSlice";
import { useNavigate } from "react-router-dom";

const AllAppUser = ({ appUsers }: any) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  if (appUsers) {
    dispatch(all_applicationUser(appUsers));
  }
  const appApplicationUsers = useSelector(
    (state: any) => state.admin.allAppUsers
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
          <>
            {appApplicationUsers.map((user: any, index: any) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user?.fullname}</td>
                <td>{user?.email}</td>
                <td className="call-to-action">
                  <button
                    className="info"
                    onClick={() => navigate(`/getParticularUser/${user.id}`)}
                  >
                    View
                  </button>
                  {user?.isBlocked || user?.isBlocked === true ? (
                    <button className="approve">Un-Block User</button>
                  ) : (
                    <button className="delete">Block User</button>
                  )}
                </td>
              </tr>
            ))}
          </>
        </tbody>
      </Table>
    </AllUsers>
  );
};

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
    .info {
      font-size: 0.8rem;
      background: #00a2ff;
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
export default AllAppUser;
