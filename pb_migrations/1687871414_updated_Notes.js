migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yxs0dnfh3jwg6e7")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ftwckkwm",
    "name": "content",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "h98xoqli",
    "name": "title",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yxs0dnfh3jwg6e7")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ftwckkwm",
    "name": "Content",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
