function cov_1ak711d9is(){var path="C:\\Users\\Tangt\\Desktop\\Poly study stuff (Sem2.2)\\DevOps\\CG-Finance-Website\\public\\js\\register.js";var hash="eb7aadf54df219308b2625a7e7c118bf931e3015";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"C:\\Users\\Tangt\\Desktop\\Poly study stuff (Sem2.2)\\DevOps\\CG-Finance-Website\\public\\js\\register.js",statementMap:{"0":{start:{line:2,column:16},end:{line:2,column:54}},"1":{start:{line:3,column:19},end:{line:3,column:60}},"2":{start:{line:4,column:2},end:{line:4,column:31}},"3":{start:{line:7,column:2},end:{line:10,column:3}},"4":{start:{line:8,column:4},end:{line:8,column:69}},"5":{start:{line:9,column:4},end:{line:9,column:11}},"6":{start:{line:11,column:2},end:{line:14,column:3}},"7":{start:{line:12,column:4},end:{line:12,column:53}},"8":{start:{line:13,column:4},end:{line:13,column:11}},"9":{start:{line:16,column:17},end:{line:16,column:19}},"10":{start:{line:17,column:17},end:{line:17,column:29}},"11":{start:{line:18,column:2},end:{line:18,column:25}},"12":{start:{line:19,column:2},end:{line:19,column:31}},"13":{start:{line:21,column:2},end:{line:24,column:3}},"14":{start:{line:22,column:4},end:{line:22,column:34}},"15":{start:{line:23,column:4},end:{line:23,column:11}},"16":{start:{line:25,column:2},end:{line:25,column:49}},"17":{start:{line:27,column:2},end:{line:27,column:24}},"18":{start:{line:29,column:16},end:{line:29,column:36}},"19":{start:{line:30,column:2},end:{line:30,column:42}},"20":{start:{line:31,column:2},end:{line:31,column:63}},"21":{start:{line:32,column:2},end:{line:42,column:4}},"22":{start:{line:33,column:4},end:{line:33,column:48}},"23":{start:{line:34,column:4},end:{line:34,column:26}},"24":{start:{line:35,column:4},end:{line:41,column:5}},"25":{start:{line:36,column:6},end:{line:36,column:40}},"26":{start:{line:37,column:6},end:{line:37,column:38}},"27":{start:{line:38,column:6},end:{line:38,column:42}},"28":{start:{line:40,column:6},end:{line:40,column:40}},"29":{start:{line:43,column:2},end:{line:43,column:40}},"30":{start:{line:44,column:2},end:{line:44,column:41}}},fnMap:{"0":{name:"submitForm",decl:{start:{line:1,column:15},end:{line:1,column:25}},loc:{start:{line:1,column:28},end:{line:45,column:1}},line:1},"1":{name:"(anonymous_1)",decl:{start:{line:32,column:19},end:{line:32,column:20}},loc:{start:{line:32,column:31},end:{line:42,column:3}},line:32}},branchMap:{"0":{loc:{start:{line:7,column:2},end:{line:10,column:3}},type:"if",locations:[{start:{line:7,column:2},end:{line:10,column:3}},{start:{line:7,column:2},end:{line:10,column:3}}],line:7},"1":{loc:{start:{line:11,column:2},end:{line:14,column:3}},type:"if",locations:[{start:{line:11,column:2},end:{line:14,column:3}},{start:{line:11,column:2},end:{line:14,column:3}}],line:11},"2":{loc:{start:{line:21,column:2},end:{line:24,column:3}},type:"if",locations:[{start:{line:21,column:2},end:{line:24,column:3}},{start:{line:21,column:2},end:{line:24,column:3}}],line:21},"3":{loc:{start:{line:21,column:6},end:{line:21,column:53}},type:"binary-expr",locations:[{start:{line:21,column:6},end:{line:21,column:26}},{start:{line:21,column:30},end:{line:21,column:53}}],line:21},"4":{loc:{start:{line:35,column:4},end:{line:41,column:5}},type:"if",locations:[{start:{line:35,column:4},end:{line:41,column:5}},{start:{line:35,column:4},end:{line:41,column:5}}],line:35}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0},f:{"0":0,"1":0},b:{"0":[0,0],"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"eb7aadf54df219308b2625a7e7c118bf931e3015"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_1ak711d9is=function(){return actualCoverage;};}return actualCoverage;}cov_1ak711d9is();async function submitForm(){cov_1ak711d9is().f[0]++;const email=(cov_1ak711d9is().s[0]++,document.getElementById("email").value);const password=(cov_1ak711d9is().s[1]++,document.getElementById("password").value);cov_1ak711d9is().s[2]++;console.log(email,password);// Check if email contains "@" symbol
cov_1ak711d9is().s[3]++;if(!email.includes("@")){cov_1ak711d9is().b[0][0]++;cov_1ak711d9is().s[4]++;alert('Invalid email format! Please include "@" in your email.');cov_1ak711d9is().s[5]++;return;}else{cov_1ak711d9is().b[0][1]++;}cov_1ak711d9is().s[6]++;if(password.length<6){cov_1ak711d9is().b[1][0]++;cov_1ak711d9is().s[7]++;alert("Password must be at least 6 characters!");cov_1ak711d9is().s[8]++;return;}else{cov_1ak711d9is().b[1][1]++;}var response=(cov_1ak711d9is().s[9]++,"");var jsonData=(cov_1ak711d9is().s[10]++,new Object());cov_1ak711d9is().s[11]++;jsonData.email=email;cov_1ak711d9is().s[12]++;jsonData.password=password;cov_1ak711d9is().s[13]++;if((cov_1ak711d9is().b[3][0]++,jsonData.email=="")||(cov_1ak711d9is().b[3][1]++,jsonData.password=="")){cov_1ak711d9is().b[2][0]++;cov_1ak711d9is().s[14]++;alert("All Fields required!");cov_1ak711d9is().s[15]++;return;}else{cov_1ak711d9is().b[2][1]++;}cov_1ak711d9is().s[16]++;console.log(jsonData.email,jsonData.password);cov_1ak711d9is().s[17]++;console.log("hellos");var request=(cov_1ak711d9is().s[18]++,new XMLHttpRequest());cov_1ak711d9is().s[19]++;request.open("POST","/register",true);cov_1ak711d9is().s[20]++;request.setRequestHeader("Content-Type","application/json");cov_1ak711d9is().s[21]++;request.onload=function(){cov_1ak711d9is().f[1]++;cov_1ak711d9is().s[22]++;response=JSON.parse(request.responseText);cov_1ak711d9is().s[23]++;console.log(response);cov_1ak711d9is().s[24]++;if(response.message==undefined){cov_1ak711d9is().b[4][0]++;cov_1ak711d9is().s[25]++;alert("Registration successful!");cov_1ak711d9is().s[26]++;console.log("heelo i register");cov_1ak711d9is().s[27]++;window.location.href="index.html";}else{cov_1ak711d9is().b[4][1]++;cov_1ak711d9is().s[28]++;alert("Unable to add retirement");}};cov_1ak711d9is().s[29]++;console.log(JSON.stringify(jsonData));cov_1ak711d9is().s[30]++;request.send(JSON.stringify(jsonData));}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMWFrNzExZDlpcyIsImFjdHVhbENvdmVyYWdlIiwic3VibWl0Rm9ybSIsImYiLCJlbWFpbCIsInMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidmFsdWUiLCJwYXNzd29yZCIsImNvbnNvbGUiLCJsb2ciLCJpbmNsdWRlcyIsImIiLCJhbGVydCIsImxlbmd0aCIsInJlc3BvbnNlIiwianNvbkRhdGEiLCJPYmplY3QiLCJyZXF1ZXN0IiwiWE1MSHR0cFJlcXVlc3QiLCJvcGVuIiwic2V0UmVxdWVzdEhlYWRlciIsIm9ubG9hZCIsIkpTT04iLCJwYXJzZSIsInJlc3BvbnNlVGV4dCIsIm1lc3NhZ2UiLCJ1bmRlZmluZWQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJzdHJpbmdpZnkiLCJzZW5kIl0sInNvdXJjZXMiOlsicmVnaXN0ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiYXN5bmMgZnVuY3Rpb24gc3VibWl0Rm9ybSgpIHtcclxuICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW1haWxcIikudmFsdWU7XHJcbiAgY29uc3QgcGFzc3dvcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhc3N3b3JkXCIpLnZhbHVlO1xyXG4gIGNvbnNvbGUubG9nKGVtYWlsLCBwYXNzd29yZCk7XHJcblxyXG4gIC8vIENoZWNrIGlmIGVtYWlsIGNvbnRhaW5zIFwiQFwiIHN5bWJvbFxyXG4gIGlmICghZW1haWwuaW5jbHVkZXMoXCJAXCIpKSB7XHJcbiAgICBhbGVydCgnSW52YWxpZCBlbWFpbCBmb3JtYXQhIFBsZWFzZSBpbmNsdWRlIFwiQFwiIGluIHlvdXIgZW1haWwuJyk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGlmIChwYXNzd29yZC5sZW5ndGggPCA2KSB7XHJcbiAgICBhbGVydChcIlBhc3N3b3JkIG11c3QgYmUgYXQgbGVhc3QgNiBjaGFyYWN0ZXJzIVwiKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIHZhciByZXNwb25zZSA9IFwiXCI7XHJcbiAgdmFyIGpzb25EYXRhID0gbmV3IE9iamVjdCgpO1xyXG4gIGpzb25EYXRhLmVtYWlsID0gZW1haWw7XHJcbiAganNvbkRhdGEucGFzc3dvcmQgPSBwYXNzd29yZDtcclxuXHJcbiAgaWYgKGpzb25EYXRhLmVtYWlsID09IFwiXCIgfHwganNvbkRhdGEucGFzc3dvcmQgPT0gXCJcIikge1xyXG4gICAgYWxlcnQoXCJBbGwgRmllbGRzIHJlcXVpcmVkIVwiKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgY29uc29sZS5sb2coanNvbkRhdGEuZW1haWwsIGpzb25EYXRhLnBhc3N3b3JkKTtcclxuXHJcbiAgY29uc29sZS5sb2coXCJoZWxsb3NcIik7XHJcblxyXG4gIHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgcmVxdWVzdC5vcGVuKFwiUE9TVFwiLCBcIi9yZWdpc3RlclwiLCB0cnVlKTtcclxuICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG4gIHJlcXVlc3Qub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmVzcG9uc2UgPSBKU09OLnBhcnNlKHJlcXVlc3QucmVzcG9uc2VUZXh0KTtcclxuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgIGlmIChyZXNwb25zZS5tZXNzYWdlID09IHVuZGVmaW5lZCkge1xyXG4gICAgICBhbGVydChcIlJlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsIVwiKTtcclxuICAgICAgY29uc29sZS5sb2coXCJoZWVsbyBpIHJlZ2lzdGVyXCIpO1xyXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiaW5kZXguaHRtbFwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYWxlcnQoXCJVbmFibGUgdG8gYWRkIHJldGlyZW1lbnRcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShqc29uRGF0YSkpO1xyXG4gIHJlcXVlc3Quc2VuZChKU09OLnN0cmluZ2lmeShqc29uRGF0YSkpO1xyXG59XHJcbiJdLCJtYXBwaW5ncyI6IjAxSEFlWTtBQUFBQSxjQUFBLFNBQUFBLENBQUEsU0FBQUMsY0FBQSxXQUFBQSxjQUFBLEVBQUFELGNBQUEsR0FmWixjQUFlLENBQUFFLFVBQVVBLENBQUEsQ0FBRyxDQUFBRixjQUFBLEdBQUFHLENBQUEsTUFDMUIsS0FBTSxDQUFBQyxLQUFLLEVBQUFKLGNBQUEsR0FBQUssQ0FBQSxNQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsS0FBSyxFQUNwRCxLQUFNLENBQUFDLFFBQVEsRUFBQVQsY0FBQSxHQUFBSyxDQUFBLE1BQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDQyxLQUFLLEVBQUNSLGNBQUEsR0FBQUssQ0FBQSxNQUMzREssT0FBTyxDQUFDQyxHQUFHLENBQUNQLEtBQUssQ0FBRUssUUFBUSxDQUFDLENBRTVCO0FBQUFULGNBQUEsR0FBQUssQ0FBQSxNQUNBLEdBQUksQ0FBQ0QsS0FBSyxDQUFDUSxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUUsQ0FBQVosY0FBQSxHQUFBYSxDQUFBLFNBQUFiLGNBQUEsR0FBQUssQ0FBQSxNQUN4QlMsS0FBSyxDQUFDLHlEQUF5RCxDQUFDLENBQUNkLGNBQUEsR0FBQUssQ0FBQSxNQUNqRSxPQUNGLENBQUMsS0FBQUwsY0FBQSxHQUFBYSxDQUFBLFVBQUFiLGNBQUEsR0FBQUssQ0FBQSxNQUNELEdBQUlJLFFBQVEsQ0FBQ00sTUFBTSxDQUFHLENBQUMsQ0FBRSxDQUFBZixjQUFBLEdBQUFhLENBQUEsU0FBQWIsY0FBQSxHQUFBSyxDQUFBLE1BQ3ZCUyxLQUFLLENBQUMseUNBQXlDLENBQUMsQ0FBQ2QsY0FBQSxHQUFBSyxDQUFBLE1BQ2pELE9BQ0YsQ0FBQyxLQUFBTCxjQUFBLEdBQUFhLENBQUEsVUFFRCxHQUFJLENB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