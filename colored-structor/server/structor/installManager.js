"use strict";function _interopRequireWildcard(t){if(t&&t.__esModule)return t;var n={};if(null!=t)for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n.default=t,n}function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}function downloadDistr(t){var n=_structorCommons.config.getProjectDir();return client.download(t).then(function(o){var r=_path2.default.join(n,"__metaDistr.tar.gz").replace(/\\/g,"/"),e=_path2.default.join(n,META_DISTR_DIR_NAME).replace(/\\/g,"/");return _structorCommons.commons.writeBinaryFile(r,o).then(function(){return _structorCommons.commons.unpackTarGz(r,e)}).then(function(){return _structorCommons.commons.readDirectoryFlat(e).then(function(n){if(n){var o=n.dirs;if(o&&1===o.length)return o[0].path}throw _structorCommons.commons.removeFile(r),Error("Downloaded tarball has wrong structure. Check the ulr: "+t)})}).then(function(t){return _structorCommons.commons.removeFile(r).then(function(){return{innerDirPath:t,tempDirPath:e}})})})}function cleanDistr(){var t=_path2.default.join(_structorCommons.config.getProjectDir(),META_DISTR_DIR_NAME);return _structorCommons.commons.isExisting(t).then(function(){return _structorCommons.commons.removeFile(t)}).catch(function(t){})}function preInstall(t,n){var o=[],r=void 0,e=void 0,s=void 0;return t?(r=t,s=Promise.resolve()):n&&(s=downloadDistr(n).then(function(t){r=t.innerDirPath})),s.then(function(){return _structorCommons.commons.readJson(_path2.default.join(r,"structor-namespaces.json"))}).then(function(t){e=t}).then(function(){var t=_path2.default.join(r,"modules");return _structorCommons.commons.isExisting(t).then(function(){return _structorCommons.commons.readDirectoryFlat(t).then(function(t){var n=t.dirs;if(!n||n.length<=0)throw Error("Modules directory is empty");return n})}).catch(function(t){return[]})}).then(function(t){if(t&&t.length>0)return _structorCommons.storage.getComponentTree().then(function(n){t.forEach(function(t){n.modules&&n.modules[t.name]&&o.push(t.name)})})}).then(function(){return{namespacesSrcDirPath:r,existingNamespaceDirs:o}})}function installFromDir(t){var n=_path2.default.join(t,"structor-namespaces.json"),o=_path2.default.join(t,"modules"),r=_path2.default.join(t,"defaults"),e=_path2.default.join(t,"docs"),s=_path2.default.join(t,".structor"),i=_path2.default.join(_structorCommons.config.appDirPath(),"modules"),u=_structorCommons.config.componentDefaultsDirPath(),c=_structorCommons.config.docsComponentsDirPath(),a=_structorCommons.config.deskModelFilePath(),m=void 0,l=void 0;return _structorCommons.commons.readJson(n).then(function(t){m=t}).then(function(){return _structorCommons.storage.installDependencies(m.dependencies)}).then(function(){return _structorCommons.storage.getComponentTree()}).then(function(t){l=t;var n=[],r=l.reducersSourceCode,e=l.sagasSourceCode,s=void 0,i=void 0;return(0,_lodash.forOwn)(m.namespaces,function(t,u){s=_path2.default.join(o,u,"reducer.js"),i=_path2.default.join(o,u,"sagas.js"),n.push(_structorCommons.commons.isExisting(s).then(function(){return _structorCommons.commons.isExisting(i)}).then(function(){r=_structorCommons.gengine.injectReducer(r,t.reducerPropName,t.reducerPropName+"Reducer",_path2.default.join("modules",u,"reducer.js")),e=_structorCommons.gengine.injectSaga(e,u+"Sagas",_path2.default.join("modules",u,"sagas.js"))}))}),Promise.all(n).then(function(){return _structorCommons.commons.writeFile(l.reducersFilePath,r)}).then(function(){return _structorCommons.commons.writeFile(l.sagasFilePath,e)})}).then(function(){return _structorCommons.commons.isExisting(o).then(function(){return _structorCommons.commons.readDirectoryFlat(o).then(function(t){var n=t.dirs;if(!n||n.length<=0)throw Error("Modules directory is empty");return n})}).catch(function(t){return[]})}).then(function(t){var n=[];return t.forEach(function(t){var o=_path2.default.join(i,t.name);n.push(_structorCommons.commons.removeFile(o).then(function(){return _structorCommons.commons.copyFile(t.path,o)}))}),Promise.all(n)}).then(function(){return _structorCommons.commons.isExisting(r).then(function(){return _structorCommons.commons.readDirectoryFlat(r).then(function(t){var n=t.dirs;if(!n||n.length<=0)throw Error("Defaults directory is empty");return n})}).catch(function(t){return[]})}).then(function(t){var n=[],o=l.indexSourceCode;return t.forEach(function(t){var r=_path2.default.join(u,t.name);n.push(_structorCommons.commons.removeFile(r).then(function(){return _structorCommons.commons.copyFile(t.path,r)}).then(function(){return o=_structorCommons.gengine.injectNamespaceComponent(o,t.name,_path2.default.join("modules",t.name)),_structorCommons.commons.writeFile(l.indexFilePath,o)}))}),Promise.all(n)}).then(function(){return _structorCommons.commons.isExisting(e).then(function(){return _structorCommons.commons.readDirectoryFlat(e).then(function(t){var n=t.dirs;if(!n||n.length<=0)throw Error("Docs directory is empty");return n})}).catch(function(t){return[]})}).then(function(t){var n=[];return t.forEach(function(t){var o=_path2.default.join(c,t.name);n.push(_structorCommons.commons.removeFile(o).then(function(){return _structorCommons.commons.copyFile(t.path,o)}))}),Promise.all(n)}).then(function(){return _structorCommons.commons.readJson(_path2.default.join(s,"model.json")).then(function(t){if(t&&t.pages)return _structorCommons.storage.readProjectJsonModel().then(function(n){if(n){n.pages=n.pages||[];var o=void 0;return t.pages.forEach(function(t){o=n.pages.findIndex(function(n){return n.pagePath===t.pagePath}),o<0?n.pages.push(t):n.pages[o]=t}),_structorCommons.commons.writeJson(a,n)}})}).catch(function(t){})}).then(function(){return cleanDistr()}).catch(function(t){return cleanDistr().then(function(){throw t})})}function getMarketList(){return client.get("https://raw.githubusercontent.com/ipselon/structor-market/master/index.json").then(function(t){return t})}function getGHRepoInfo(t,n){var o="https://api.github.com/repos/"+n+"/"+t;return client.get(o).then(function(o){return _extends({gitHubRepo:t,gitHubOwner:n},(0,_lodash.pick)(o,["description","html_url","stargazers_count","open_issues_count"]))}).then(function(t){return client.get(o+"/releases").then(function(n){var o=[];return n&&n.length>0&&n.forEach(function(t){o.push(_extends({},(0,_lodash.pick)(t,["name","tarball_url"])))}),Object.assign({},t,{releases:o})})}).then(function(t){return client.get(o+"/contents").then(function(n){var o=void 0;if(n&&n.length>0){var r=n.find(function(t){return t.name&&t.name.indexOf("screenshot")>=0});r&&(o=r.download_url)}return Object.assign({},t,{screenshotUrl:o})})}).catch(function(o){return console.log(o),{gitHubRepo:t,gitHubOwner:n,error:""+o}})}Object.defineProperty(exports,"__esModule",{value:!0});var _extends=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t};exports.cleanDistr=cleanDistr,exports.preInstall=preInstall,exports.installFromDir=installFromDir,exports.getMarketList=getMarketList,exports.getGHRepoInfo=getGHRepoInfo;var _path=require("path"),_path2=_interopRequireDefault(_path),_lodash=require("lodash"),_structorCommons=require("structor-commons"),_clientGH=require("../commons/clientGH.js"),client=_interopRequireWildcard(_clientGH),META_DISTR_DIR_NAME=".structor-namespaces-distr";