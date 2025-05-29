"use client"
import { getTokenIcon, getTokenColor, getTokenImage } from "../../utils/tokenUtils"
import "./TokenSelector.css"

const TokenSelector = ({ token, type, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`token-selector ${type === "sell" ? "token-selector-sell" : "token-selector-buy"}`}
    >
      {token.symbol && getTokenImage(token.symbol) && (
        <img
          src={getTokenImage(token.symbol) || "/placeholder.svg"}
          alt={token.symbol}
          className="token-selector-image"
          onError={(e) => {
            e.target.style.display = "none"
            e.target.nextSibling.style.display = "flex"
          }}
        />
      )}
      {token.symbol && (
        <div
          className="token-icon"
          style={{
            background: getTokenColor(token.symbol),
            display: getTokenImage(token.symbol) ? "none" : "flex",
          }}
        >
          {getTokenIcon(token.symbol)}
        </div>
      )}
      <span>{token.symbol || "Select token"}</span>
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M7 10l5 5 5-5z" />
      </svg>
    </button>
  )
}

export default TokenSelector
