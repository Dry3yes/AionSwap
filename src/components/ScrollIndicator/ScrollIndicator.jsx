"use client"

import { useState, useEffect } from "react"
import "./ScrollIndicator.css"

const ScrollIndicator = () => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      // Hide indicator when user scrolls down
      setIsVisible(window.scrollY < 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  if (!isVisible) return null

  return (
    <div className="scroll-indicator" onClick={scrollToContent}>
      <span className="scroll-text">Scroll to learn more</span>
      <div className="scroll-arrow">
        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7 10l5 5 5-5z" />
        </svg>
      </div>
    </div>
  )
}

export default ScrollIndicator
