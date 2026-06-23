# P3 — Aventura 1: O Ataque dos Clones

Clone de **2 telas do app Binance**, em React Native + TypeScript (Expo).
Trabalho individual.

## Telas clonadas

| # | Tela              | Componente                                                        | Referência                                       |
|---|--------------------|--------------------------------------------------------------------|---------------------------------------------------|
| 1 | Login              | `src/screens/Login/LoginScreen.tsx`                                 | `assets/reference/binance-login.png`               |
| 2 | Portfolio Margin   | `src/screens/PortfolioMargin/PortfolioMarginScreen.tsx`             | `assets/reference/binance-portfolio-margin.png`    |

As imagens de referência (prints do app Binance original) estão versionadas em
`assets/reference/`.

## Requisitos do trabalho

- [x] TypeScript (`.tsx`)
- [x] Usar os componentes `Image`, `Text`, `TextInput` e `View`
- [x] `StyleSheet` em arquivo separado do `.tsx` (nunca estilo inline)
- [x] Imagem de referência de cada clone versionada em `assets/reference/`
- [x] Trabalho individual

## Estrutura

```
binance-clone-p3/
├── App.tsx                          # Componente raiz (alterna Login <-> Portfolio Margin)
├── App.styles.ts
├── app.json                         # Configuração do Expo
├── package.json
├── tsconfig.json
├── assets/
│   └── reference/
│       ├── binance-login.png
│       └── binance-portfolio-margin.png
└── src/
    ├── theme/
    │   └── colors.ts                 # Paleta (card claro do login + dashboard escuro)
    ├── components/
    │   └── AssetAllocationChart/     # Donut chart de alocação de ativos (react-native-svg)
    │       ├── AssetAllocationChart.tsx
    │       └── AssetAllocationChart.styles.ts
    └── screens/
        ├── Login/
        │   ├── LoginScreen.tsx
        │   └── LoginScreen.styles.ts
        └── PortfolioMargin/
            ├── PortfolioMarginScreen.tsx
            └── PortfolioMarginScreen.styles.ts
```

Cada tela/componente segue a convenção `Nome.tsx` + `Nome.styles.ts`
(`StyleSheet.create`, nunca `style={{ ... }}` inline com valores estáticos).

## Telas

- **Login**: card claro com logo, título "Log in", ícone de QR, campo
  "Email/Phone number" (`TextInput`), botão amarelo "Next", divisor "or",
  botões "Continue with Google/Apple/Telegram" e link "Create a Binance Account".
- **Portfolio Margin**: tema escuro com barra superior (logo + navegação +
  botão Deposit), menu lateral (Dashboard, Assets > Overview/Spot/Isolated
  Margin/Portfolio Margin/Third-Party Wallet, Orders, etc.), card de Equity,
  métricas (UniMMR, Available Margin, Total Debt, Unrealized PNL), gráfico de
  alocação de ativos, abas (Total/Cross Margin/USDS-M/COIN-M) e tabela com a
  linha USDT.

## Como rodar

```bash
npm install
npx expo start
```

Se o `npm install` reclamar de conflito de versões (peer deps), rode:

```bash
npx expo install --fix
```

Para abrir no navegador (mais fiel ao layout do Portfolio Margin, que é uma
tela de desktop):

```bash
npx expo start --web
```
