# tp_eslint

## 2. Test d’ESLint sur un fichier JavaScript (index.js)

### 2.2
popes@LAPTOP-IVJGI2IE MINGW64 /c/ESGI/3A/Outils et pratiques de code/tp_note/tp_eslint_git (main)
$ npx eslint index.js 

C:\ESGI\3A\Outils et pratiques de code\tp_note\tp_eslint_git\index.js
   7:7   error  'unusedVar' is assigned a value but never used  no-unused-vars
  19:7   error  'message' is assigned a value but never used    no-unused-vars
  21:5   error  Unexpected constant condition                   no-constant-condition
  25:7   error  'tableau' is assigned a value but never used    no-unused-vars
  36:10  error  'toutFaire' is defined but never used           no-unused-vars
  56:7   error  'd' is assigned a value but never used          no-unused-vars
  58:10  error  'fetchData' is defined but never used           no-unused-vars
  63:7   error  'nombres' is assigned a value but never used    no-unused-vars
  67:1   error  Unexpected 'debugger' statement                 no-debugger

✖ 9 problems (9 errors, 0 warnings)

### 2.3 Correction 
suppression des variables non utiliées

## 3.Intégration avec Git Hooks (Husky) 


