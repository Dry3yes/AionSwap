"use client"
import TokenSelector from "../TokenSelector/TokenSelector"
import "./SwapCard.css"

const SwapCard = ({
  sellAmount,
  setSellAmount,
  buyAmount,
  setBuyAmount,
  sellToken,
  buyToken,
  setShowTokenSelector,
  setSelectingFor,
  swapTokens,
  handleSwap,
  isConnected,
}) => {
  return (
    <div className="swap-container">
      <div className="swap-card">
        {/* Sell Section */}
        <div className="swap-section">
          <label className="swap-label">Sell</label>
          <div className="token-input-container">
            <div className="token-input-row">
              <input
                type="text"
                value={sellAmount}
                onChange={(e) => setSellAmount(e.target.value)}
                placeholder="0"
                className="amount-input"
              />
              <TokenSelector
                token={sellToken}
                type="sell"
                onClick={() => {
                  setSelectingFor("sell")
                  setShowTokenSelector(true)
                }}
              />
            </div>
            <div className="token-info-row">
              <span>$0</span>
              <span>0 {sellToken.symbol}</span>
            </div>
          </div>
        </div>

        {/* Swap Button */}
<div className="swap-button-container">
  <button onClick={swapTokens} className="swap-direction-btn">
    <img
      src="/assets/swap.png"
      alt="Swap"
      className="swap-icon-img"
      style={{ width: 24, height: 24 }}
    />
  </button>
</div>

        {/* Buy Section */}
        <div className="swap-section">
          <label className="swap-label">Buy</label>
          <div className="token-input-container">
            <div className="token-input-row">
              <input
                type="text"
                value={buyAmount}
                onChange={(e) => setBuyAmount(e.target.value)}
                placeholder="0"
                className="amount-input"
              />
              <TokenSelector
                token={buyToken}
                type="buy"
                onClick={() => {
                  setSelectingFor("buy")
                  setShowTokenSelector(true)
                }}
              />
            </div>
            <div className="token-info-row">
              <span>$0</span>
              <span>0 {buyToken.symbol}</span>
            </div>
          </div>
        </div>

        <button onClick={handleSwap} className="get-started-btn">
          <span>{isConnected ? "Swap" : "Get started"}</span>
        </button>
      </div>
    </div>
  )
}

export default SwapCard
