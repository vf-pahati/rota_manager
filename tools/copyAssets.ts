import * as shell from "shelljs";

//copy all the view templates and assets in the publi folder
shell.cp("-R", ["src/views", "src/public"], "dist/");

//remove unnecessary files
shell.rm(["dist/public/js/*.ts", "dist/public/js/*.json"]);