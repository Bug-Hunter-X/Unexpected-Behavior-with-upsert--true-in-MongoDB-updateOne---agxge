```javascript
const myQuery = { name: 'John Doe' };
const update = { $set: { age: 30 } };

db.collection('users').updateOne(myQuery, update, { upsert: true }).then(result => {
  console.log(result);
});
```