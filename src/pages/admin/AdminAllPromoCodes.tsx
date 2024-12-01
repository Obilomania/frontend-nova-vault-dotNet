import React, { useEffect, useState } from "react";
import Loader from "../../components/Loader";
import { adminDeletePromoCode, adminViewAllPromoCode } from "../../redux/adminRedux/adminService";

const AdminAllPromoCodes = () => {
    const [codes, setCodes] = useState<any>([]);
    
  useEffect(() => {
    adminViewAllPromoCode().then((data) => {
      setCodes(data);
    });
  }, []);

  console.log(codes.data)

  let allThePromoCode = codes?.data;

    const deletepromoCode = async (id:any) => {
      await adminDeletePromoCode(id);
      window.location.reload();
    };

  return (
    <>
      {/* {!codes?.allPromoCodes && <Loader />} */}
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">No.</th>
            <th scope="col">Promo Code Title</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {allThePromoCode?.length > 0 ? (
            allThePromoCode?.map((code: any, index: any) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <th scope="row">{code?.thePromoCode}</th>
                <td className="call-to-action">
                  <button
                    className="btn-danger btn"
                      onClick={() => deletepromoCode(code.id)}
                  >
                    DELETE
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr className="table-body the-row one no-transaction">
              <td className="text-danger"></td>
              <td className="text-danger">No Promo Codes, Create One</td>
              <td className="text-danger"></td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default AdminAllPromoCodes;
