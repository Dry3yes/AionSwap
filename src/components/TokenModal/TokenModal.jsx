"use client"

import { useState } from "react"
import { getTokenIcon, getTokenColor, getTokenImage } from "../../utils/tokenUtils"
import "./TokenModal.css"

const TokenModal = ({ tokens, onTokenSelect, onClose, selectingFor, currentSellToken, currentBuyToken }) => {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredTokens = tokens.filter(
    (token) =>
      token.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
      token.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleTokenClick = (token) => {
    // it will make the token can't swap with the same one (S/S)
    if (selectingFor === "sell" && token.symbol === currentBuyToken.symbol) {
      alert("Cannot select the same token for both sell and buy!")
      return
    }
    if (selectingFor === "buy" && token.symbol === currentSellToken.symbol) {
      alert("Cannot select the same token for both sell and buy!")
      return
    }

    onTokenSelect(token)
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title">Select a token</h3>
          <button onClick={onClose} className="modal-close">
            ×
          </button>
        </div>

        <div className="token-search-container">
          <svg className="token-search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search name or paste address"
            className="token-search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="token-list">
          {filteredTokens.map((token) => {
            const isDisabled =
              (selectingFor === "sell" && token.symbol === currentBuyToken.symbol) ||
              (selectingFor === "buy" && token.symbol === currentSellToken.symbol)

            return (
              <button
                key={token.symbol}
                onClick={() => handleTokenClick(token)}
                className={`token-item ${isDisabled ? "token-item-disabled" : ""}`}
                disabled={isDisabled}
              >
                <div className="token-image-container">
                  {getTokenImage(token.symbol) ? (
                    <img
                      src={getTokenImage(token.symbol) || "/placeholder.svg"}
                      alt={token.symbol}
                      className="token-image"
                      onError={(e) => {
                        e.target.style.display = "none"
                        e.target.nextSibling.style.display = "flex"
                      }}
                    />
                  ) : null}
                  <div
                    className="token-icon"
                    style={{
                      background: getTokenColor(token.symbol),
                      display: getTokenImage(token.symbol) ? "none" : "flex",
                    }}
                  >
                    {getTokenIcon(token.symbol)}
                  </div>
                </div>
                <div className="token-details">
                  <div className="token-symbol">{token.symbol}</div>
                  <div className="token-name">{token.name}</div>
                </div>
                <div className="token-balance">
                  <div className="balance-amount">0</div>
                  <div className="balance-usd">$0.00</div>
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default TokenModal
