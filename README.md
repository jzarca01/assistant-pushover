# assistant-pushover

Plugin pour envoyer des notifications Push via le service Pushover

## Configuration

Dans le fichier `configuration.json`, ajoutez votre appKey et votre userKey Pushover

```json
{
  "plugins": {
    "pushover": {
      "appKey": "",
      "userKey": ""
    }
  }
}
```

## Utilisation

Une notification sera dispatchée quand le message `pushover_TITREDEVOTRENOTICATION--MESSAGEDEVOTRENOTIFICATION` sera envoyé à Pushbullet (depuis IFTTT)
