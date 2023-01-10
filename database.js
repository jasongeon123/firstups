const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('clicksDatabase.db',(err)=>{
    if(err){
        return console.error(err.message);
    }
    console.log('Connected to the database');
});
db.run(`CREATE TABLE IF NOT EXISTS clickHistory (EmployeeID TEXT, mondayClick INTEGER, tuesdayClick INTEGER, wednesdayClick INTEGER, thursdayClick INTEGER, fridayClick INTEGER, totalClick INTEGER)`, (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Table created successfully.');
  });
db.close();