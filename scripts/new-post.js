import fs from "fs"
import path from "path"

function getDate() {
  const today = new Date()
  const year = today.getFullYear()
  const month = String(today.getMonth() + 1).padStart(2, "0")
  const day = String(today.getDate()).padStart(2, "0")

  return `${year}-${month}-${day}`
}

const args = process.argv.slice(2)

if (args.length === 0) {
  console.error(`Error: No filename argument provided
Usage: npm run new-post -- <filename>`)
  process.exit(1) // Terminate the script and return error code 1
}

let fileName = args[0]

// Add .md extension if not present
const fileExtensionRegex = /\.(md|mdx)$/i
if (!fileExtensionRegex.test(fileName)) {
  fileName += ".md"
}

// Remove the extension from the directory name
const dirName = fileName.replace(fileExtensionRegex, "")

const targetDir = "./src/content/posts/"
const postDir = path.join(targetDir, dirName)  // Directory name without .md extension

// Create the directory if it doesn't exist
if (!fs.existsSync(postDir)) {
  fs.mkdirSync(postDir, { recursive: true })
}

const fullPath = path.join(postDir, "index.md")

if (fs.existsSync(fullPath)) {
  console.error(`Error：File ${fullPath} already exists `)
  process.exit(1)
}

const content = `---
title: ${args[0]}
published: ${getDate()}
description: ''
image: ''
tags: []
category: ''
draft: false
language: ''
---
`

fs.writeFileSync(fullPath, content)

console.log(`Post ${fullPath} created`)
