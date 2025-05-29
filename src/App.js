"use client"

import { useState, useEffect } from "react"
import "./App.css"
import Header from "./components/Header/Header"
import HeroSection from "./components/HeroSection/HeroSection"
import ContentSections from "./components/ContentSections/ContentSections"
import TokenModal from "./components/TokenModal/TokenModal"
import ScrollIndicator from "./components/ScrollIndicator/ScrollIndicator"
import { tokens } from "./data/tokens"

function App() {
  const [walletAddress, setWalletAddress] = useState("")
  const [isConnected, setIsConnected] = useState(false)
  const [sellAmount, setSellAmount] = useState("")
  const [buyAmount, setBuyAmount] = useState("")
  const [sellToken, setSellToken] = useState({ symbol: "SOL", name: "Solana" })
  const [buyToken, setBuyToken] = useState({ symbol: "", name: "Select token" })
  const [showTokenSelector, setShowTokenSelector] = useState(false)
  const [selectingFor, setSelectingFor] = useState("buy")
  const [isScrolled, setIsScrolled] = useState(false)
  const [walletError, setWalletError] = useState("")

  // Handle scroll for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const connectWallet = async () => {
    try {
      setWalletError("")
      if (window.solana && window.solana.isPhantom) {
        const response = await window.solana.connect()
        setWalletAddress(response.publicKey.toString())
        setIsConnected(true)
        return true
      } else {
        window.open("https://phantom.app/", "_blank")
        return false
      }
    } catch (error) {
      if (error.message && error.message.includes("User rejected")) {
        setWalletError("Connection cancelled by user")
        console.log("Connection cancelled: User rejected the connection request")
      } else {
        setWalletError("Failed to connect wallet")
        console.error("Error connecting wallet:", error)
      }
      return false
    }
  }

  const disconnectWallet = () => {
    setWalletAddress("")
    setIsConnected(false)
    // Reset wallet connection completely
    if (window.solana) {
      window.solana.disconnect()
    }
    // Clear any cached wallet data
    localStorage.removeItem("walletName")
    // Force page reload to ensure clean state
    window.location.reload()
  }

  const handleTokenSelect = (token) => {
    // Prevent selecting the same token for both sell and buy
    if (selectingFor === "sell") {
      if (token.symbol === buyToken.symbol) {
        alert("Cannot select the same token for both sell and buy!")
        return
      }
      setSellToken(token)
    } else {
      if (token.symbol === sellToken.symbol) {
        alert("Cannot select the same token for both sell and buy!")
        return
      }
      setBuyToken(token)
    }
    setShowTokenSelector(false)
  }

  const swapTokens = () => {
    const tempToken = sellToken
    setSellToken(buyToken.symbol ? buyToken : { symbol: "", name: "Select token" })
    setBuyToken(tempToken)

    const tempAmount = sellAmount
    setSellAmount(buyAmount)
    setBuyAmount(tempAmount)
  }

  const handleSwap = () => {
    if (!isConnected) {
      connectWallet()
      return
    }

    if (!buyToken.symbol) {
      alert("Please select a token to buy")
      return
    }

    if (sellToken.symbol === buyToken.symbol) {
      alert("Cannot swap the same token!")
      return
    }

    alert("Swap functionality would be implemented here with Solana programs")
  }

  return (
    <div className="app-container">
      <Header
        isConnected={isConnected}
        walletAddress={walletAddress}
        connectWallet={connectWallet}
        disconnectWallet={disconnectWallet}
        isScrolled={isScrolled}
      />

      <HeroSection
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

      <ScrollIndicator />

      <ContentSections />

      {showTokenSelector && (
        <TokenModal
          tokens={tokens}
          onTokenSelect={handleTokenSelect}
          onClose={() => setShowTokenSelector(false)}
          selectingFor={selectingFor}
          currentSellToken={sellToken}
          currentBuyToken={buyToken}
        />
      )}
    </div>
  )
}

export default App
