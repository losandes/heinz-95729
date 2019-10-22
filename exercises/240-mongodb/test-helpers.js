const insert = (collection) => (books) => new Promise((resolve, reject) => {
  collection.insertMany(books, (err, result) => {
    if (err) reject(err)
    else resolve(result)
  })
})

const find = (collection) => (book) => new Promise((resolve, reject) => {
  collection.find({ title: book.title }).toArray((err, result) => {
    if (err) reject(err)
    else resolve(result)
  })
})

const exercise = (db) => (exercise) => new Promise((resolve, reject) => {
  exercise(db)((err, result) => {
    if (err) reject(err)
    else resolve(result)
  })
})

module.exports = {
  factories: { insert, find, exercise }
}
