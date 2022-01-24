@echo off

if [%1]==[]  (
ECHO ECHEC : enter a commit message
goto exit
)
ECHO Building site

npm run build-site -- %1

ECHO Success
:exit
ECHO End build process
