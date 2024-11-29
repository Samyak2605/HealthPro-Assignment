import { useEffect, useState } from "react";
import "./Breadcrum.css";
import { useLocation, Link } from "react-router-dom";
function Breadcrum() {
  const path = useLocation().pathname;
  const [isResultPage, setIsResultPage] = useState(false);
  useEffect(() => {
    if (path === "/result") {
      setIsResultPage(true);
    }
  }, [path]);
  return (
    <>
      <div className="breadcrum-container hidden sm:flex">
        <Link to="/" className="breadcrumb-link">Home</Link>
        <span>/</span>
        <span className="breadcrumb-text">IVF Success Rate Calculator</span>
        {isResultPage && (
          <>
            <span>/</span>
            <span>Result</span>
          </>
        )}
      </div>
    </>
  );
}
export default Breadcrum;