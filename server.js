const express = require("express");
const { spawn } = require("child_process");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(bodyParser.text());

app.post("/run_scheduler", (req, res) => {
  const input = req.body;

  const process = spawn("./cpu_scheduler", [], { stdio: "pipe" });

  process.stdin.write(input);
  process.stdin.end();

  let output = "";

  process.stdout.on("data", (data) => {
    output += data.toString();
  });

  process.stderr.on("data", (data) => {
    console.error("Error:", data.toString());
  });

  process.on("close", (code) => {
    console.log(`Child process exited with code ${code}`);
    res.send(output);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
