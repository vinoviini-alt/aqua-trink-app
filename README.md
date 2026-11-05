# AQUA – Web-App für iPhone

## Enthalten
- Mobile-first Oberfläche im AQUA-Blau-Weiß-Design
- Glasgröße voreingestellt auf 200 ml
- Tagesziel individuell einstellbar
- Trinkfortschritt, Glaszähler und Rückgängig-Funktion
- Lokale Speicherung im Browser
- PWA-Grundgerüst (Manifest, Service Worker, App-Symbole)

## Auf dem iPhone verwenden
1. Die Dateien müssen auf einer HTTPS-Webadresse veröffentlicht werden (z. B. über einen statischen Webhosting-Dienst).
2. Öffne diese HTTPS-Adresse in **Safari** auf dem iPhone.
3. Tippe auf **Teilen** → **Zum Home-Bildschirm** → **Hinzufügen**.
4. Starte AQUA über das neue Symbol.

## Ehrlicher Hinweis zu Erinnerungen
Diese erste Version kann während geöffneter App stündlich erinnern (07:00 bis 21:00 Uhr). iOS-Web-Apps können keine verlässlichen stündlichen lokalen Benachrichtigungen planen, wenn sie geschlossen sind. Zuverlässige Hintergrund-Push-Mitteilungen benötigen einen Push-Server und zusätzliche Einrichtung. Die App zeigt diesen Unterschied in den Einstellungen an.

## Datenschutz
Trinkdaten werden lokal im Browser gespeichert. Es gibt keinen Server und kein Benutzerkonto.
