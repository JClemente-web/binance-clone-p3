@echo off
REM ============================================================
REM  P3 - Aplica as correcoes da auditoria e envia ao GitHub.
REM  Como usar:
REM   1) Copie ESTE arquivo e o README.md para a pasta raiz
REM      do projeto binance-clone-p3 (onde fica o App.tsx).
REM   2) Coloque os 2 prints do Binance em assets\reference\ :
REM        - binance-login.png      (tela de Login)
REM        - binance-dashboard.png  (tela de Mercados)
REM   3) De dois cliques neste arquivo (ou rode no terminal).
REM ============================================================

echo.
echo === [1/4] Verificando imagens de referencia... ===
if not exist "assets\reference\binance-login.png" (
  echo [ERRO] Faltando: assets\reference\binance-login.png
  echo Coloque o print da tela de LOGIN do Binance com esse nome e rode de novo.
  pause
  exit /b 1
)
if not exist "assets\reference\binance-dashboard.png" (
  echo [ERRO] Faltando: assets\reference\binance-dashboard.png
  echo Coloque o print da tela de MERCADOS do Binance com esse nome e rode de novo.
  pause
  exit /b 1
)
echo OK: as duas imagens foram encontradas.

echo.
echo === [2/4] Checando tipos do TypeScript (tsc --noEmit)... ===
call npx tsc --noEmit
if errorlevel 1 (
  echo [AVISO] O tsc reportou erros acima. Revise antes de enviar.
  pause
)

echo.
echo === [3/4] Registrando alteracoes no Git... ===
git add -A
git commit -m "feat: adiciona imagens de referencia e atualiza README (entrega P3)"

echo.
echo === [4/4] Enviando para o GitHub... ===
git push

echo.
echo ============================================================
echo  CONCLUIDO! Confira em:
echo  https://github.com/JClemente-web/binance-clone-p3
echo ============================================================
pause
