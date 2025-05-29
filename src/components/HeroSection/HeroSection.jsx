import SwapCard from "../SwapCard/SwapCard"
import "./HeroSection.css"

const HeroSection = ({
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
    <div className="hero-section">
      <div className="background-effects">
        <div className="bg-effect-1"></div>
        <div className="bg-effect-2"></div>
        <div className="bg-effect-3"></div>
        <div className="bg-effect-4"></div>
      </div>

      <div className="hero-content">
        <div className="hero-title">
          <h1>
            Swap anytime,
            <br />
            anywhere.
          </h1>
        </div>

        <SwapCard
          sellAmount={sellAmount}
          setSellAmount={setSellAmount}
          buyAmount={buyAmount}
          setBuyAmount={setBuyAmount}
          sellToken={sellToken}
          buyToken={buyToken}
          setShowTokenSelector={setShowTokenSelector}
          setSelectingFor={setSelectingFor}
          swapTokens={swapTokens}
          handleSwap={handleSwap}
          isConnected={isConnected}
        />

   
      </div>
    </div>
  )
}

export default HeroSection
