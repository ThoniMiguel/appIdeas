#!/bin/bash
path="/home/thoni/Documents/Development/AppIdeas"

echo "Enter the directory inside AppIdeas"

read dirName
touch $path/$dirName/style.css
touch $path/$dirName/script.js
touch $path/$dirName/index.html

echo "<!DOCTYPE html>
<html lang=en>
<head>
    <meta charset=UTF-8>
    <meta name=viewport content=width=device-width, initial-scale=1.0>
    <link rel=stylesheet href=./style.css>
    <link href=https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap rel=stylesheet> 
    <script src=./script.js defer></script>
    <title>$dirName</title>
</head>
<body>
    <header class="mainHeader">
        <h1 class="title">$dirName</h1>
    </header>
    <section class="mainBody"></section>
</body>
</html>" >> $path/$dirName/index.html

echo "* {
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}

.mainHeader {
  border-bottom: 3px solid black;
  padding: 0px 15px;
  color: black;
  display: flex;
  justify-content: center;
  border-radius: 0px;
}
" >> $path/$dirName/style.css
