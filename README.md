# API routes

#### `GET /`

This renders the `index.html` file that will be used to interact with the backend

## Users

#### `POST /api/users/session` - Sign in user

**Body**

- `username` _{string}_ - The user's username
- `password` _{string}_ - The user's password

**Returns**

- A success message

**Throws**

- `403` if the user is already logged in
- `400` if username or password is not in correct format format or missing in the req
- `401` if the user login credentials are invalid

#### `DELETE /api/users/session` - Sign out user

**Returns**

- A success message

**Throws**

- `403` if user is not logged in

#### `POST /api/users` - Create an new user account

**Body**

- `username` _{string}_ - The user's username
- `password` _{string}_ - The user's password

**Returns**

- A success message

**Throws**

- `403` if there is a user already logged in
- `400` if username or password is in the wrong format
- `409` if username is already in use

#### `PUT /api/users` - Update a user's profile

**Body** _(no need to add fields that are not being changed)_

- `username` _{string}_ - The user's username
- `password` _{string}_ - The user's password

**Returns**

- A success message

**Throws**

- `403` if the user is not logged in
- `400` if username or password is in the wrong format
- `409` if the username is already in use

#### `DELETE /api/users` - Delete user

**Returns**

- A success message

**Throws**

- `403` if the user is not logged in


## Freets

#### `GET /api/feed` - Get the current user's feed of Freets

**Returns**
- An array of freets

**Throws**

- `403` if the user is not logged in

#### `GET /api/freets` - Get the current user's Freets

**Returns**
- An array of Freets created by the logged-in user

**Throws**

- `403` if the user is not logged in

#### `POST /api/freets` - Create a new freet

**Body**

- `content` _{string}_ - The content of the freet
- `trendingWindId` _{int|null}_ - The ID of the trending wind that this Freet will be posted to

**Returns**

- A success message
- A object with the created freet

**Throws**

- `403` if the user is not logged in
- `403` if the user has already posted to the selected Trending Wind
- `400` if the freet content is empty or a stream of empty spaces
- `404` if the `trendingWindId` is not found
- `413` if the freet content is more than 140 characters long

#### `PUT /api/freets/react/:freetId?` - React to a Freet

**Body**

- `reaction` _{string}_ - The reaction (should be one of "surprised", "agreed", "hmmm")

**Returns**

- A success message

**Throws**

- `403` if the user is not logged in
- `404` if the freetId is invalid

#### `DELETE /api/freets/:freetId?` - Delete an existing freet

**Returns**

- A success message

**Throws**

- `403` if the user is not logged in
- `403` if the user is not the author of the freet
- `404` if the freetId is invalid

## Trending Winds

#### `GET /api/winds` - Get the active Trending winds

**Returns**
- An array of active TrendingWinds 

**Throws**

- `403` if the user is not logged in

#### `GET /api/winds/:windId` - Get a single Trending Wind

**Returns**
- A TrendingWind object

**Throws**

- `403` if the user is not logged in
- `404` if the wind is not found