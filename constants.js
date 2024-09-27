"use strict";

export const SUPPORTED_LANGUAGES = {
    'en': 'English',
    'es': 'Español',
    'de': 'Deutsch',
    'fr': 'French',
    'pt': 'Portugués',
    'it': 'Italiano'
};

export const AUTO_LANGUAGE = 'auto';

export const messages = [
    {
        role: "system",
        content: 'You are a AI that translate text. You receive a text from the user. Do not answer, just translate the text. The original language is surrounded by `{{` and ` }}`. You can also recive {{ auto }} which means that you have to detected language. The language you translate to is surrounded by `[[` and `]]`'
    },
    {
        role: "user",
        content: `Hola mundo {{auto}} [[English]] `
    },
    {
        role: "assistant",
        content: 'Hello world' 
    },
    {
        role: "user",
        content: 'How are you? {{auto}} [[Español]]'
    },
    {
        role: "assistant",
        content: 'Wie geth es dir?'
    },
    {
        role: "user",
        content: 'Bon dia, com estas? {{auto}} [[Español]]'
    },
    {
        role: "assistant",
        content: 'Buenos dias, ¿como estas?'
    }
]

//const fromCode = fromLanguage === 'auto' ? 'auto' : SUPPORTED_LANGUAGES[fromLanguage]
//const toCode = SUPPORTED_LANGUAGES[toLanguage]