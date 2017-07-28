"use strict";

let mssql = require("mssql/msnodesqlv8");

let config={
    server: "madpc",
    database: "test",
    driver: 'msnodesqlv8',
    options: {
        trustedConnection: true
    }
};

let connection= mssql.connect(config, err=>{
    if(err){
        console.log(err);
        return;
    }
    /*let request =new mssql.Request(connection).query("select nome,morada from alunos",(err,result)=>{
        console.dir(result);
        process.exit();
    });*/
    listarTodosRegistos(connection);
  //  insere(connection,"Nome 1","morada 1");
  //  listarTodosRegistos(connection);
});

function insere(connection,nome,morada){
    let request =new mssql.Request(connection);
    request.input("nome",mssql.NVarChar,nome);
    request.input("morada",mssql.NVarChar,morada);
    request.query("insert into alunos(nome,morada) values (@nome,@morada)",(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        process.exit();
    });
}

function listarTodosRegistos(connection){
     let request =new mssql.Request(connection).query("select nome,morada from alunos",(err,result)=>{
        console.dir(result);
        
    });
}