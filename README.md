# Node.js GeoJSON API & App | Store Locator

### Description

A Store locator API that serves [GeoJson](https://geojson.org/) data. As welll as a simple frontend that uses [Mapbox](https://geojson.org/) to plot the points on a map

## Backend

The backends uses mongoose for database storage, mapquest api to get geocoordinates and express to build the REST API

The API serves a single route - /api/v1/stores - that:

1. Gets all stores from database
1. Accepts POST requests to add a store location.

### Resources

- [Mongoose](https://mongoosejs.com/)
- [ExpressJS](https://expressjs.com/)
- [Node-geocoder](github.com/nchaulet/node-geocoder)

## Frontend

The frontend serve two pages:

1. index.html - Displays a map with all store location
1. add.html - Displays a form to add a store

They are served using express static middleware that points to the root public directory

```
  app.use(express.static(path.join(_dirname, 'public')))
```

The frontend uses [Bootstrap](https://getbootstrap.com/) for styling.

[Tutorial by Traversy Media](https://www.youtube.com/watch?v=9FQrFah9rnc)
