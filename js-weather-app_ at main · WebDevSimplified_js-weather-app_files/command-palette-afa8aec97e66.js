"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["command-palette"],{75133:(e,t,s)=>{var o,i=s(76006),r=function(e,t,s,o){var i,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,s):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,s,o);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(n=(r<3?i(n):r>3?i(t,s,n):i(t,s))||n);return r>3&&n&&Object.defineProperty(t,s,n),n};let n=class CommandPaletteModeElement extends HTMLElement{active(e,t){return this.scopeTypeMatch(e.type)&&this.modeMatch(t)}scopeTypeMatch(e){return!this.scopeTypes||this.scopeTypes&&JSON.parse(this.scopeTypes).includes(e)}modeMatch(e){return"*"===this.char||this.char===e}character(){return"*"===this.char?"":this.char}constructor(...e){super(...e),this.scopeTypes=""}};r([i.Lj],n.prototype,"char",void 0),r([i.Lj],n.prototype,"placeholder",void 0),r([i.Lj],n.prototype,"scopeTypes",void 0),n=r([i.Ih],n);var c=function(e,t,s,o){var i,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,s):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,s,o);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(n=(r<3?i(n):r>3?i(t,s,n):i(t,s))||n);return r>3&&n&&Object.defineProperty(t,s,n),n};let a=class CommandPaletteTipElement extends HTMLElement{connectedCallback(){this.hidden=!0}available(e,t=!1,s=!1){let o=this.valueMatch(e.text)&&this.scopeTypeMatch(e.scope.type)&&this.modeMatch(e.mode)&&this.showOnEmpty(t)&&this.showOnError(s);return o}toggle(e,t=!1,s=!1){this.hidden=!this.available(e,t,s)}valueMatch(e){return"*"===this.value||this.value===e}scopeTypeMatch(e){return""!==this.scopeTypes&&("*"===this.scopeTypes||JSON.parse(this.scopeTypes).includes(e))}modeMatch(e){if(""===this.matchMode)return"*"===this.mode||this.mode===e;{let t=RegExp(this.matchMode);return null!==e.match(t)}}showOnEmpty(e){return!this.onEmpty||e}showOnError(e){return!this.onError||e}constructor(...e){super(...e),this.scopeTypes="",this.mode="*",this.matchMode="",this.value="*",this.onEmpty=!1,this.onError=!1}};c([i.Lj],a.prototype,"scopeTypes",void 0),c([i.Lj],a.prototype,"mode",void 0),c([i.Lj],a.prototype,"matchMode",void 0),c([i.Lj],a.prototype,"value",void 0),c([i.Lj],a.prototype,"onEmpty",void 0),c([i.Lj],a.prototype,"onError",void 0),a=c([i.Ih],a);var l=s(64316),u=function(e,t,s,o){var i,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,s):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,s,o);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(n=(r<3?i(n):r>3?i(t,s,n):i(t,s))||n);return r>3&&n&&Object.defineProperty(t,s,n),n};let d=class CommandPaletteTokenElement extends HTMLElement{constructor(...e){super(...e),this.type="",this.id="",this.text="",this.value=""}};u([i.Lj],d.prototype,"type",void 0),u([i.Lj],d.prototype,"id",void 0),u([i.Lj],d.prototype,"text",void 0),u([i.Lj],d.prototype,"value",void 0),d=u([i.Ih],d);var h=s(25543),p=s(16852),m=s(94831),f=s(50034),y=s(34106),b=s(89803);let RemoteProvider=class RemoteProvider extends b.j{fetch(e,t){return this.fetchSrc(e)}enabledFor(e){return this.modeMatch(e)&&this.scopeMatch(e)}clearCache(){}scopeMatch(e){return 0===this.scopeTypes.length||this.scopeTypes.includes(e.scope.type)}modeMatch(e){return this.modes.includes(e.mode)||this.hasWildCard}async fetchSrc(e,t=""){if(!this.src)throw Error("No src defined");let s=new URL(this.src,window.location.origin),o=e.params();t&&o.set("mode",t),s.search=o.toString();let i=await fetch(s.toString(),{headers:{Accept:"application/json","X-Requested-With":"XMLHttpRequest"}});if(!i.ok)return{error:!0,results:[]};{let e=await i.json();return{results:e.results?.map(e=>y.g.build(e))||[],octicons:e.octicons}}}};let PrefetchedProvider=class PrefetchedProvider extends RemoteProvider{clearCache(){super.clearCache(),this.scopedItems={},this.cachedOcticons={}}get debounce(){return 0}async prefetch(e){if(!this.scopeMatch(e)||this.scopedItems[e.scope.id])return;let t=new f.A("",e.mode,{subjectId:e.subjectId,subjectType:e.subjectType,returnTo:e.returnTo,scope:e.scope}),s=await this.fetchSrc(t,e.mode);this.octicons=s.octicons||[];let o=s.results||[];this.scopedItems[e.scope.id]=o,this.cachedOcticons[e.scope.id]=this.octicons}async fetch(e,t){let s=this.scopedItems[e.scope.id]||[],o=this.cachedOcticons[e.scope.id]||[],i=this.fuzzyFilter(s,e);return{results:i.slice(0,this.maxItems),octicons:o}}constructor(...e){super(...e),this.maxItems=1e3,this.scopedItems={},this.cachedOcticons={}}};let CommandsProvider=class CommandsProvider extends PrefetchedProvider{enabledFor(e){return">"===e.mode||!!["discussion","issue","pull_request"].includes(e.scope.type)}};var g=s(24728),v=s(8407);let FilesProvider=class FilesProvider extends PrefetchedProvider{async fetchSrc(e){if(!this.src)throw Error("No src provided");let t=new URL(this.src,window.location.origin);t.search=e.params().toString();let s=await fetch(t.toString(),{headers:{Accept:"application/json","X-Requested-With":"XMLHttpRequest"}}),o=await s.json();if(!o.results)return;let i=o.results[0];if(i.base_file_path){let e=i.base_file_path,t=i.paths;o.results=t.map(t=>v.s.from({title:t,path:`${e}/${t}`,icon:"file-color-fg-muted",group:"files"}))}else i.action&&"access_policy"===i.action.type?o.results=[new g.i(i)]:o.results=[];return o}async fetch(e,t=!1){let s=e.text.match(/(.+):(\d*)\s*$/);return s?this.fetchWithLineNumbers(e,s):super.fetch(e,t)}async fetchWithLineNumbers(e,t){let s=t[1],o=t[2],i=new f.A(s,e.mode,{scope:e.scope}),r=[],n=(await super.fetch(i,!1)).results;for(let e of n)e instanceof v.s&&r.push(this.convert(e,o));return{results:r}}convert(e,t){return""!==t&&e instanceof v.s&&(e.title=`${e.title}:${t}`,e.action.path=`${e.action.path}#L${t}`),e}};let HelpProvider=class HelpProvider extends b.j{enabledFor(e){return!0}clearCache(){}get hasCommands(){return!1}get debounce(){return 0}async fetch(e,t=!1){if("?"!==e.mode&&!t)return{results:[]};let s=Array.from(this.element.querySelectorAll("command-palette-help")),o=s.filter(t=>t.show(e)).map((e,t)=>e.toItem(t));return{results:o}}};var w=s(95639);let SearchLinksProvider=class SearchLinksProvider extends b.j{enabledFor(e){return!e.isBlank()&&"?"!==e.mode&&">"!==e.mode}clearCache(){}get hasCommands(){return!1}async fetch(e,t=!1){return{results:[w.K.create(e)]}}};let ServerDefinedProviderFactory=class ServerDefinedProviderFactory{static create(e){let t=this.providers[e.type];if(!t)throw Error(`Unknown provider type: ${e.type}`);return new t(e)}};ServerDefinedProviderFactory.providers={remote:RemoteProvider,prefetched:PrefetchedProvider,commands:CommandsProvider,files:FilesProvider,help:HelpProvider,"search-links":SearchLinksProvider};var C=function(e,t,s,o){var i,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,s):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,s,o);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(n=(r<3?i(n):r>3?i(t,s,n):i(t,s))||n);return r>3&&n&&Object.defineProperty(t,s,n),n};let S=class ServerDefinedProviderElement extends p.b{get debounce(){return parseInt(this.fetchDebounce,10)}get hasCommands(){return this.supportsCommands}get hasWildCard(){return this.modes.includes(this._wildcard)}get modes(){return""===this.supportedModes&&(this._modes=[""]),this._modes||(this._modes=JSON.parse(this.supportedModes)),this._modes}get scopeTypes(){return""===this.supportedScopeTypes?[]:(this._scopeTypes||(this._scopeTypes=JSON.parse(this.supportedScopeTypes)),this._scopeTypes)}connectedCallback(){this.provider=ServerDefinedProviderFactory.create(this)}constructor(...e){super(...e),this._wildcard="*"}};C([i.Lj],S.prototype,"type",void 0),C([i.Lj],S.prototype,"supportedModes",void 0),C([i.Lj],S.prototype,"fetchDebounce",void 0),C([i.Lj],S.prototype,"supportedScopeTypes",void 0),C([i.Lj],S.prototype,"src",void 0),C([i.Lj],S.prototype,"supportsCommands",void 0),S=C([i.Ih],S);var T=s(79922),E=function(e,t,s,o){var i,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,s):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,s,o);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(n=(r<3?i(n):r>3?i(t,s,n):i(t,s))||n);return r>3&&n&&Object.defineProperty(t,s,n),n};let k=class CommandPaletteHelpElement extends HTMLElement{connectedCallback(){this.hidden=!0}show(e){return this.isEnabledScopeType(e)}isEnabledScopeType(e){return!this.scopeTypes||this.scopeTypes&&JSON.parse(this.scopeTypes).includes(e.scope.type)}toItem(e){let t={group:this.group,title:this.titleElement.innerHTML,index:e};return this.prefix&&(t.prefix=this.prefix),this.hintElement.textContent&&(t.persistentHint=this.hintElement.innerHTML),T.B.from(t)}};E([i.Lj],k.prototype,"group",void 0),E([i.Lj],k.prototype,"prefix",void 0),E([i.Lj],k.prototype,"scopeTypes",void 0),E([i.fA],k.prototype,"titleElement",void 0),E([i.fA],k.prototype,"hintElement",void 0),k=E([i.Ih],k);var _=s(776),j=s(4328),x=s(73072),L=s(35446),P=s(63927);let MainWindowCommand=class MainWindowCommand{static item(e={}){return new P.U(new this,e)}run(e){Error("Not implemented")}isApplicable(e){return!0}constructor(){this.iconType="octicon",this.group="commands",this.priority=0,this.dismissAfterRun=!0}};let MainWindowGlobalCommand=class MainWindowGlobalCommand extends MainWindowCommand{constructor(...e){super(...e),this.group="global_commands"}};let M=class DeleteDiscussion extends MainWindowCommand{get deleteButton(){return document.querySelector("button#dialog-show-delete-discussion")}get dialogElement(){return document.querySelector("#delete-discussion")}isApplicable(){return null!=this.deleteButton}run(){let e=this.deleteButton;if(e){e.click(),setTimeout(()=>{this.dialogElement?.querySelector('button[type="submit"]')?.focus()},0);return}}constructor(...e){super(...e),this.title="Delete discussion\u2026",this.icon="trash-color-fg-muted"}},q=class EditDiscussion extends MainWindowCommand{get editButton(){return document.querySelector(".js-discussions-comment-edit-button")}isApplicable(){return null!=this.editButton}run(){this.editButton?.click()}constructor(...e){super(...e),this.title="Edit discussion body",this.icon="pencil-color-fg-muted"}},A=class TransferDiscussion extends MainWindowCommand{get transferButton(){return document.querySelector("button#dialog-show-discussion-transfer-conversation")}get dialogElement(){return document.querySelector("#discussion-transfer-conversation")}isApplicable(){return null!=this.transferButton}run(){let e=this.transferButton,t=this.dialogElement;if(e&&t){e.click();let s=()=>{setTimeout(()=>{t?.querySelector("[data-menu-button]")?.focus()},0)};t.querySelector("include-fragment")?.addEventListener("load",s),s()}}constructor(...e){super(...e),this.title="Transfer discussion\u2026",this.icon="arrow-right-color-fg-muted"}},B=[M,A,q];var D=s(76237),I=s(93345),R=s(89445);let O=class TabSizeTwo extends MainWindowCommand{async run(e){this.updateTabSize(),this.saveSettings(e)}updateTabSize(){let e=document.querySelectorAll("[data-tab-size]");for(let t of e)t.setAttribute("data-tab-size",this.tabSize)}async saveSettings(e){let t=new FormData;t.set("tab_size_rendering_preference",this.tabSize);let s="Failed to save tab size preference";try{let o=await (0,R.Q)("/settings/appearance/tab_size",{method:"PUT",body:t});o.ok?e.displayFlash("success","Tab size rendering updated"):e.displayFlash("error",s)}catch{e.displayFlash("error",s)}}constructor(...e){super(...e),this.title="2 spaces",this.iconType="none",this.tabSize="2",this.group=""}},W=class TabSizeThree extends O{constructor(...e){super(...e),this.title="3 spaces",this.tabSize="3"}},z=class TabSizeFour extends O{constructor(...e){super(...e),this.title="4 spaces",this.tabSize="4"}},$=class TabSizeSix extends O{constructor(...e){super(...e),this.title="6 spaces",this.tabSize="6"}},F=class TabSizeEight extends O{constructor(...e){super(...e),this.title="8 spaces",this.tabSize="8"}},H=class TabSizeTen extends O{constructor(...e){super(...e),this.title="10 spaces",this.tabSize="10"}},N=class TabSizeTwelve extends O{constructor(...e){super(...e),this.title="12 spaces",this.tabSize="12"}};let SwitchTabSize=class SwitchTabSize extends MainWindowGlobalCommand{run(e){e.pushPage(new I.Z4(this.title,"tab-sizes",this.pageItems),!0)}get pageItems(){return[O,W,z,$,F,H,N].map(e=>e.item())}select(e){this.run(e)}constructor(...e){super(...e),this.title="Change tab size rendering",this.icon="gear-color-fg-muted",this.priority=10,this.dismissAfterRun=!1}};let V=class OpenInDotDev extends MainWindowCommand{isApplicable(){return this.fetchLink() instanceof HTMLAnchorElement}fetchLink(){return document.querySelector(".js-github-dev-shortcut")}run(){this.fetchLink()?.click()}constructor(...e){super(...e),this.title="Open in github.dev editor",this.icon="codespaces-color-fg-muted",this.priority=10}};let SwitchTheme=class SwitchTheme extends MainWindowGlobalCommand{run(e){e.pushPage(new I.Z4(this.title,"switch-theme-page-1",this.pageItems),!0)}get pageItems(){return[U,J,K,Z,X].map(e=>e.item())}select(e){this.run(e)}constructor(...e){super(...e),this.title="Switch theme",this.icon="paintbrush-color-fg-muted",this.priority=9,this.dismissAfterRun=!1}};let U=class SwitchToDark extends MainWindowCommand{applyTheme(){this.loadStyles(this.theme),"auto"!==this.mode&&(0,D.on)(this.theme,this.mode),(0,D.h5)(this.mode)}async run(){this.applyTheme(),this.saveSettings(this.mode,this.lightTheme,this.darkTheme)}async saveSettings(e=this.mode,t,s){let o=new FormData;o.set("color_mode",e),t&&o.set("light_theme",t),s&&o.set("dark_theme",s);let i=await (0,R.Q)("/settings/appearance/color_mode",{method:"PUT",body:o}),r=await i.json();this.loadStyles(r.light_theme),this.loadStyles(r.dark_theme),(0,D.on)(r.light_theme,"light"),(0,D.on)(r.dark_theme,"dark"),(0,D.h5)(r.color_mode)}loadStyles(e){let t=document.querySelector(`link[data-color-theme='${e}']`);t&&!t.hasAttribute("href")&&t.hasAttribute("data-href")&&t.setAttribute("href",t.getAttribute("data-href"))}get darkTheme(){return"dark"===this.mode?this.theme:(0,D.yn)("dark")}get lightTheme(){return"light"===this.mode?this.theme:(0,D.yn)("light")}constructor(...e){super(...e),this.title="Default dark",this.icon="moon-color-fg-muted",this.mode="dark",this.theme="dark",this.group=""}},Z=class SwitchToDarkHighContrast extends U{constructor(...e){super(...e),this.title="Switch theme to dark high contrast",this.theme="dark_high_contrast"}},K=class SwitchToDarkDimmed extends U{constructor(...e){super(...e),this.title="Dark dimmed",this.theme="dark_dimmed"}},J=class SwitchToLight extends U{constructor(...e){super(...e),this.title="Default light",this.icon="sun-color-fg-muted",this.mode="light",this.theme="light"}},X=class SwitchToAuto extends U{get darkTheme(){}get lightTheme(){}constructor(...e){super(...e),this.title="Sync with system settings",this.icon="sun-color-fg-muted",this.mode="auto"}},G=class UpdateSubscription extends MainWindowCommand{isApplicable(){return this.fetchButton() instanceof HTMLButtonElement&&this.fetchButton()?.disabled===!1}isSubscribe(){return"Subscribe"===this.fetchButton()?.textContent?.trim()}fetchButton(){return document.querySelector("[data-thread-subscribe-button]")}run(){this.fetchButton()?.click()}constructor(){super();let e=this.isSubscribe();this.title=`${e?"Subscribe":"Unsubscribe"}`,this.icon=`${e?"bell":"bell-slash"}-color-fg-muted`}},Q=[V,SwitchTabSize,SwitchTheme,G];var Y=s(46426);function ee(e){e.focus(),e.selectionStart=e.selectionEnd=e.value.length}let EditIssueBody=class EditIssueBody extends MainWindowCommand{issueBody(){return document.querySelector(".js-command-palette-issue-body")}isIssue(){return!!this.issueBody()}isApplicable(){return this.isIssue()}run(){let e=document.createElement("button");e.hidden=!0,e.classList.add("js-comment-edit-button");let t=document.querySelector("div.js-comment");t?.appendChild(e),e.click(),e.remove(),setTimeout(()=>{let e=t?.parentElement?.querySelector("textarea.js-comment-field");e&&ee(e)},0)}constructor(...e){super(...e),this.title="Edit issue body",this.icon="pencil-color-fg-muted"}};let EditIssueTitle=class EditIssueTitle extends MainWindowCommand{issueBody(){return document.querySelector(".js-command-palette-issue-body")}isIssue(){return!!this.issueBody()}isApplicable(){return this.fetchButton() instanceof HTMLButtonElement&&this.isIssue()}fetchButton(){return document.querySelector(".js-title-edit-button")}run(){this.fetchButton()?.click(),setTimeout(()=>{let e=document.querySelector("input#issue_title[autofocus]");e&&ee(e)},0)}constructor(...e){super(...e),this.title="Edit issue title",this.icon="pencil-color-fg-muted"}};let AddTasklist=class AddTasklist extends MainWindowCommand{issueBody(){return document.querySelector(".js-command-palette-issue-body")}isIssue(){return!!this.issueBody()}isApplicable(){return(0,Y.c)("TASKLIST_BLOCK")&&this.isIssue()}run(){let e=document.createElement("button");e.hidden=!0,e.classList.add("js-comment-edit-button");let t=document.querySelector("div.js-comment");t?.appendChild(e),e.click(),e.remove(),setTimeout(()=>{let e=t?.parentElement?.querySelector("textarea.js-comment-field");if(e){let t=document.createTextNode("```[tasklist]\n- [ ] Create a draft issue or type # to select an issue\n```");""!==e.value&&(t=document.createTextNode("\n\n```[tasklist]\n- [ ] Create a draft issue or type # to select an issue\n```")),ee(e),e?.appendChild(t)}},0)}constructor(...e){super(...e),this.title="Add tasklist to issue",this.icon="plus-circle-color-fg-muted"}};let et=class TransferIssue extends MainWindowCommand{isApplicable(){return this.fetchDetails() instanceof HTMLDetailsElement}fetchDetails(){return document.querySelector("details.js-transfer-issue")}run(){let e=this.fetchDetails();if(e){let t=()=>{setTimeout(()=>{e.querySelector("[data-menu-button]")?.focus()},0)};e.querySelector("include-fragment")?.addEventListener("load",t),e.open=!0,t()}}constructor(...e){super(...e),this.title="Transfer issue\u2026",this.icon="arrow-right-color-fg-muted"}},es=class LockIssue extends MainWindowCommand{isApplicable(){return this.fetchDetails() instanceof HTMLDetailsElement}isLock(){return"Lock conversation"===document.querySelector("summary.lock-toggle-link")?.textContent?.trim()}fetchDetails(){return document.querySelector("details.js-lock-issue")}run(){let e=this.fetchDetails();e&&(e.open=!0,setTimeout(()=>{document.querySelector("#unlock-reason")?.focus()},0))}constructor(){super();let e=this.isLock();this.title=`${e?"Lock":"Unlock"} conversation`,this.icon=`${e?"lock":"key"}-color-fg-muted`}},eo=class DeleteIssue extends MainWindowCommand{isApplicable(){return this.fetchDetails() instanceof HTMLDetailsElement}fetchDetails(){return document.querySelector("details.js-delete-issue")}run(){let e=this.fetchDetails();e&&(e.open=!0,setTimeout(()=>{e.querySelector('button[type="submit"]')?.focus()},0))}constructor(...e){super(...e),this.title="Delete issue\u2026",this.icon="trash-color-fg-muted"}};let ConvertToDiscussion=class ConvertToDiscussion extends MainWindowCommand{isApplicable(){return this.fetchConvertButton() instanceof HTMLButtonElement}fetchConvertButton(){return document.querySelector("button#dialog-show-convert-to-discussion")}fetchDialog(){return document.querySelector("#convert-to-discussion")}run(){let e=this.fetchConvertButton(),t=this.fetchDialog();if(e&&t){let e=()=>{setTimeout(()=>{t?.querySelector("#convert-to-discussion-category")?.focus()},0)};t.querySelector("include-fragment")?.addEventListener("load",e),t.open=!0,e()}}constructor(...e){super(...e),this.title="Convert issue to discussion\u2026",this.icon="comment-discussion-color-fg-muted"}};let ei=[EditIssueTitle,EditIssueBody,AddTasklist,es,et,eo,ConvertToDiscussion];var er=s(97165),en=s(76745);let OpenCodespace=class OpenCodespace extends MainWindowCommand{isApplicable(){let e=this.fetchElements();return!!(e.codeModal&&e.codespacesForm&&e.newCodespacesButton&&e.codespacesTab)}run(){let{codeModal:e,codespacesTab:t,newCodespacesButton:s}=this.fetchElements();e&&t&&s&&(e.open=!0,t.click(),s instanceof HTMLButtonElement&&s.click())}fetchElements(){let e=document.querySelector(".js-create-codespaces-form-command"),t=e?.closest("details")||null,s=t?.querySelector('[data-tab="cloud"]')||null,o=e?.querySelector('summary[role="button"], button[type="submit"]')||null;return{codespacesForm:e,codeModal:t,codespacesTab:s,newCodespacesButton:o}}constructor(...e){super(...e),this.title="Open in new codespace",this.icon="codespaces-color-fg-muted",this.priority=11}};var ec=s(98950);let ea=class EditPullRequestBody extends EditIssueBody{pullRequestBody(){return document.querySelector(".js-command-palette-pull-body")}isPullRequest(){return!!this.pullRequestBody()}isApplicable(){return this.isPullRequest()}constructor(...e){super(...e),this.title="Edit pull request body"}},el=class EditPullRequestTitle extends EditIssueTitle{pullRequestBody(){return document.querySelector(".js-command-palette-pull-body")}isPullRequest(){return!!this.pullRequestBody()}isApplicable(){return this.fetchButton() instanceof HTMLButtonElement&&this.isPullRequest()}constructor(...e){super(...e),this.title="Edit pull request title"}},eu=class UpdateBranch extends MainWindowCommand{isApplicable(){return this.fetchButton() instanceof HTMLButtonElement}fetchButton(){return document.querySelector(".js-update-branch-form button")}run(){let e=this.fetchButton();e&&(e.scrollIntoView({behavior:"smooth",block:"center"}),e.click())}constructor(...e){super(...e),this.title="Update current branch",this.icon="sync-color-fg-muted"}},ed=class ConvertToDraft extends MainWindowCommand{isApplicable(){return this.fetchButton() instanceof HTMLButtonElement}fetchButton(){return document.querySelector(".js-convert-to-draft")}run(){let e=this.fetchButton()?.closest("details");e&&(e.open=!0,setTimeout(()=>{e.querySelector(".js-convert-to-draft")?.focus()},0))}constructor(...e){super(...e),this.title="Convert to draft",this.icon="git-pull-request-draft-color-fg-muted"}},eh=class CopyBranchName extends MainWindowCommand{isApplicable(){return this.fetchClipboardCopy() instanceof en.Z}fetchClipboardCopy(){return document.querySelector(".js-copy-branch")}async run(e){let t=this.fetchClipboardCopy();if(t instanceof en.Z){let s=t.value;try{await (0,ec.z)(s),e.displayFlash("success","Branch name copied to clipboard!")}catch{e.displayFlash("error","Unable to copy branch name to clipboard!")}}}constructor(...e){super(...e),this.title="Copy current branch name",this.icon="copy-color-fg-muted"}},ep=[eh,el,ea,eu,ed,OpenCodespace],em=class CopyPermalink extends MainWindowCommand{isApplicable(){return this.fetchPermalinkContainer() instanceof HTMLAnchorElement}fetchPermalinkContainer(){return document.querySelector(".js-permalink-shortcut")}async run(e){let t=this.fetchPermalinkContainer();if(t){let s=`${t.href}${window.location.hash}`;try{await (0,ec.z)(s),e.displayFlash("success","Copied permalink!")}catch{e.displayFlash("error","Failed to copy permalink!")}}}constructor(...e){super(...e),this.title="Copy file permalink",this.icon="copy-color-fg-muted"}},ef=class CloneCopyHttps extends MainWindowCommand{isApplicable(){return this.backendCommandsDisabled()&&this.fetchClipboardCopy() instanceof en.Z}fetchClipboardCopy(){return document.querySelector(".js-clone-url-http")}backendCommandsDisabled(){return!!window.commandPalette&&!window.commandPalette.hasAttribute("commands-path")}async run(e){let t=this.fetchClipboardCopy();if(t instanceof en.Z){let s=t.value;try{await (0,ec.z)(s),e.displayFlash("success","Clone URL copied!")}catch{e.displayFlash("error","Clone URL couldn't be copied")}}}constructor(...e){super(...e),this.title="Clone repository: Copy HTTPS",this.icon="copy-color-fg-muted",this.priority=4}},ey=class CloneCopySsh extends MainWindowCommand{isApplicable(){return this.backendCommandsDisabled()&&this.fetchClipboardCopy() instanceof en.Z}fetchClipboardCopy(){return document.querySelector(".js-clone-url-ssh")}backendCommandsDisabled(){return!!window.commandPalette&&!window.commandPalette.hasAttribute("commands-path")}async run(e){let t=this.fetchClipboardCopy();if(t instanceof en.Z){let s=t.value;try{await (0,ec.z)(s),e.displayFlash("success","Clone URL copied!")}catch{e.displayFlash("error","Clone URL couldn't be copied")}}}constructor(...e){super(...e),this.title="Clone repository: Copy SSH",this.icon="copy-color-fg-muted",this.priority=3}},eb=class CloneCopyCli extends MainWindowCommand{isApplicable(){return this.backendCommandsDisabled()&&this.fetchClipboardCopy() instanceof en.Z}fetchClipboardCopy(){return document.querySelector(".js-clone-url-gh-cli")}backendCommandsDisabled(){return!!window.commandPalette&&!window.commandPalette.hasAttribute("commands-path")}async run(e){let t=this.fetchClipboardCopy();if(t instanceof en.Z){let s=t.value;try{await (0,ec.z)(s),e.displayFlash("success","Clone URL copied!")}catch{e.displayFlash("error","Clone URL couldn't be copied")}}}constructor(...e){super(...e),this.title="Clone repository: Copy GitHub CLI",this.icon="copy-color-fg-muted",this.priority=2}},eg=[ef,ey,eb,em,OpenCodespace],ev=class MainWindowCommandsProvider extends er.B{enabledFor(e){return">"===e.mode||!!["discussion","issue","pull_request"].includes(e.scope.type)}get hasCommands(){return!0}async fetch(e){this.items=[...ei.map(e=>e.item()),...ep.map(e=>e.item()),...eg.map(e=>e.item()),...B.map(e=>e.item()),...Q.map(e=>e.item())].filter(t=>t.isApplicable(e));let t=this.fuzzyFilter(this.items,e);return{results:t}}get debounce(){return 0}clearCache(){}constructor(...e){super(...e),this.itemsByType={},this.items=[],this.needsFetch=!0}};window.commandPalette&&window.commandPalette.registerProvider("main-window-commands-provider",new ev),window.addEventListener("command-palette-ready",()=>{window.commandPalette?.registerProvider("main-window-commands-provider",new ev)});var ew=s(7667),eC=function(e,t,s,o){var i,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,s):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,s,o);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(n=(r<3?i(n):r>3?i(t,s,n):i(t,s))||n);return r>3&&n&&Object.defineProperty(t,s,n),n};let eS=((o=class CommandPaletteInputElement extends HTMLElement{static get observedAttributes(){return["input-value","typeahead","scope"]}setup(){this.classList.add("d-flex","flex-items-center","flex-nowrap","py-1","pl-3","pr-2","border-bottom"),this.input=this.querySelector("input.js-input"),this.overlayInput=this.querySelector("input.js-overlay-input"),this.scopeElement=this.querySelector("command-palette-scope"),this.searchIcon=this.querySelector(".js-search-icon"),this.spinner=this.querySelector(".js-spinner"),this.defaultScope=this.scope,this.hasAttribute("autofocus")&&this.input.focus(),0!==this.inputValue.length&&this._dispatchEvent("command-palette-input"),this.setupComplete=!0;let e=new CustomEvent("command-palette-input-ready",{bubbles:!0,cancelable:!0});this.dispatchEvent(e)}connectedCallback(){this.setupComplete||this.setup(),this.inputValue=this.getAttribute("input-value")||"",this.typeahead=this.getAttribute("typeahead")||"",this.placeholder=this.getAttribute("placeholder")||"",this.connected=!0}attributeChangedCallback(e,t,s){this.input&&("typeahead"===e?this.typeahead=s:"input-value"===e&&(this.inputValue=s,this._dispatchEvent("command-palette-input")))}focus(){this.input.focus()}setRemovedTokenAndSelect(e){e&&(this.inputValue=e),this.focus(),this.input.select()}get scope(){return this.scopeElement.scope}set scope(e){this.scopeElement.scope=e,this.clearButton.hidden=!this.hasSomethingToClear()}hasScope(){return this.scopeElement.hasScope()}clearScope(){return this.scopeElement.clearScope()}removeToken(){return this.scopeElement.removeToken()}get placeholder(){return this.input.getAttribute("placeholder")||""}set placeholder(e){this.input.setAttribute("placeholder",e)}get typeaheadPlaceholderText(){return this.typeaheadPlaceholder.textContent||""}set typeaheadPlaceholderText(e){this.typeaheadPlaceholder.textContent=e}get inputValue(){return this.input?.value||""}set inputValue(e){this.input.value=e,this.typeahead=e,this.resetPlaceholder(),this.onInput()}get overlay(){return this.overlayInput.value}set overlay(e){this.overlayInput.value=e}get typeahead(){return this.typeaheadValue}set typeahead(e){if(this.typeaheadValue=this.overlay+e,this.mirror.textContent=this.inputValue,""===e)this.typeaheadText.textContent="";else if(this.placeholder="",this.typeaheadPlaceholderText="",this.valueStartsWithTypeahead){let t=this.inputValue.length-(this.overlay?1:0);this.typeaheadText.textContent=e.substring(t)}else this.typeaheadText.textContent=` \u2013 ${e}`}showModePlaceholder(e=""){this.typeaheadPlaceholderText=e}get valueStartsWithTypeahead(){return this.typeaheadValue.toLowerCase().startsWith(this.inputValue.toLowerCase())}get isCursorAtEnd(){return this.inputValue.length===this.input.selectionStart}set loading(e){this.spinner.hidden=!e,this.searchIcon.hidden=e}resetPlaceholder(){let e=this.inputValue.replace(this.overlay,"");e&&this.overlay&&(this.typeaheadPlaceholderText=""),this.placeholder=this.getAttribute("placeholder")||""}onInput(){this.resetPlaceholder(),this.connected&&(this.clearButton.hidden=!this.hasSomethingToClear(),this._dispatchEvent("command-palette-input"))}onClear(e){e instanceof KeyboardEvent&&"Enter"!==e.key||(this.inputValue="",this.input.focus(),this._dispatchEvent("command-palette-cleared"))}onKeydown(e){if(this.isSelectKeystroke(e.key)&&(this._dispatchEvent("command-palette-select"),e.stopImmediatePropagation(),e.preventDefault()),this.hasSomethingToClear()&&(0,ew.o)(e)&&"Backspace"===e.key){this.onClear();return}if(0===this.input.selectionStart&&0===this.input.selectionEnd&&"Backspace"===e.key){this._dispatchEvent("command-palette-descope"),e.stopImmediatePropagation(),e.preventDefault();return}}hasSomethingToClear(){return this.scopeElement.hasScope()||this.inputValue.length>0}isSelectKeystroke(e){return"Tab"===e||"ArrowRight"===e&&this.isCursorAtEnd}textSelected(){return this.input.selectionStart!==this.input.selectionEnd}_dispatchEvent(e){let t=new CustomEvent(e,{cancelable:!0,detail:{typeahead:this.typeahead,value:this.inputValue}});return this.dispatchEvent(t)}constructor(...e){super(...e),this.setupComplete=!1,this.connected=!1}}).tagName="command-palette-input",o);eC([i.fA],eS.prototype,"typeaheadPlaceholder",void 0),eC([i.fA],eS.prototype,"typeaheadText",void 0),eC([i.fA],eS.prototype,"mirror",void 0),eC([i.fA],eS.prototype,"clearButton",void 0),eS=eC([i.Ih],eS);var eT=s(67044),eE=s(56959),ek=s(54697),e_=s(36071),ej=s(71643);function ex(){return document.querySelector(ew.Z.tagName)}function eL(e){if(!e.code)return;let t=ex();if(!t)return;let s=eB(),o=eP(t.platformActivationHotkey,e),i=eP(t.platformSecondaryActivationHotkey,e),r=eP(t.platformCommandModeHotkey,e),n=!eM(e)&&!s&&(o||r),c=t.hasAttribute("memex-hotkey-enabled")&&s&&(o||i||r);(n||!s&&(i||r)||c)&&(eD(r),e.preventDefault(),e.stopPropagation())}function eP(e,t){let s=(0,eT.EL)(t);return!!s&&!!e&&(s=s.replace("\u02DA","k"),e.split(",").some(e=>s===e))}function eM(e){return eq(e)||eA(e)}function eq(e){let t=e.target;return!!t&&null!==t.closest(".js-previewable-comment-form")}function eA(e){let t=e.target;if(!t)return!1;let s=t.closest(".js-code-editor");if(!s)return!1;let o=(0,ek.Pi)(s);if(!o)return!1;let i=o.editor;if(!i)return!1;let r=i.getMode().name;return"gfm"===r||"markdown"===r}function eB(){let e=document.querySelector("#memex-root");return!!e}function eD(e){for(let t of document.querySelectorAll(".js-command-palette-dialog")){let s=t.querySelector(eS.tagName);if(!s)return;if(t.open)t.open=!1;else{eI(s,e);let o=t.querySelector(ew.Z.tagName);o&&(o.previouslyActiveElement=document.activeElement),t.open=!0}}}function eI(e,t){let s=e.inputValue.startsWith(">");return t&&!s?(e.inputValue=`>${e.inputValue}`,!0):!t&&!!s&&(e.inputValue=e.inputValue.substring(1),!0)}window.customElements.get(ew.Z.tagName)||window.customElements.define(ew.Z.tagName,ew.Z),document.addEventListener("keydown",eL),(0,e_.N7)(".js-activate-command-palette",e=>{e.addEventListener("click",()=>{document.querySelector(".js-command-palette-dialog")?.setAttribute("open","true")})}),(0,e_.N7)(".js-command-palette-dialog",e=>{if(!e)return;let t=window.performance.now(),s=ex();s&&(e.addEventListener("toggle",()=>{e.open?s.activate():s.deactivate()}),s.addEventListener("command-palette-activated",e=>{e instanceof CustomEvent&&(e.detail.previouslyActivated||(0,ej.b)({distributionKey:"COMMAND_PALETTE_FIRST_OPEN",distributionValue:window.performance.now()-t}))}))}),(0,e_.N7)(".js-socket-channel.js-updatable-content",{subscribe:e=>(0,eE.RB)(e,"socket:message",()=>{let e=ex();e&&e.clearCommands(!1)})})},54697:(e,t,s)=>{s.d(t,{Pi:()=>n,gD:()=>c,hX:()=>l,l8:()=>a});var o=s(59753);let i=new WeakMap,r=new WeakMap;function n(e){return i.get(e)}async function c(e){return i.get(e)||u(await d(e,"codeEditor:ready"))}function a(e,t){r.set(e,t)}function l(e){return r.get(e)}function u(e){if(!(e instanceof CustomEvent))throw Error("assert: event is not a CustomEvent");let t=e.detail.editor;if(!e.target)throw Error("assert: event.target is null");return i.set(e.target,t),t}function d(e,t){return new Promise(s=>{e.addEventListener(t,s,{once:!0})})}(0,o.on)("codeEditor:ready",".js-code-editor",u)},76237:(e,t,s)=>{s.d(t,{Fg:()=>h,I3:()=>n,h5:()=>l,on:()=>u,yn:()=>d});var o=s(4412),i=s(67404);function r(){(0,i.d8)("preferred_color_mode",n())}function n(){return c("dark")?"dark":c("light")?"light":void 0}function c(e){return window.matchMedia&&window.matchMedia(`(prefers-color-scheme: ${e})`).matches}function a(){let e=document.querySelector("html[data-color-mode]");if(e)return e.getAttribute("data-color-mode")}function l(e){let t=document.querySelector("html[data-color-mode]");t&&t.setAttribute("data-color-mode",e)}function u(e,t){let s=document.querySelector("html[data-color-mode]");s&&s.setAttribute(`data-${t}-theme`,e)}function d(e){let t=document.querySelector("html[data-color-mode]");if(t)return t.getAttribute(`data-${e}-theme`)}function h(e="light"){let t=a();return("auto"===t?n():t)??e}(async()=>{if(await o.x,r(),window.matchMedia){let e=window.matchMedia("(prefers-color-scheme: dark)");e?.addEventListener?e.addEventListener("change",r):e.addListener(r)}})()},67404:(e,t,s)=>{function o(e){return i(e)[0]}function i(e){let t=[];for(let s of r()){let[o,i]=s.trim().split("=");e===o&&void 0!==i&&t.push({key:o,value:i})}return t}function r(){try{return document.cookie.split(";")}catch{return[]}}function n(e,t,s=null,o=!1,i="lax"){let r=document.domain;if(null==r)throw Error("Unable to get document domain");r.endsWith(".github.com")&&(r="github.com");let n="https:"===location.protocol?"; secure":"",c=s?`; expires=${s}`:"";!1===o&&(r=`.${r}`);try{document.cookie=`${e}=${t}; path=/; domain=${r}${c}${n}; samesite=${i}`}catch{}}function c(e,t=!1){let s=document.domain;if(null==s)throw Error("Unable to get document domain");s.endsWith(".github.com")&&(s="github.com");let o=new Date().getTime(),i=new Date(o-1).toUTCString(),r="https:"===location.protocol?"; secure":"",n=`; expires=${i}`;!1===t&&(s=`.${s}`);try{document.cookie=`${e}=''; path=/; domain=${s}${n}${r}`}catch{}}s.d(t,{$1:()=>i,d8:()=>n,ej:()=>o,kT:()=>c})},67044:(e,t,s)=>{s.d(t,{EL:()=>o.EL,N9:()=>o.N9,Tz:()=>o.Tz});var o=s(11793)},56959:(e,t,s)=>{s.d(t,{RB:()=>o,qC:()=>i,w0:()=>Subscription});let Subscription=class Subscription{constructor(e){this.closed=!1,this.unsubscribe=()=>{e(),this.closed=!0}}};function o(e,t,s,o={capture:!1}){return e.addEventListener(t,s,o),new Subscription(()=>{e.removeEventListener(t,s,o)})}function i(...e){return new Subscription(()=>{for(let t of e)t.unsubscribe()})}}},e=>{var t=t=>e(e.s=t);e.O(0,["vendors-node_modules_dompurify_dist_purify_js","vendors-node_modules_stacktrace-parser_dist_stack-trace-parser_esm_js-node_modules_github_bro-a4c183","vendors-node_modules_github_selector-observer_dist_index_esm_js","vendors-node_modules_github_hydro-analytics-client_dist_analytics-client_js-node_modules_gith-f3aee1","vendors-node_modules_allex_crc32_lib_crc32_esm_js-node_modules_github_clipboard-copy-element_-2da1d5","ui_packages_soft-nav_soft-nav_ts","app_assets_modules_github_command-palette_items_help-item_ts-app_assets_modules_github_comman-48ad9d"],()=>t(75133));var s=e.O()}]);
//# sourceMappingURL=command-palette-4ee315dcab09.js.map