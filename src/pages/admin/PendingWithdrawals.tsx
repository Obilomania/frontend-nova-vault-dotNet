import styled from "styled-components";
import Table from "react-bootstrap/Table";

const PendingWithdrawals = () => {
    return (
      <PendingWithdraw>
        <h1 className="heading">Pending Withdrawals</h1>
        <Table striped size="sm" className="table">
          <thead>
            <tr>
              <th>No.</th>
              <th>Email</th>
              <th>Amount</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="tbody">
            <tr>
              <td>1</td>
              <td>applicationadmin@gmail.com</td>
              <td>$460.89</td>
              <td>Still Processing</td>
              <td className="call-to-action">
                <button className="approve">Approve</button>
                <button className="delete">Delete</button>
              </td>
            </tr>
          </tbody>
        </Table>
      </PendingWithdraw>
    );
};


const PendingWithdraw = styled.div`
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

export default PendingWithdrawals;
