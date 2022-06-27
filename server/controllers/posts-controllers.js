import express from 'express';

export const addNewPost = async (req, res) => {
  try {
    await console.log("yes")
    res.send("YES IT IS!")
  } catch (error) {
    res.send("No it's not")
  } 
}

