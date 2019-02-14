REM Install angular-cli-ghpages
REM npm install -g angular-cli-ghpages
REM Build Project
rem ng build --prod --base-href https://yamilbracho.github.io/tutorial/ 
REM Publish app
rem ngh -no-silent
echo "#Prueba de Angular" >> README.md
git init
git add .
git commit -m "first commit"
git remote add origin https://github.com/yamilbracho/tutorial.git
git push -u origin master


