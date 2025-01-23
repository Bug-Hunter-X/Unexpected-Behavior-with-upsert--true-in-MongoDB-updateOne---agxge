```javascript
try {
  const myQuery = { name: 'John Doe' };
  const update = { $set: { age: 30 } };

  const result = await db.collection('users').updateOne(myQuery, update, { upsert: true });

  if (result.upsertedCount > 0) {
    console.log('Document inserted successfully.');
  } else if (result.modifiedCount > 0) {
    console.log('Document updated successfully.');
  } else {
    console.error('Update failed. Check validation rules and data.');
  }
} catch (error) {
  console.error('An error occurred:', error);
}
```