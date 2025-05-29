import { tokens } from "../data/tokens"

export const getTokenIcon = (symbol) => {
  const token = tokens.find((t) => t.symbol === symbol)
  return token ? token.icon : "🪙"
}

export const getTokenColor = (symbol) => {
  const token = tokens.find((t) => t.symbol === symbol)
  return token ? token.color : "#6b7280"
}

export const getTokenImage = (symbol) => {
  const token = tokens.find((t) => t.symbol === symbol)
  return token ? token.image : null
}
