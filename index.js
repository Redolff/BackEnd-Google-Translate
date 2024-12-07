import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import axios from 'axios'

dotenv.config()

const app = express()
const port = 3001
// Configuracion basica de Cors (permite cualquier origen)
app.use(cors())

app.use(express.json({
    origin: ['http://localhost:5173', 'https://googletranslate-nu.vercel.app/'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'] 
}))

// Api cohere-ai
app.post('/api/cohere', async (req, res) => {
    const { fromLanguage, toLanguage, debouncedFromText } = req.body
    
    const API_URL = 'https://api.cohere.ai/generate'
    const API_KEY = process.env.COHERE_API_KEY

    try{
        // Llamada a la Api de DeepL
        const response = await axios.post(API_URL, {
            model: 'command-xlarge-nightly',
            prompt: `Translate ${debouncedFromText} from ${fromLanguage} to ${toLanguage}`,
            max_tokens: 1000,
            temperature: 0.75,
        }, {
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'Content-Type': 'application/json',
            }
        })
        res.json({ result: response.data.text })
    }
    catch(error){
        console.error('Error calling Cohere API:', error)
        res.status(500).json({ error: 'Error processing request' })
    }

})

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`)
})