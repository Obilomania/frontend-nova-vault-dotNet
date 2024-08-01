
const withAuth = (WrappedComponent:any) => {
    return (props: any) => {
        const userRole = localStorage.getItem("userRole");
      if (!userRole || userRole === "") {
          
          window.location.replace("/login");
          return null;
        }
        return <WrappedComponent {...props} />
    }
}

export default withAuth