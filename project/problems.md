PROBLEMES

---

Build failed -> ‘Cordova/CDVViewController.h’ file not found (error 65)
- Refaire un git clone dans le dossier de destination et ne pas changer de place les fichiers
- Installer ionic et executer " ionic resources " dans le dossier racine du projet
- executer " ionic platform remove ios " puis " ionic platform add ios "
- retester le build

---

Packages à télécharger pour android

---

Problèmes d'émulation pour android (PC)
- éxécuter android.bat dans le dossier C:\Users\[votre session]\AppData\Local\Android\sdk\tools
- créer un AVD (Tools -> AVDs Manager)
- onget device définitions -> choisir device -> create avd
- choisir skin / front - back camera / emulation options -> host gpu

---

Problème pour la géolocalisation qui necessite d'être mise ( la partie script ) dans le app.js

---

Problème pour faire fonctionner le plugin orientation dans un controller -> Il suffisait d'ajouter un EventListener "Deviceready"

---

