import "./ContentSections.css"

const ContentSections = () => {
  return (
    <div className="content-sections">
      {/* Go direct to DeFi */}
      <div className="section">
        <h2 className="section-title">Go direct to DeFi</h2>
        <div className="grid-2">
          <div className="card card-blue">
            <div className="card-header">
              <div className="card-icon card-icon-blue">🌐</div>
              <span className="card-badge">Web app</span>
            </div>
            <h3 className="card-title">Swapping made simple</h3>
            <p className="card-description">Access thousands of tokens on 12+ chains.</p>
            <div className="token-list-card">
              <div className="token-row">
                <span>◎ Solana SOL</span>
                <span className="token-price">$98.45 +2.34%</span>
              </div>
              <div className="token-row">
                <span>💵 USD Coin USDC</span>
                <span className="token-price">$1.00 +0.00%</span>
              </div>
              <div className="token-row">
                <span>⚡ Raydium RAY</span>
                <span className="token-price">$1.85 +5.67%</span>
              </div>
              <div className="token-row">
                <span>🐋 Orca ORCA</span>
                <span className="token-price">$3.42 +1.23%</span>
              </div>
            </div>
          </div>

          <div className="card card-purple">
            <div className="card-header">
              <div className="card-icon card-icon-pink">📱</div>
              <span className="card-badge">Uniswap wallet</span>
            </div>
            <h3 className="card-title">The wallet built for swapping</h3>
            <p className="card-description">Available on iOS and Android.</p>
            <div className="portfolio-display">
              <div className="portfolio-value">$2,822.39</div>
              <div className="portfolio-label">Portfolio value</div>
              <div style={{ marginTop: "1rem", display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                <div style={{ width: "2rem", height: "2rem", borderRadius: "50%", background: "#627eea" }}></div>
                <div style={{ width: "2rem", height: "2rem", borderRadius: "50%", background: "#f7931a" }}></div>
                <div style={{ width: "2rem", height: "2rem", borderRadius: "50%", background: "#2775ca" }}></div>
                <div style={{ width: "2rem", height: "2rem", borderRadius: "50%", background: "#ff6bff" }}></div>
                <div style={{ width: "2rem", height: "2rem", borderRadius: "50%", background: "#00d4aa" }}></div>
                <div style={{ width: "2rem", height: "2rem", borderRadius: "50%", background: "#1652f0" }}></div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "2rem" }}>
          <div className="card" style={{ background: "linear-gradient(135deg, #00d4aa, #00b894)" }}>
            <div className="card-header">
              <div className="card-icon" style={{ background: "rgba(255, 255, 255, 0.2)" }}>
                🔧
              </div>
              <span className="card-badge">Developer docs</span>
            </div>
            <h3 className="card-title">Build the next generation of open applications and tools</h3>
            <div style={{ marginTop: "1rem" }}>
              <button
                style={{
                  background: "rgba(255, 255, 255, 0.2)",
                  border: "none",
                  padding: "0.75rem 1.5rem",
                  borderRadius: "12px",
                  color: "#ffffff",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                Developer docs
              </button>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "2rem" }}>
          <div className="card" style={{ background: "linear-gradient(135deg, #8b5cf6, #a855f7)" }}>
            <div className="card-header">
              <div className="card-icon card-icon-purple">💧</div>
              <span className="card-badge">Liquidity</span>
            </div>
            <h3 className="card-title">Provide liquidity to pools on the Uniswap Protocol and earn fees on swaps</h3>
            <div style={{ marginTop: "1rem", display: "flex", gap: "1rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <div
                  style={{
                    width: "2rem",
                    height: "2rem",
                    borderRadius: "50%",
                    background: "#627eea",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.8rem",
                  }}
                >
                  Ξ
                </div>
                <div
                  style={{
                    width: "2rem",
                    height: "2rem",
                    borderRadius: "50%",
                    background: "#2775ca",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.8rem",
                  }}
                >
                  $
                </div>
                <div
                  style={{
                    width: "2rem",
                    height: "2rem",
                    borderRadius: "50%",
                    background: "#ff6bff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.8rem",
                  }}
                >
                  🦄
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trusted by millions */}
      <div className="section">
        <h2 className="section-title">Trusted by millions</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem" }}>
          <div className="card card-gray stat-card">
            <div className="stat-label">All time volume</div>
            <div className="stat-value">$2.9T</div>
          </div>
          <div className="card card-gray stat-card">
            <div className="stat-label">All time swaps</div>
            <div className="stat-value">119.0M</div>
          </div>
          <div className="card card-gray stat-card">
            <div className="stat-label">All time LP fees</div>
            <div className="stat-value">$4.9B</div>
          </div>
          <div className="card card-gray stat-card">
            <div className="stat-label">24H volume</div>
            <div className="stat-value stat-value-green">$1.0B</div>
          </div>
        </div>
      </div>

      {/* Connect with us */}
      <div className="section">
        <h2 className="section-title">Connect with us</h2>
        <div className="grid-2 grid-3">
          <div className="card card-orange">
            <div className="card-icon card-icon-orange">🎧</div>
            <h3 className="card-title">Help center</h3>
            <p className="card-description">Get support</p>
          </div>
          <div className="card card-gray">
            <div className="card-icon card-icon-gray">📝</div>
            <h3 className="card-title">Blog</h3>
            <p className="card-description">Insights and news from the team</p>
          </div>
          <div className="card card-purple">
            <div className="card-icon card-icon-purple">💬</div>
            <h3 className="card-title">Stay connected</h3>
            <p className="card-description">Follow @Uniswap on X for the latest updates</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContentSections
