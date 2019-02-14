REM Install angular-cli-ghpages
REM npm install -g angular-cli-ghpages
REM Build Project
rem ng build --prod --base-href https://yamilbracho.github.io/tutorial/ 
REM Publish app
rem ngh -no-silent
rem echo "#Prueba de Angular" >> README.md
git init
git add .
git commit -m "Prueba de Commit"
rem git remote add origin https://github.com/yamilbracho/tutorial.git
git push -u --force origin master


