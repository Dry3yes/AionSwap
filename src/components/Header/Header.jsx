"use client"
import { useState, useEffect } from "react"
import "./Header.css"

const Header = ({ isConnected, walletAddress, connectWallet, disconnectWallet, isScrolled }) => {
  const [connectionMessage, setConnectionMessage] = useState("")

  // Clear connection message after 3 seconds
  useEffect(() => {
    let timer
    if (connectionMessage) {
      timer = setTimeout(() => {
        setConnectionMessage("")
      }, 3000)
    }
    return () => clearTimeout(timer)
  }, [connectionMessage])

  const handleConnectWallet = async () => {
    try {
      await connectWallet()
    } catch (error) {
      if (error.message.includes("User rejected")) {
        setConnectionMessage("Connection cancelled")
      } else {
        setConnectionMessage("Connection failed")
      }
    }
  }

  return (
    <nav className={`nav ${isScrolled ? "nav-scrolled" : ""}`}>
      <div className="nav-left">
        <div className="logo-container">
        <div className="logo-icons">
          <img src="/assets/logo.png" alt="Logo" style={{ width: "120%", height: "120%" }} />
          </div>
          <span className="logo-text">AionSwap</span>
        </div>
        <div className="nav-links">
          <a href="#" className="active">
            Trade
          </a>
          <a href="#">Explore</a>
          <a href="#">Pool</a>
        </div>
      </div>

      <div className="nav-center">
        <div className="search-container">
          <svg className="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input type="text" placeholder="Search tokens" className="search-input" />
          <span className="search-shortcut"></span>
        </div>
      </div>

      <div className="nav-right">
        <button className="get-app-btn">Get the app</button>

        {connectionMessage && <div className="connection-message">{connectionMessage}</div>}

        {isConnected ? (
          <div className="wallet-info">
            <div className="wallet-address">
              {walletAddress.slice(0, 4)}...{walletAddress.slice(-4)}
            </div>
            <button onClick={disconnectWallet} className="btn btn-disconnect">
              Switch Wallet
            </button>
          </div>
        ) : (
          <button onClick={handleConnectWallet} className="btn btn-connect">
            Connect Phantom
          </button>
        )}

      </div>
    </nav>
  )
}

export default Header
