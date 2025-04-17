"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["global-copilot-menu"],{50045:(e,t,n)=>{n.d(t,{I:()=>i});let i=(0,n(96540).createContext)(null)},91618:(e,t,n)=>{n.d(t,{HS:()=>r,Oc:()=>o,Tv:()=>a,Xr:()=>SymbolChangedEvent,f7:()=>s,fD:()=>l,qR:()=>i});let OpenCopilotChatEvent=class OpenCopilotChatEvent extends Event{constructor(e){super("open-copilot-chat",{bubbles:!1,cancelable:!0}),this.payload=e}};let AddCopilotChatReferenceEvent=class AddCopilotChatReferenceEvent extends Event{constructor(e,t=!1,n){super("add-copilot-chat-reference",{bubbles:!1,cancelable:!0}),this.reference=e,this.openPanel=t,this.id=n}};let SymbolChangedEvent=class SymbolChangedEvent extends Event{constructor(e){super("symbol-changed",{bubbles:!1,cancelable:!0}),this.context=e}};function i(e){window.dispatchEvent(new OpenCopilotChatEvent(e))}function o(e,t=!1,n){window.dispatchEvent(new AddCopilotChatReferenceEvent(e,t,n))}function r(e){return window.addEventListener("open-copilot-chat",e),()=>{window.removeEventListener("open-copilot-chat",e)}}function s(e){return window.addEventListener("add-copilot-chat-reference",e),()=>{window.removeEventListener("add-copilot-chat-reference",e)}}function l(e){return window.addEventListener("search-copilot-chat",e),()=>{window.removeEventListener("search-copilot-chat",e)}}function a(e){return window.addEventListener("symbol-changed",e),()=>{window.removeEventListener("symbol-changed",e)}}},77342:(e,t,n)=>{n.d(t,{C6:()=>o,Wp:()=>a,hs:()=>s,mF:()=>l,wh:()=>i,xP:()=>r});let i={explain:"explain",conversation:"conversation",suggest:"suggest",discussFileDiff:"discuss-file-diff",explainFileDiff:"explain-file-diff",reviewPr:"review-pull-request",actionsAgent:"actions-agent"},o=["exception","filtered","publicCode","contentTooLarge","rateLimit","agentUnauthorized","agentRequest","networkError","multipleAgentsAttempt"],r=["bing-search","codesearch","semantic-code-search","lexical-code-search","kb-search","pathsearch","show-symbol-definition","getissue","getprcommits","getcommit","getrelease","getrepo","getdiff","get-diff-by-range","getfile","getfilechanges","getdiscussion","get-actions-job-logs","getpullrequest","getalert","planskill","get-github-data","support-search","get-figma","codesearchagentskill"],s={Experiments:"experiements",Prompt:"prompt",None:"none"},l={Unlicensed:"unlicensed",LicensedFull:"licensed_full",LicensedLimited:"licensed_limited"},a="NULL_MESSAGE"},2622:(e,t,n)=>{n.d(t,{W:()=>o});var i=n(75632);let o=new class CopilotFeatureFlags{get customInstructions(){return(0,i.G7)("copilot_chat_custom_instructions")}get immersiveFigmaIntegration(){return(0,i.G7)("copilot_immersive_figma_integration")}get immersiveIssuePreview(){return(0,i.G7)("copilot_immersive_issue_preview")}get createIssueForm(){return(0,i.G7)("copilot_api_create_issue_skill")}get createIssueIncludeAssignee(){return(0,i.G7)("copilot_immersive_issues_include_assignees")}get immersiveServiceNavigation(){return this.customCopilots||this.pipesPlugin}get copilotChatInterviewSurvey(){return(0,i.G7)("copilot_chat_interview_survey")}get newImmersiveReferencesUI(){return(0,i.G7)("copilot_new_immersive_references_ui")}get repoCustomInstructions(){return(0,i.G7)("copilot_chat_repo_custom_instructions")}get repoCustomInstructionsPreview(){return(0,i.G7)("copilot_chat_repo_custom_instructions_preview")}get attachImagesImmersive(){return(0,i.G7)("copilot_chat_attach_images")}get wholeAreaDragDrop(){return(0,i.G7)("copilot_chat_wholearea_dd")}get retryModelPicker(){return(0,i.G7)("copilot_chat_show_model_picker_on_retry")}get customCopilots(){return(0,i.G7)("copilot_custom_copilots")}get customCopilotsFilterThreads(){return(0,i.G7)("copilot_custom_copilots_filter_threads")}get customCopilotsIncreaseMaxFiles(){return(0,i.G7)("copilot_custom_copilots_increase_max_files")}get shareCustomCopilot(){return(0,i.G7)("copilot_custom_copilots_share")}get clientDOMSkills(){return(0,i.G7)("copilot_client_dom_skills")}get dotcomChatClientSideSkills(){return(0,i.G7)("dotcom_chat_client_side_skills")}get taskOrientedAssistive(){return(0,i.G7)("copilot_task_oriented_assistive")}get pipesPlugin(){return(0,i.G7)("copilot_pipes")}get workbenchPlugin(){return(0,i.G7)("copilot_workbench")}get workbenchEventStreaming(){return(0,i.G7)("copilot_workbench_event_streaming")}get copilotChatOpeningThreadSwitch(){return(0,i.G7)("copilot_chat_opening_thread_switch")}get copilotReadSharedConversation(){return(0,i.G7)("copilot_read_shared_conversation")}get copilotDuplicateThread(){return(0,i.G7)("copilot_duplicate_thread")}get copilotManageSharedConversations(){return(0,i.G7)("copilot_manage_shared_conversations")}get copilotLiveSharing(){return(0,i.G7)("copilot_live_sharing")}get copilotShareActiveSubthread(){return(0,i.G7)("copilot_share_active_subthread")}get copilotSharedForbiddenError(){return(0,i.G7)("copilot_share_forbidden_error")}get copilotUIRefs(){return(0,i.G7)("copilot_ui_refs")}get dotcomChatFileUpload(){return(0,i.G7)("copilot_dotcom_chat_file_upload")&&(0,i.G7)("copilot_chat_attachments")}get copilotChatO1Tools(){return(0,i.G7)("copilot_api_tools_for_non_streaming_models")}get topicsAsReferences(){return(0,i.G7)("copilot_topics_as_references")}get bingGroundingServiceEnabled(){return(0,i.G7)("copilot_bing_search_use_azure_ai_agent_service")}get bingGroundingUIEnabled(){return(0,i.G7)("copilot_bing_search_use_grounding_ui")&&this.bingGroundingServiceEnabled}get showDeepCodeSearchButton(){return(0,i.G7)("copilot_show_deep_code_search_button")&&(0,i.G7)("copilot_api_search_agent_skill")}get headerButtonToImmersive(){return(0,i.G7)("copilot_header_button_to_immersive")}get workbenchShadcnComponents(){return(0,i.G7)("copilot_workbench_shadcn_components")}get deleteAllConversations(){return(0,i.G7)("copilot_delete_all_conversations")}get staffPromptDialog(){return(0,i.G7)("copilot_staff_prompt_dialog")}get chatAutocomplete(){return(0,i.G7)("copilot_chat_autocomplete")}get workbenchGitHistory(){return(0,i.G7)("copilot_workbench_git_history_for_iterations")}get workbenchTerminal(){return(0,i.G7)("copilot_workbench_terminal")}get workbenchPreviewAnalytics(){return(0,i.G7)("copilot_workbench_preview_analytics")}get pasteTextFiles(){return(0,i.G7)("copilot_paste_text_files")}get freeToPaidTelemetry(){return(0,i.G7)("copilot_free_to_paid_telem")}get workbenchIteratePanel(){return(0,i.G7)("copilot_workbench_iterate_panel")}get visionAllowedInClaude(){return(0,i.G7)("copilot_chat_vision_in_claude")}get workbenchDataPanel(){return(0,i.G7)("copilot_workbench_kv_aca")}}},39483:(e,t,n)=>{n.d(t,{A:()=>s});let i=n.p+"azure-91ef97089dff.png",o=n.p+"jetbrains-e16495e63a33.png",r=n.p+"neovim-3301f23c4307.png",s={vscode:{url:"https://marketplace.visualstudio.com/items?itemName=GitHub.copilot",icon:n.p+"vscode-380056900de8.png",name:"Visual Studio Code",eventName:"VSCODE"},visualstudio:{url:"https://visualstudio.microsoft.com/github-copilot/",icon:n.p+"vsstudio-806c4b726938.png",name:"Visual Studio",eventName:"VS"},xcode:{url:"https://github.com/github/CopilotForXcode",icon:n.p+"xcode-a6c2735aa7ac.png",name:"Xcode",eventName:"XCODE"},jetbrains:{url:"https://plugins.jetbrains.com/plugin/17718-github-copilot",icon:o,name:"JetBrains",eventName:"JETBRAINS"},neovim:{url:"https://github.com/github/copilot.vim",icon:r,name:"Neovim",eventName:"NEOVIM"},datastudio:{url:"https://learn.microsoft.com/en-us/azure-data-studio/extensions/github-copilot-extension-overview",icon:i,name:"Azure Data Studio",eventName:"AZURE_DATA"}}},22994:(e,t,n)=>{var i=n(11110),o=n(74848),r=n(46988),s=n(89323),l=n(8338),a=n(47139),c=n(38621),d=n(64633),u=n(91618),h=n(77342),p=n(2622),m=n(11499),_=n(97074),g=n(12152);let f="global_copilot_menu",v="global_nav",b=e=>{p.W.freeToPaidTelemetry?(0,d.F)(e,f,v):(0,r.BI)("dotcom_chat.activate",{target:`GLOBAL_COPILOT_MENU_${e}`,mode:"global_nav"})},w=()=>{(0,u.qR)({id:"copilot-assistive",intent:h.wh.conversation,newThread:!0}),b("ASSISTIVE")},y=()=>{window.location.href="/copilot",(0,r.BI)("dotcom_chat.activate",{target:"GLOBAL_COPILOT_MENU_FULLSCREEN",mode:"global_nav"}),b("IMMERSIVE")};function x(e){let{ref:t,open:n,setOpen:i}=(0,_.Mm)(e.reactPartialAnchor);return(0,o.jsx)(s.W,{anchorRef:t,open:n,onOpenChange:i,children:(0,o.jsx)(j,{})})}function C(){return(0,o.jsxs)(s.W,{children:[(0,o.jsx)(s.W.Button,{leadingVisual:c.CopilotIcon,"aria-label":"Open Copilot\u2026",children:""}),(0,o.jsx)(j,{})]})}function k({reactPartialAnchor:e}){return(0,o.jsxs)(g.t,{fallback:null,children:[(0,o.jsx)(m.ak,{commands:{"copilot-chat:open-assistive":w,"copilot-chat:open-immersive":y}}),e?(0,o.jsx)(x,{reactPartialAnchor:e}):(0,o.jsx)(C,{})]})}function j(){return(0,o.jsx)(s.W.Overlay,{align:"end",children:(0,o.jsxs)(l.l,{style:{width:"15rem"},children:[(0,o.jsxs)(l.l.Group,{children:[(0,o.jsx)(l.l.GroupHeading,{children:"New conversation in"}),(0,o.jsx)(m.Vr,{commandId:"copilot-chat:open-assistive",leadingVisual:(0,o.jsx)(c.CommentIcon,{}),children:"Assistive"}),(0,o.jsxs)(l.l.LinkItem,{href:"/copilot",onClick:()=>b("FULLSCREEN"),children:[(0,o.jsx)(l.l.LeadingVisual,{children:(0,o.jsx)(c.ScreenFullIcon,{})}),"Immersive"]}),p.W.taskOrientedAssistive&&(0,o.jsxs)(l.l.Item,{onSelect:()=>{b("TASK_ORIENTED_ASSISTIVE"),(0,u.qR)({id:"copilot-task-oriented-assistive",intent:h.wh.conversation,newThread:!0,references:[]})},children:[(0,o.jsx)(l.l.LeadingVisual,{children:(0,o.jsx)(c.CommandPaletteIcon,{})}),"Task",(0,o.jsx)(l.l.TrailingVisual,{children:(0,o.jsx)(a.A,{variant:"accent",children:"Staff"})})]})]}),(0,o.jsx)(l.l.Divider,{}),(0,o.jsxs)(s.W,{onOpenChange:e=>e&&b("IDE_MENU_OPEN"),children:[(0,o.jsx)(s.W.Anchor,{children:(0,o.jsxs)(l.l.Item,{onSelect:()=>b("OPEN_WITH"),children:[(0,o.jsx)(l.l.LeadingVisual,{children:(0,o.jsx)(c.DownloadIcon,{})}),"Download for"]})}),(0,o.jsx)(s.W.Overlay,{children:(0,o.jsxs)(l.l,{children:[(0,o.jsx)(d.t,{menuLocation:f,mode:v}),(0,o.jsx)(l.l.Divider,{}),(0,o.jsxs)(l.l.LinkItem,{href:"https://docs.github.com/en/copilot/managing-copilot/configure-personal-settings/installing-github-copilot-in-the-cli",onClick:()=>b("CLI"),children:["CLI",(0,o.jsx)(l.l.LeadingVisual,{children:(0,o.jsx)(c.TerminalIcon,{})})]})]})})]}),(0,o.jsxs)(l.l.LinkItem,{href:"/settings/copilot",onClick:()=>b("SETTINGS"),children:["Settings",(0,o.jsx)(l.l.LeadingVisual,{children:(0,o.jsx)(c.GearIcon,{})})]})]})})}try{x.displayName||(x.displayName="ExternallyAnchoredGlobalCopilotMenu")}catch{}try{C.displayName||(C.displayName="GlobalCopilotMenuWithAnchor")}catch{}try{k.displayName||(k.displayName="GlobalCopilotMenu")}catch{}try{j.displayName||(j.displayName="GlobalCopilotMenuOverlay")}catch{}(0,i.k)("global-copilot-menu",{Component:k})},46988:(e,t,n)=>{let i;n.d(t,{BI:()=>p,Ti:()=>m,lA:()=>h});var o=n(70837),r=n(18679),s=n(80688),l=n(57516);let{getItem:a}=(0,s.A)("localStorage"),c="dimension_",d=["utm_source","utm_medium","utm_campaign","utm_term","utm_content","scid"];try{let e=(0,o.O)("octolytics");delete e.baseContext,i=new r.s(e)}catch{}function u(e){let t=(0,o.O)("octolytics").baseContext||{};if(t)for(let[e,n]of(delete t.app_id,delete t.event_url,delete t.host,Object.entries(t)))e.startsWith(c)&&(t[e.replace(c,"")]=n,delete t[e]);let n=document.querySelector("meta[name=visitor-payload]");for(let[e,i]of(n&&Object.assign(t,JSON.parse(atob(n.content))),new URLSearchParams(window.location.search)))d.includes(e.toLowerCase())&&(t[e]=i);return t.staff=(0,l.X)().toString(),Object.assign(t,e)}function h(e){i?.sendPageView(u(e))}function p(e,t={}){let n=document.head?.querySelector('meta[name="current-catalog-service"]')?.content,o=n?{service:n}:{};for(let[e,n]of Object.entries(t))null!=n&&(o[e]=`${n}`);i&&(u(o),i.sendEvent(e||"unknown",u(o)))}function m(e){return Object.fromEntries(Object.entries(e).map(([e,t])=>[e,JSON.stringify(t)]))}},73218:(e,t,n)=>{n.d(t,{l:()=>i});let i=()=>void 0},64128:(e,t,n)=>{n.d(t,{Y:()=>i});function i(){let e={};return e.promise=new Promise((t,n)=>{e.resolve=t,e.reject=n}),e}},74753:(e,t,n)=>{n.d(t,{A:()=>l});let{getItem:i,setItem:o,removeItem:r}=(0,n(80688).A)("localStorage"),s="REACT_PROFILING_ENABLED",l={enable:()=>o(s,"true"),disable:()=>r(s),isEnabled:()=>!!i(s)}},45996:(e,t,n)=>{n.d(t,{A:()=>r});var i=n(38568),o=n(96540);function r(){let e=(0,o.useRef)(!1),t=(0,o.useCallback)(()=>e.current,[]);return(0,i.N)(()=>(e.current=!0,()=>{e.current=!1}),[]),t}},38568:(e,t,n)=>{n.d(t,{N:()=>r});var i=n(47584),o=n(96540);let r=void 0!==i.cg?.document?.createElement?o.useLayoutEffect:o.useEffect},82060:(e,t,n)=>{n.d(t,{A:()=>r});var i=n(45996),o=n(96540);let r=function(e){let t=(0,i.A)(),[n,r]=(0,o.useState)(e);return[n,(0,o.useCallback)(e=>{t()&&r(e)},[t])]}},59418:(e,t,n)=>{n.d(t,{y:()=>s});var i=n(74848),o=n(21728),r=n(50045);function s(e){let t,n,s;let l=(0,o.c)(7),{children:a,appName:c,category:d,metadata:u}=e;return l[0]!==c||l[1]!==d||l[2]!==u?(n={appName:c,category:d,metadata:u},l[0]=c,l[1]=d,l[2]=u,l[3]=n):n=l[3],t=n,l[4]!==a||l[5]!==t?(s=(0,i.jsx)(r.I.Provider,{value:t,children:a}),l[4]=a,l[5]=t,l[6]=s):s=l[6],s}try{s.displayName||(s.displayName="AnalyticsProvider")}catch{}},64633:(e,t,n)=>{n.d(t,{F:()=>a,t:()=>c});var i=n(74848),o=n(8338),r=n(39483),s=n(46988),l=n(2622);function a(e,t,n,i,o){let r=`${t.toUpperCase()}_${e.toUpperCase()}`;(0,s.BI)("dotcom_chat.activate",{target:r,text:o,category:t,action:i,mode:n})}function c({menuLocation:e,mode:t}){return Object.entries(r.A).map(([n,{name:r,url:s,icon:c}])=>(0,i.jsxs)(o.l.LinkItem,{href:s,onClick:()=>{l.W.freeToPaidTelemetry&&a(n,e,t,"menu_item_click",r)},children:[r,(0,i.jsx)(o.l.LeadingVisual,{children:(0,i.jsx)("img",{src:c,alt:"",height:"20",width:"20"})})]},n))}try{c.displayName||(c.displayName="EditorMenuItems")}catch{}},18347:(e,t,n)=>{n.d(t,{BP:()=>u,D3:()=>d,O8:()=>a});var i=n(74848),o=n(21728),r=n(96540),s=n(47584),l=n(38568);let a={ServerRender:"ServerRender",ClientHydrate:"ClientHydrate",ClientRender:"ClientRender"},c=(0,r.createContext)(a.ClientRender);function d(e){let t,n,d,u;let h=(0,o.c)(8),{wasServerRendered:p,children:m}=e;h[0]!==p?(t=()=>s.X3?a.ServerRender:p?a.ClientHydrate:a.ClientRender,h[0]=p,h[1]=t):t=h[1];let[_,g]=(0,r.useState)(t);return h[2]!==_?(n=()=>{_!==a.ClientRender&&g(a.ClientRender)},d=[_],h[2]=_,h[3]=n,h[4]=d):(n=h[3],d=h[4]),(0,l.N)(n,d),h[5]!==m||h[6]!==_?(u=(0,i.jsx)(c.Provider,{value:_,children:m}),h[5]=m,h[6]=_,h[7]=u):u=h[7],u}function u(){return(0,r.useContext)(c)}try{c.displayName||(c.displayName="RenderPhaseContext")}catch{}try{d.displayName||(d.displayName="RenderPhaseProvider")}catch{}},67136:(e,t,n)=>{n.d(t,{Qn:()=>a,T8:()=>d,Y6:()=>h,k6:()=>u});var i=n(74848),o=n(65556),r=n(96540),s=n(73218),l=n(82060);let a=5e3,c=(0,r.createContext)({addToast:s.l,addPersistedToast:s.l,clearPersistedToast:s.l}),d=(0,r.createContext)({toasts:[],persistedToast:null});function u({children:e}){let[t,n]=(0,l.A)([]),[s,u]=(0,r.useState)(null),{safeSetTimeout:h}=(0,o.A)(),p=(0,r.useCallback)(function(e){n([...t,e]),h(()=>n(t.slice(1)),a)},[t,h,n]),m=(0,r.useCallback)(function(e){u(e)},[u]),_=(0,r.useCallback)(function(){u(null)},[u]),g=(0,r.useMemo)(()=>({addToast:p,addPersistedToast:m,clearPersistedToast:_}),[m,p,_]),f=(0,r.useMemo)(()=>({toasts:t,persistedToast:s}),[t,s]);return(0,i.jsx)(c.Provider,{value:g,children:(0,i.jsx)(d.Provider,{value:f,children:e})})}function h(){return(0,r.useContext)(c)}try{c.displayName||(c.displayName="ToastContext")}catch{}try{d.displayName||(d.displayName="InternalToastsContext")}catch{}try{u.displayName||(u.displayName="ToastContextProvider")}catch{}},91958:(e,t,n)=>{n.d(t,{V:()=>h});var i=n(74848),o=n(96540),r=n(67136),s=n(38621),l=n(65556),a=n(16255);let c={info:"",success:"Toast--success",error:"Toast--error"},d={info:(0,i.jsx)(s.InfoIcon,{}),success:(0,i.jsx)(s.CheckIcon,{}),error:(0,i.jsx)(s.StopIcon,{})},u=({message:e,timeToLive:t,icon:n,type:r="info",role:s="log"})=>{let[u,h]=o.useState(!0),{safeSetTimeout:p}=(0,l.A)();return(0,o.useEffect)(()=>{t&&p(()=>h(!1),t-300)},[p,t]),(0,i.jsx)(a.Z,{children:(0,i.jsx)("div",{className:"p-1 position-fixed bottom-0 left-0 mb-3 ml-3",children:(0,i.jsxs)("div",{className:`Toast ${c[r]} ${u?"Toast--animateIn":"Toast--animateOut"}`,id:"ui-app-toast","data-testid":`ui-app-toast-${r}`,role:s,children:[(0,i.jsx)("span",{className:"Toast-icon",children:n||d[r]}),(0,i.jsx)("span",{className:"Toast-content",children:e})]})})})};try{u.displayName||(u.displayName="Toast")}catch{}function h(){let{toasts:e,persistedToast:t}=(0,o.useContext)(r.T8);return(0,i.jsxs)(i.Fragment,{children:[e.map((e,t)=>(0,i.jsx)(u,{message:e.message,icon:e.icon,timeToLive:r.Qn,type:e.type,role:e.role},t)),t&&(0,i.jsx)(u,{message:t.message,icon:t.icon,type:t.type,role:t.role})]})}try{h.displayName||(h.displayName="Toasts")}catch{}},50515:(e,t,n)=>{n.d(t,{JC:()=>v,KK:()=>SequenceTracker,Vy:()=>s,ai:()=>f,oc:()=>a,rd:()=>d});let Leaf=class Leaf{constructor(e){this.children=[],this.parent=e}delete(e){let t=this.children.indexOf(e);return -1!==t&&(this.children=this.children.slice(0,t).concat(this.children.slice(t+1)),0===this.children.length&&this.parent.delete(this),!0)}add(e){return this.children.push(e),this}};let RadixTrie=class RadixTrie{constructor(e){this.parent=null,this.children={},this.parent=e||null}get(e){return this.children[e]}insert(e){let t=this;for(let n=0;n<e.length;n+=1){let i=e[n],o=t.get(i);if(n===e.length-1)return o instanceof RadixTrie&&(t.delete(o),o=null),o||(o=new Leaf(t),t.children[i]=o),o;o instanceof Leaf&&(o=null),o||(o=new RadixTrie(t),t.children[i]=o),t=o}return t}delete(e){for(let t in this.children)if(this.children[t]===e){let e=delete this.children[t];return 0===Object.keys(this.children).length&&this.parent&&this.parent.delete(this),e}return!1}};let i={"\xa1":"1","\u2122":"2","\xa3":"3","\xa2":"4","\u221E":"5","\xa7":"6","\xb6":"7","\u2022":"8","\xaa":"9","\xba":"0","\u2013":"-","\u2260":"=","\u2044":"!","\u20AC":"@","\u2039":"#","\u203A":"$",\uFB01:"%",\uFB02:"^","\u2021":"&","\xb0":"*","\xb7":"(","\u201A":")","\u2014":"_","\xb1":"+",\u0153:"q","\u2211":"w","\xae":"r","\u2020":"t","\xa5":"y","\xf8":"o",\u03C0:"p","\u201C":"[","\u2018":"]","\xab":"\\",\u0152:"Q","\u201E":"W","\xb4":"E","\u2030":"R",\u02C7:"T","\xc1":"Y","\xa8":"U",\u02C6:"I","\xd8":"O","\u220F":"P","\u201D":"{","\u2019":"}","\xbb":"|","\xe5":"a","\xdf":"s","\u2202":"d",\u0192:"f","\xa9":"g","\u02D9":"h","\u2206":"j","\u02DA":"k","\xac":"l","\u2026":";","\xe6":"'","\xc5":"A","\xcd":"S","\xce":"D","\xcf":"F","\u02DD":"G","\xd3":"H","\xd4":"J","\uF8FF":"K","\xd2":"L","\xda":":","\xc6":'"',\u03A9:"z","\u2248":"x","\xe7":"c","\u221A":"v","\u222B":"b","\xb5":"m","\u2264":",","\u2265":".","\xf7":"/","\xb8":"Z","\u02DB":"X","\xc7":"C","\u25CA":"V",\u0131:"B","\u02DC":"N","\xc2":"M","\xaf":"<","\u02D8":">","\xbf":"?"},o={"`":"~",1:"!",2:"@",3:"#",4:"$",5:"%",6:"^",7:"&",8:"*",9:"(",0:")","-":"_","=":"+","[":"{","]":"}","\\":"|",";":":","'":'"',",":"<",".":">","/":"?",q:"Q",w:"W",e:"E",r:"R",t:"T",y:"Y",u:"U",i:"I",o:"O",p:"P",a:"A",s:"S",d:"D",f:"F",g:"G",h:"H",j:"J",k:"K",l:"L",z:"Z",x:"X",c:"C",v:"V",b:"B",n:"N",m:"M"},r={" ":"Space","+":"Plus"};function s(e,t=navigator.platform){var n,a,d;let{ctrlKey:u,altKey:h,metaKey:p,shiftKey:m,key:_}=e,g=[];for(let[e,t]of[u,h,p,m].entries())t&&g.push(l[e]);if(!l.includes(_)){let e=g.includes("Alt")&&c.test(t)&&null!==(n=i[_])&&void 0!==n?n:_,s=g.includes("Shift")&&c.test(t)&&null!==(a=o[e])&&void 0!==a?a:e,l=null!==(d=r[s])&&void 0!==d?d:s;g.push(l)}return g.join("+")}let l=["Control","Alt","Meta","Shift"];function a(e,t){return function(e){let t=e.split("+").pop(),n=[];for(let t of["Control","Alt","Meta","Shift"])e.includes(t)&&n.push(t);return t&&n.push(t),n.join("+")}(function(e,t){var n;let i="undefined"==typeof window?void 0:window,o=c.test(null!==(n=null!=t?t:null==i?void 0:i.navigator.platform)&&void 0!==n?n:"")?"Meta":"Control";return e.replace("Mod",o)}(e,t))}let c=/Mac|iPod|iPhone|iPad/i;let SequenceTracker=class SequenceTracker{constructor({onReset:e}={}){this._path=[],this.timer=null,this.onReset=e}get path(){return this._path}get sequence(){return this._path.join(" ")}registerKeypress(e){this._path=[...this._path,s(e)],this.startTimer()}reset(){var e;this.killTimer(),this._path=[],null===(e=this.onReset)||void 0===e||e.call(this)}killTimer(){null!=this.timer&&window.clearTimeout(this.timer),this.timer=null}startTimer(){this.killTimer(),this.timer=window.setTimeout(()=>this.reset(),SequenceTracker.CHORD_TIMEOUT)}};function d(e){return e.split(" ").map(e=>a(e)).join(" ")}function u(e){if(!(e instanceof HTMLElement))return!1;let t=e.nodeName.toLowerCase(),n=(e.getAttribute("type")||"").toLowerCase();return"select"===t||"textarea"===t||"input"===t&&"submit"!==n&&"reset"!==n&&"checkbox"!==n&&"radio"!==n&&"file"!==n||e.isContentEditable}SequenceTracker.CHORD_TIMEOUT=1500;let h=new RadixTrie,p=new WeakMap,m=h,_=new SequenceTracker({onReset(){m=h}});function g(e){if(e.defaultPrevented||!(e.target instanceof Node))return;if(u(e.target)){let t=e.target;if(!t.id||!t.ownerDocument.querySelector(`[data-hotkey-scope="${t.id}"]`))return}let t=m.get(s(e));if(!t){_.reset();return}if(_.registerKeypress(e),m=t,t instanceof Leaf){let n;let i=e.target,o=!1,r=u(i);for(let e=t.children.length-1;e>=0;e-=1){let s=(n=t.children[e]).getAttribute("data-hotkey-scope");if(!r&&!s||r&&i.id===s){o=!0;break}}n&&o&&(function(e,t){let n=new CustomEvent("hotkey-fire",{cancelable:!0,detail:{path:t}});e.dispatchEvent(n)&&(u(e)?e.focus():e.click())}(n,_.path),e.preventDefault()),_.reset()}}function f(e,t){0===Object.keys(h.children).length&&document.addEventListener("keydown",g);let n=(function(e){let t=[],n=[""],i=!1;for(let o=0;o<e.length;o++){if(i&&","===e[o]){t.push(n),n=[""],i=!1;continue}if(" "===e[o]){n.push(""),i=!1;continue}i="+"!==e[o],n[n.length-1]+=e[o]}return t.push(n),t.map(e=>e.map(e=>a(e)).filter(e=>""!==e)).filter(e=>e.length>0)})(t||e.getAttribute("data-hotkey")||"").map(t=>h.insert(t).add(e));p.set(e,n)}function v(e){let t=p.get(e);if(t&&t.length)for(let n of t)n&&n.delete(e);0===Object.keys(h.children).length&&document.removeEventListener("keydown",g)}},18679:(e,t,n)=>{n.d(t,{s:()=>AnalyticsClient});let i=["utm_source","utm_medium","utm_campaign","utm_term","utm_content","scid"];var o=n(36301);let AnalyticsClient=class AnalyticsClient{constructor(e){this.options=e}get collectorUrl(){return this.options.collectorUrl}get clientId(){return this.options.clientId?this.options.clientId:(0,o.y)()}createEvent(e){return{page:location.href,title:document.title,context:{...this.options.baseContext,...function(){let e={};try{for(let[t,n]of new URLSearchParams(window.location.search)){let o=t.toLowerCase();i.includes(o)&&(e[o]=n)}return e}catch(e){return{}}}(),...e}}}sendPageView(e){let t=this.createEvent(e);this.send({page_views:[t]})}sendEvent(e,t){let n={...this.createEvent(t),type:e};this.send({events:[n]})}send({page_views:e,events:t}){let n=JSON.stringify({client_id:this.clientId,page_views:e,events:t,request_context:{referrer:function(){let e;try{e=window.top.document.referrer}catch(t){if(window.parent)try{e=window.parent.document.referrer}catch(e){}}return""===e&&(e=document.referrer),e}(),user_agent:navigator.userAgent,screen_resolution:function(){try{return`${screen.width}x${screen.height}`}catch(e){return"unknown"}}(),browser_resolution:function(){let e=0,t=0;try{return"number"==typeof window.innerWidth?(t=window.innerWidth,e=window.innerHeight):null!=document.documentElement&&null!=document.documentElement.clientWidth?(t=document.documentElement.clientWidth,e=document.documentElement.clientHeight):null!=document.body&&null!=document.body.clientWidth&&(t=document.body.clientWidth,e=document.body.clientHeight),`${t}x${e}`}catch(e){return"unknown"}}(),browser_languages:navigator.languages?navigator.languages.join(","):navigator.language||"",pixel_ratio:window.devicePixelRatio,timestamp:Date.now(),tz_seconds:-60*new Date().getTimezoneOffset()}});try{if(navigator.sendBeacon){navigator.sendBeacon(this.collectorUrl,n);return}}catch{}fetch(this.collectorUrl,{method:"POST",cache:"no-cache",headers:{"Content-Type":"application/json"},body:n,keepalive:!1})}}},70837:(e,t,n)=>{n.d(t,{O:()=>i});function i(e="ha"){let t;let n={};for(let i of Array.from(document.head.querySelectorAll(`meta[name^="${e}-"]`))){let{name:o,content:r}=i,s=o.replace(`${e}-`,"").replace(/-/g,"_");"url"===s?t=r:n[s]=r}if(!t)throw Error(`AnalyticsClient ${e}-url meta tag not found`);return{collectorUrl:t,...Object.keys(n).length>0?{baseContext:n}:{}}}}},e=>{var t=t=>e(e.s=t);e.O(0,["primer-react","react-core","react-lib","octicons-react","vendors-node_modules_primer_behaviors_dist_esm_index_mjs","vendors-node_modules_oddbird_popover-polyfill_dist_popover-fn_js","vendors-node_modules_github_mini-throttle_dist_index_js-node_modules_stacktrace-parser_dist_s-1d3d52","vendors-node_modules_emotion_is-prop-valid_dist_emotion-is-prop-valid_esm_js-node_modules_emo-b1c483","vendors-node_modules_github_catalyst_lib_index_js-node_modules_tanstack_react-query_build_mod-3b1f5d","ui_packages_failbot_failbot_ts","ui_packages_ui-commands_ui-commands_ts"],()=>t(22994)),e.O()}]);
//# sourceMappingURL=global-copilot-menu-7f3fe8de4a6a.js.map