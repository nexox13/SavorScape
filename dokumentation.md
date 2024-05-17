# Savorscape
Savorscape is an interactive Map where you can store and search for recipes based on the country there from. You can also change the theme of the map, aswell as the color of the buttons and such.

### Client
The client was written with the Framework React.
The Client is running on port 8080

### RecipeAPI
The API was written with the Framework Expressjs.
The RecipeAPI is running on Port 3001

##### Routes
| Route      | Description |
| ----------- | ----------- |
| /register      | Is the route to register a user, also is used to alter the password and get the user with the id. You can delete a user with this route     |
| /login   | Is the route used to login where you get the token and the Userobject        |
| /recipe   | Is the route used for the get of all recipes, also used for altering and deleting recipes, there are also get mappings for getting only one recipe with the specified id and get all recipes wich are stored with the specified country.    |

### MongoDB
The MongoDB has two different collection.
The MongoDB is running on it's default port 27017

##### Collection 1: recipes
Here are the recipes stored.
Structur of the recipes:

```
{
    country: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    difficulty: {
        type: Number,
        required: true
    },
    ingredients: [
        {
        name: {
            type: String,
            required: true,
        },
        amount: {
            type: Number,
            required: true,
        },
        unit: {
            type: String,
            required: true,
        },
        },
    ],
    instructions: {
        type: String,
        required: true,
    },
}
```

##### Collection 2: users
Here are the username and the hashed password stored.
```
{
    username: {
        type: String,
        required: true,
        unique: true,
      },
    password: {
        type: String,
        required: true,
      },
}, {
    timestamps: true
}
```

Every Service is it's own Docker Container.