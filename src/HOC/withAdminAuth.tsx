
const withAdminAuth = (WrappedComponent: any) => {
  return (props: any) => {
    const userRole = localStorage.getItem("userRole");
    if (userRole !== "Admin") {
      window.location.replace("/login");
      return null;
    }
    return <WrappedComponent {...props} />;
  };
};

export default withAdminAuth