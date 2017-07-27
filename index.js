"use strict";

let mssql = require("mssql");

let config={
    user: "sa",
    password: "",
    server: "localhost",
    database: "test",
    options: {
         instanceName : "MSSQLLocalDB"
    }
};

let connection= mssql.connect(config, err=>{
    console.log(err);
    let request =new mssql.Request(connection).query("select 1 as number",(err,result)=>{
        console.log(result);
    });
});
/*
async ()=>{
    try{
        const pool = await mssql.connect('mssql://sa:@localhost/test');
        const result=await mssql.query('select nome,morada from alunos');
        console.log(result);
    }catch(err){
        console.log("Error: "+err);
    }
}
*/