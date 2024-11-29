import { useNavigate } from "react-router-dom";
import Breadcrum from "../../components/breadcrum/Breadcrum";
import Header from "../../components/header/Header";
import "./CalculatorPage.css";

function CalculatorPage() {
  const navigate = useNavigate(); 

  const handleCalculate = () => {
    navigate("/result"); 
  };

  return (
    <div>
      <Header />
      <div className="calculator-container">
        <Breadcrum />
        <div className="content-container">
          <h1>Which age range applies to you?</h1>
          <div className="age-options">
            <div>
              <label>
                <input type="radio" name="age" value="under30" />
                Under 30
              </label>
              <label>
                <input type="radio" name="age" value="between30-34" />
                Between 30 - 34
              </label>
              <label>
                <input type="radio" name="age" value="between35-37" />
                Between 35 - 37
              </label>
            </div>
            <div>
              <label>
                <input type="radio" name="age" value="under30" />
                Under 30
              </label>
              <label>
                <input type="radio" name="age" value="between30-34" />
                Between 30 - 34
              </label>
              <label>
                <input type="radio" name="age" value="between35-37" />
                Between 35 - 37
              </label>
            </div>
          </div>
        </div>
        <div className="scroll-div">
          <h1>Number of IVF Cycles?</h1>
          <input
            type="range"
            id="age-range"
            name="age-range"
            min="0"
            max="4"
            step="1"
          />
        </div>
        <div className="procedures">
          <h1>Have you undergone these procedures before?</h1>
          <div className="procedures-radio-container">
            <div>
              <h2>ICSI Procedure:</h2>
              <label>
                <input type="radio" />
                <span>Yes</span>
              </label>
              <label>
                <input type="radio" />
                No
              </label>
            </div>
            <div>
              <h2>PGT Testing:</h2>
              <label>
                <input type="radio" />
                Yes
              </label>
              <label>
                <input type="radio" />
                No
              </label>
            </div>
          </div>
        </div>
        <div className="medical-conditions">
          <h1>Do you have any of these medical conditions?</h1>
          <div className="checkbox-container">
            <label>
              <input type="checkbox" />
              <span className="custom-checkbox"></span>
              PCOS
            </label>
            <label>
              <input type="checkbox" />
              <span className="custom-checkbox"></span>
              Endometriosis
            </label>
            <label>
              <input type="checkbox" />
              <span className="custom-checkbox"></span>
              Low Ovarian Reserve
            </label>
            <label>
              <input type="checkbox" />
              <span className="custom-checkbox"></span>
              Male Factor Infertility
            </label>
          </div>
          <button className="calculate-btn" onClick={handleCalculate}>
            Calculate
          </button>
        </div>
      </div>
    </div>
  );
}

export default CalculatorPage;
