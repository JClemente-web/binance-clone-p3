# Entrega P3 — Passo a passo final (3 minutos)

Status do trabalho: **13 de 14 requisitos já OK.** Falta só a imagem de referência no GitHub.
Siga os passos abaixo e a atividade passa a atender **100%** ao enunciado.

---

## O que VOCÊ precisa fazer (só isto)

### 1. Tirar os 2 prints do Binance
- Abra o app **Binance** (ou https://www.binance.com) no celular ou navegador.
- Print da tela de **Login**.
- Print da tela de **Mercados (Markets)**.

### 2. Renomear e colocar na pasta certa
Salve os prints dentro do projeto, na pasta `assets/reference/`, com **exatamente** estes nomes:
- `assets/reference/binance-login.png`
- `assets/reference/binance-dashboard.png`

### 3. Substituir o README e enviar
- Copie o `README.md` (que o Claude gerou) para a **raiz** do projeto, substituindo o antigo.
- Copie o `aplicar-e-enviar.bat` para a **raiz** do projeto também.
- Dê **dois cliques** em `aplicar-e-enviar.bat`.
  (Ele confere as imagens, checa os tipos e faz `git add` + `commit` + `push` sozinho.)

> Se preferir fazer pelo terminal do VSCode em vez do `.bat`, rode na pasta do projeto:
> ```bash
> git add -A
> git commit -m "feat: adiciona imagens de referencia e atualiza README (entrega P3)"
> git push
> ```

### 4. Conferir
Abra https://github.com/JClemente-web/binance-clone-p3 e verifique que as duas imagens
aparecem em `assets/reference/`. Pronto — entrega completa.

---

## Por que o Claude não fez o push sozinho
- O `git push` precisa do **seu login do GitHub** (credenciais suas).
- O print de referência precisa ser o **seu screenshot real** do Binance — é a evidência
  que a atividade exige; não dá pra gerar uma imagem falsa.

Todo o resto (auditoria, README corrigido, script de envio, checagem de tipos) já está pronto.

---

## Checklist final
- [x] React Native + Expo
- [x] TypeScript (.tsx)
- [x] 2 telas (Login + Dashboard)
- [x] Image, Text, TextInput, View
- [x] StyleSheet separado dos .tsx
- [x] Trabalho individual
- [ ] **Imagem de referencia no GitHub  <-- voce conclui nos passos 1 a 3**
