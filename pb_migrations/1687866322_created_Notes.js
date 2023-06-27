migrate((db) => {
  const collection = new Collection({
    "id": "yxs0dnfh3jwg6e7",
    "created": "2023-06-27 11:45:22.792Z",
    "updated": "2023-06-27 11:45:22.792Z",
    "name": "Notes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ftwckkwm",
        "name": "Text",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "h98xoqli",
        "name": "Title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("yxs0dnfh3jwg6e7");

  return dao.deleteCollection(collection);
})
