# Comment Modifier un Fichier JSON Sans Erreur

En résumé, prenez votre temps lors de la modification, suivez la structure existante comme modèle, et soyez attentif aux
petits détails de syntaxe pour éviter les erreurs.

# Étapes pour Modifier le Fichier

## 1. Comprendre la Structure

- \[ ] : Les crochets représentent une liste ou un tableau d'éléments.
- { } : Les accolades contiennent des objets avec des paires clé-valeur.
- "date" : La date de l'événement ou du contrat.
- "content" : Une liste des contrats associés à cette date.

## 2. Modifier les Données
### Pour Ajouter une Nouvelle Date avec des Contrats :
- Copiez une des sections existantes, par exemple :
```json
{
  "date": "2024-09-30",
  "content": [
    "Contrat CHAMPIGNONS 2024 - 100% dématérialisé",
    "Contrat LEGUMES 2024 - 100% dématérialisé sous Camap",
    "Contrat PAINS & BRIOCHE 2024 / 100% papier",
    "Contrat AMAP dématérialisé - produits laitiers brebis"
  ]
}
```
- Collez-la juste après la dernière accolade fermante } et avant le crochet fermant ].
- Modifiez la valeur de "date" et les éléments de "content" selon vos besoins.
- **/!\\ Assurez-vous qu'il y a une virgule entre chaque bloc { ... }, sauf pour le dernier /!\\**

## 3. Respecter la Syntaxe JSON
- Guillemets Doubles : Utilisez toujours des guillemets doubles " pour les clés et les valeurs textuelles.
- Virgules : Séparez les éléments avec des virgules.
  - #### Attention : Ne mettez pas de virgule après le dernier élément d'une liste ou le dernier objet.
- Crochets et Accolades : Chaque crochet ou accolade ouvrant doit avoir un crochet ou une accolade fermant correspondant.

