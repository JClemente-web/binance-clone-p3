# P3 — Aventura 1: O Ataque dos Clones

Clone de **2 telas do app Binance**, em React Native + TypeScript (Expo).
Trabalho individual.

## Telas clonadas

| # | Tela            | Componente                                   | Referência                                  |
|---|------------------|-----------------------------------------------|----------------------------------------------|
| 1 | Login            | `src/screens/Login/LoginScreen.tsx`            | `assets/reference/binance-login.png`          |
| 2 | Dashboard de mercado | `src/screens/MarketDashboard/MarketDashboardScreen.tsx` | `assets/reference/binance-dashboard.png` |

> As imagens de referência (`.png`) ainda precisam ser adicionadas em
> `assets/reference/` — print de tela do app Binance original.

## Requisitos do trabalho

- [x] TypeScript (`.tsx`)
- [x] Usar os componentes `Image`, `Text`, `TextInput` e `View`
- [x] `StyleSheet` em arquivo separado do `.tsx` (nunca estilo inline)
- [ ] Imagem de referência de cada clone versionada em `assets/reference/`
- [x] Trabalho individual

## Estrutura

```
P3-AppClone/
├── App.tsx                          # Componente raiz (alterna Login <-> Dashboard)
├── App.styles.ts
├── app.json                         # Configuração do Expo
├── package.json
├── tsconfig.json
├── assets/
│   └── reference/                   # Prints de referência do Binance (adicionar depois)
└── src/
    ├── theme/
    │   └── colors.ts                 # Paleta inspirada no Binance (dark + amarelo)
    ├── components/
    │   └── CryptoListItem/           # Item reutilizável da lista de criptomoedas
    │       ├── CryptoListItem.tsx
    │       └── CryptoListItem.styles.ts
    └── screens/
        ├── Login/
        │   ├── LoginScreen.tsx
        │   └── LoginScreen.styles.ts
        └── MarketDashboard/
            ├── MarketDashboardScreen.tsx
            └── MarketDashboardScreen.styles.ts
```

Cada tela/componente segue a convenção `Nome.tsx` + `Nome.styles.ts`
(`StyleSheet.create`, nunca `style={{ ... }}` inline com valores estáticos).

## Status atual (esqueleto)

- Login: campos de email/senha (`TextInput`), botão de entrar, logo (`Image`, placeholder remoto por enquanto).
- Dashboard: lista mock de criptomoedas (nome, preço, variação % verde/vermelho, mini-gráfico como `Image` placeholder).
- Sem biblioteca de navegação ainda — `App.tsx` alterna a tela atual com `useState` (suficiente para as 2 telas do trabalho).
- Dados e imagens são placeholders (`TODO` no código) — falta: imagens de referência reais, prints recortados, fidelidade fina de cor/espaçamento/tipografia.

## Como rodar

```bash
npm install
npx expo start
```

Se o `npm install` reclamar de conflito de versões (peer deps), rode:

```bash
npx expo install --fix
```

## Próximos passos

1. Adicionar os prints de referência em `assets/reference/` (`binance-login.png`, `binance-dashboard.png`).
2. Trocar as `Image` placeholder (logo, mini-gráficos) por assets reais.
3. Ajustar cores/espaçamento/tipografia comparando lado a lado com a referência.
4. (Opcional) Conectar a uma API pública de cotações no Dashboard.
