import express from 'express'
// const express=require('express')

const app=express()
const port=3000
app.get('/',(req,res)=>{
    res.send('<h1>home </h1>')
})
app.get('/contact',(req,res)=>{
    const obj={
        name:'kuksdepp',
        gandu:'manish',
    }
    res.send(obj)
})
app.get('/about',(req,res)=>{
    res.send('<h1>about</h1>')
})

app.listen(port,()=>{
    console.log('example app lostening at 3000 ')
})
