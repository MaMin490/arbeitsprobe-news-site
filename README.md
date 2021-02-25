
# Requirements

-   Node.js: >=14.15
-   Yarn: >=1.22

# Installation

1. Install dependencies: `yarn install`
1. Start application: `yarn dev`
1. Have fun

# Testaufgabe

Bitte versuche die folgende Aufgabe in etwa 4-5 Stunden zu lösen. Wichtig ist dabei nicht, dass die Lösung vollständig und perfekt lauffähig ist. Uns geht es viel mehr darum zu sehen, wie Du Probleme angehst und Code strukturierst. Wenn also bestimmte Features nicht gelöst werden können macht das nichts. Versuche einfach so viele der Punkte wie möglich zu erledigen. Die Zeit wird natürlich nicht gestoppt, die Angabe dient Dir lediglich als grober Hinweis, wie viel Zeit wir für die Lösung der Aufgabe schätzen würden.
Das Ergebnis packst Du in eine ZIP Datei und schickst sie an mich per Email zurück. Ich gebe Dir dann so Bald wie möglich Feedback.

Die Testaufgabe:

Erstelle das Frontend einer kleinen dynamischen News-Website. Die Website soll aus den folgenden Unterseiten bestehen:

News Übersicht: Die Seite zeigt eine kleine Tabelle aller verfügbaren News-Meldungen. Die Einträge müssen per AJAX aus einer JSON Datei geladen werden und sich dynamisch blättern lassen. Für die Aufgabe sollen beliebige fiktive Meldungen in ausreichender Menge fest in die JSON Datei geschrieben werden. Später würden die Daten natürlich aus einem CMS oder einer Datenbank kommen, für die Aufgabe reicht aber eine statische Datei.
Für ein blättern darf also kein voller Page-Reload nötig sein.

News Details: Klickt ein Besucher in der Übersicht auf eine News-Meldung, gelangt er auf die Detailansicht. Hier wird die ausgewählte Meldung nochmal vollständig und alleine dargestellt. Die Detailansicht soll dabei auch eine dynamische Seite sein und keine statische HTML Seite, idealerweise Teil der gleichen Anwendung wie auch die Übersicht.

Design und Layout der Website ist nicht wichtig, es sollte lediglich ein Responsive Layout verwendet werden und beispielhaft einige Effekte zeigen, durch die sich dynamische Frontends von klassischen statischen Websites abheben können. Das Layout sollte sich in Abhängigkeit der Browser-Größe anpassen und jeweils auf dem PC, dem Tablet und dem Smartphone unterschiedlich aussehen. Falls Du ein Beispiel-Design benötigst, kannst Du gerne die aktuelle www.gq-magazin.de Website als grobe Anmutung nutzen.

Navigation: Auf jeder Seite soll über dem eigentlichen Inhalt eine Navigation mit 2-Ebenen erscheinen. Die zweite Ebene soll sich dabei auf Klick jeweils auf- und zuklappen.

Die folgenden Technologien und Standards sollten Sie dabei berücksichtigen:

- JavaScript Frameworks, entweder Vue.js oder React
- AJAX + JSON ( Die Meldungen stehen in einer statischen Datei im JSON Format )
- CSS3 / Responsive Design
- HTML5 und semantische Tags