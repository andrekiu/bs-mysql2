'use strict';

var Mysql = require("../src/mysql.bs.js");

var conn = Mysql.Connection[/* make */0](/* Some */["127.0.0.1"], /* Some */[3306], /* Some */["root"], /* None */0, /* None */0, /* () */0);

Mysql.query(conn, "SHOW DATABASES", (function (error, results, fields) {
        if (error == null) {
          console.log(results);
          console.log(fields);
          return /* () */0;
        } else {
          console.log(error);
          return /* () */0;
        }
      }));

Mysql.Connection[/* end_ */1](conn);

exports.conn = conn;
/* conn Not a pure module */