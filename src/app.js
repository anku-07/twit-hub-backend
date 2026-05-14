const express = require("express");

const app = express();
app.use(express.json());

const notes = [];

//  add notes
app.post("/notes", (req, res) => {
  console.log(req.body);
  try {
    const note = req.body;
    notes.push(note);
    res.status(201).json({ msg: "notes created succesfully", data: note });
  } catch (error) {
    res.status(500).json({
      msg: "Something went wrong",
    });
  }
});

// get all notes
app.get("/notes", (req, res) => {
  try {
    res.status(200).json({
      msg: "All Notes",
      data: notes,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Something went wrong",
    });
  }
});

app.delete("/notes/:id", (req, res) => {
  try {
    console.log(req.params);

    notes.filter((note) => note)

  } catch (error) {
    res.status(500).json({
      msg: "Something went wrong",
    });
  }
});

module.exports = app;
