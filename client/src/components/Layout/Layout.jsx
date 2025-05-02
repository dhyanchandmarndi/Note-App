import Navbar from "../Navbar/Navbar";

const Layout = ({ children }) => {
  // You could fetch userInfo from context or props
  const userInfo = { name: "Demo User" };

  const onSearchNote = (query) => {
    console.log("Search for:", query);
  };

  const handleClearSearch = () => {
    console.log("Clear search");
  };

  return (
    <>
      <Navbar
        userInfo={userInfo}
        onSearchNote={onSearchNote}
        handleClearSearch={handleClearSearch}
      />
      <main>{children}</main>
    </>
  );
};

export default Layout;
