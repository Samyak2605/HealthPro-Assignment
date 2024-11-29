import Header from "../../components/header/Header";
import "./ResultPage.css";
import { Link } from "react-router-dom";
import womenExpectingBaby from "../../assets/images/herosection/black-white-portrait-woman-expecting-baby (3) (1).png";
import pointer from "../../assets/images/herosection/Group 1000002382.png";
import Breadcrum from "../../components/breadcrum/Breadcrum";
import CircularProgress from "../../components/CircularProgressbar/CircularProgressbar";
function ResultPage() {
  return (
    <>
      <Header />
      <div className="hero-section-container">
        <div className="hero-section">
          <div>
            <Breadcrum />
            <div className="content">
              <Link to="/">
                <h1 className="calculator-redirect">
                  &larr; IVF Success Rate Calculator
                </h1>
              </Link>
              <div className="header-content">
                <img
                  src={pointer}
                  className="pointer-icon"
                  alt="Pointer Icon"
                />
                <h1 className="hero-heading">
                  Your estimated IVF Success Rate is
                </h1>
              </div>
              <div className="circularProgress">
                <CircularProgress />
              </div>
            </div>
            <p className="ivf-cycle-count">With 1 IVF Cycle</p>
          </div>
          <div className="image-container">
            <div className="circle-overlay"></div>
            <img src={womenExpectingBaby} alt="Woman Expecting Baby" />
          </div>
          <div className="private-consultation">
            <button>Start private consultation</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default ResultPage;