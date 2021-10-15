import {useState} from 'react'
import { useDispatch } from 'react-redux';
import { editBuyingPower } from '../../store/session';
import { CgInfinity } from 'react-icons/cg'



function formatThousands(n, dp) {
  let s = "" + Math.floor(n),
    d = n % 1,
    i = s.length,
    r = "";
  while ((i -= 3) > 0) {
    r = "," + s.substr(i, 3) + r;
  }
  return (
    s.substr(0, i + 3) +
    r +
    (d ? "." + Math.round(d * Math.pow(10, dp || 2)) : "")
  );
}

function BuyingPower({ user, isPos }) {
    const [openBuyingPower, setOpenBuyingPower] = useState(false);
    const [depositAmount, setDepositAmount] = useState(null)
    const [error, setError] = useState(null)
    const [summaryOpen, setSummaryOpen] = useState(false)
    const dispatch = useDispatch()

    function depositFunds(){
        if(depositAmount === "$0.00" && depositAmount === 0){
            setError("Please deposit an amount greater than zero")
        }else{
            const buyingPower = +user.buyingPower + +depositAmount
            setError(null)
            dispatch(editBuyingPower(user.id, buyingPower))
            setDepositAmount("$0.00")
            setOpenBuyingPower(false)
            setSummaryOpen(false)
        }
    }

    function handleSumOpen(){
      setOpenBuyingPower(!openBuyingPower)
      setSummaryOpen(!summaryOpen)
    }

    
  return (
    <div className={`${summaryOpen ? "sumOpen" : ""} buying-power-container`}>
      <details className="buying-power-wrapper">
        <summary
          onClick={handleSumOpen}
          className={`${summaryOpen ? "sumBorder" : ""}`}
        >
          <p>Buying power</p>
          {summaryOpen ? "" : <p>${formatThousands(user.buyingPower)}</p>}
        </summary>
        {openBuyingPower && (
          <div className="bp-slider">
            <div className="bp-info">
              <p>Brokerage Cash</p>
              <CgInfinity className="infinity" />
            </div>
            <div className="bp-info">
              <p>Buying Power</p>
              <p className="bold-p">${formatThousands(user.buyingPower)}</p>
            </div>
            <div className="bp-input">
              <p>Amount</p>
              {error && <p>{error}</p>}
              <input
                className={`${isPos}-bp-input1`}
                type="number"
                placeholder="$0.00"
                onChange={(e) => setDepositAmount(e.target.value)}
                value={depositAmount}
              />
            </div>
            <button className={`${isPos}-bp-button`} onClick={depositFunds}>
              Deposit Funds
            </button>
          </div>
        )}
      </details>
    </div>
  );
}

export default BuyingPower;
