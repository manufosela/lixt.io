const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const shell = require('shelljs');
const argv = require('yargs').argv;
const readline = require("readline");
const { resolve } = require('path');

class Lixt {
  constructor() {
    this.currentWorkDir = process.cwd();
    this.command;
    this.pageName;
    this.port;
    this.workdir;
    this.distdir;
    this.wcName;
    this.WcName;
    this.wc_Name;
    this.siteName;
    this.languages = '';
    this.yes = false;

    this.fn = { 'create-page': createPage, 'build': build, 'build-page': buildPage, 'create-wc': createWc, 'scafolding': createScafolding };
  }


}