import React, { useState, useEffect } from 'react'
import axios from 'axios';

const words = [
    'Neptune',
    'Jupiter',
    'Mars',
    'Earth',
    'Venus',
    'Pluto',
    'Mercury',
    'Uranus',];

const info = () => {
    const [title, setTitle] = useState('')
    const [period, setPeriod] = useState('')
    const [temperature, setTemperature] = useState('')
    const [mass, setMass] = useState('')
    const [imageurl, setImageurl] = useState('')
 
    const fetchRandom = async () => {
        try{
            const randomIndex = Math.floor(Math.random()* words.length);
            const word = words[randomIndex];
            const wordResponse = await axios.get(`https://api.api-ninjas.com/v1/planets?name=`, {
                params : {
                    query: word,
                    client_id: 'IJ34KrPvsnf7jJJLm+5QRw==eAQxBqm6GJmASbXR'
                }
            });
            const wordData = wordResponse.data[0];
            setTitle(wordData.word);
            setPeriod(wordData.period[0]);
            setTemperature(wordData.temperature[0]);
            setMass(wordData.mass[0]);

            const imageResponse = await axios.get(`https://api.api-ninjas.com/v1/randomimage?category=` ,{
                params : {
                    query: word,
                    client_id: 'IJ34KrPvsnf7jJJLm+5QRw==eAQxBqm6GJmASbXR'
                }
            });
            const imageData = imageResponse.data;
            setImageUrl(imageData.urls.regular);

        }catch (error) {
            console.log('Error')
        }
    };

    useEffect(() => {
        fetchRandom()
    });

    return (
        
    )
}