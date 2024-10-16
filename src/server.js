const express = require('express')
const recipes = require('./temp-data.json') // Import der Rezepte aus der JSON-Datei
const app = express()
const port = 3000

// Root-Route
app.get('/', (req, res) => {
    res.send('Welcome to Recipe!')
})

// Alle Rezepte abrufen
app.get('/recipes', (req, res) => {
    res.json(recipes)
})

// Rezept anhand der ID abrufen
app.get('/recipes/:id', (req, res) => {
    const recipeId = req.params.id
    const recipe = recipes.find(r => r.id === recipeId)

    if (recipe) {
        res.json(recipe)
    } else {
        res.status(404).json({ message: 'Recipe not found' })
    }
})

// Server starten
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
