function cov_n63m7pqg7(){var path="C:\\Users\\Justin\\OneDrive - Temasek Polytechnic\\Documents\\CG_Finance_Website\\CG_Finance_Website\\CG-Finance-Website\\public\\js\\register.js";var hash="ca816236d497f0b188c6d1c0e25574c5e546a557";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"C:\\Users\\Justin\\OneDrive - Temasek Polytechnic\\Documents\\CG_Finance_Website\\CG_Finance_Website\\CG-Finance-Website\\public\\js\\register.js",statementMap:{"0":{start:{line:2,column:16},end:{line:2,column:62}},"1":{start:{line:3,column:19},end:{line:3,column:68}},"2":{start:{line:4,column:2},end:{line:4,column:31}},"3":{start:{line:7,column:2},end:{line:10,column:3}},"4":{start:{line:8,column:4},end:{line:8,column:69}},"5":{start:{line:9,column:4},end:{line:9,column:11}},"6":{start:{line:11,column:2},end:{line:14,column:3}},"7":{start:{line:12,column:4},end:{line:12,column:53}},"8":{start:{line:13,column:4},end:{line:13,column:11}},"9":{start:{line:16,column:17},end:{line:16,column:19}},"10":{start:{line:17,column:17},end:{line:17,column:29}},"11":{start:{line:18,column:2},end:{line:18,column:25}},"12":{start:{line:19,column:2},end:{line:19,column:31}},"13":{start:{line:21,column:2},end:{line:24,column:3}},"14":{start:{line:22,column:4},end:{line:22,column:34}},"15":{start:{line:23,column:4},end:{line:23,column:11}},"16":{start:{line:25,column:2},end:{line:25,column:49}},"17":{start:{line:27,column:2},end:{line:27,column:24}},"18":{start:{line:29,column:16},end:{line:29,column:36}},"19":{start:{line:30,column:2},end:{line:30,column:42}},"20":{start:{line:31,column:2},end:{line:31,column:63}},"21":{start:{line:32,column:2},end:{line:42,column:4}},"22":{start:{line:33,column:4},end:{line:33,column:48}},"23":{start:{line:34,column:4},end:{line:34,column:26}},"24":{start:{line:35,column:4},end:{line:41,column:5}},"25":{start:{line:36,column:6},end:{line:36,column:40}},"26":{start:{line:37,column:6},end:{line:37,column:38}},"27":{start:{line:38,column:6},end:{line:38,column:42}},"28":{start:{line:40,column:6},end:{line:40,column:40}},"29":{start:{line:43,column:2},end:{line:43,column:40}},"30":{start:{line:44,column:2},end:{line:44,column:41}}},fnMap:{"0":{name:"submitForm",decl:{start:{line:1,column:15},end:{line:1,column:25}},loc:{start:{line:1,column:28},end:{line:45,column:1}},line:1},"1":{name:"(anonymous_1)",decl:{start:{line:32,column:19},end:{line:32,column:20}},loc:{start:{line:32,column:31},end:{line:42,column:3}},line:32}},branchMap:{"0":{loc:{start:{line:7,column:2},end:{line:10,column:3}},type:"if",locations:[{start:{line:7,column:2},end:{line:10,column:3}},{start:{line:7,column:2},end:{line:10,column:3}}],line:7},"1":{loc:{start:{line:11,column:2},end:{line:14,column:3}},type:"if",locations:[{start:{line:11,column:2},end:{line:14,column:3}},{start:{line:11,column:2},end:{line:14,column:3}}],line:11},"2":{loc:{start:{line:21,column:2},end:{line:24,column:3}},type:"if",locations:[{start:{line:21,column:2},end:{line:24,column:3}},{start:{line:21,column:2},end:{line:24,column:3}}],line:21},"3":{loc:{start:{line:21,column:6},end:{line:21,column:53}},type:"binary-expr",locations:[{start:{line:21,column:6},end:{line:21,column:26}},{start:{line:21,column:30},end:{line:21,column:53}}],line:21},"4":{loc:{start:{line:35,column:4},end:{line:41,column:5}},type:"if",locations:[{start:{line:35,column:4},end:{line:41,column:5}},{start:{line:35,column:4},end:{line:41,column:5}}],line:35}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0},f:{"0":0,"1":0},b:{"0":[0,0],"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"ca816236d497f0b188c6d1c0e25574c5e546a557"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_n63m7pqg7=function(){return actualCoverage;};}return actualCoverage;}cov_n63m7pqg7();async function submitForm(){cov_n63m7pqg7().f[0]++;const email=(cov_n63m7pqg7().s[0]++,document.getElementById("emailRegister").value);const password=(cov_n63m7pqg7().s[1]++,document.getElementById("passwordRegister").value);cov_n63m7pqg7().s[2]++;console.log(email,password);// Check if email contains "@" symbol
cov_n63m7pqg7().s[3]++;if(!email.includes("@")){cov_n63m7pqg7().b[0][0]++;cov_n63m7pqg7().s[4]++;alert('Invalid email format! Please include "@" in your email.');cov_n63m7pqg7().s[5]++;return;}else{cov_n63m7pqg7().b[0][1]++;}cov_n63m7pqg7().s[6]++;if(password.length<6){cov_n63m7pqg7().b[1][0]++;cov_n63m7pqg7().s[7]++;alert("Password must be at least 6 characters!");cov_n63m7pqg7().s[8]++;return;}else{cov_n63m7pqg7().b[1][1]++;}var response=(cov_n63m7pqg7().s[9]++,"");var jsonData=(cov_n63m7pqg7().s[10]++,new Object());cov_n63m7pqg7().s[11]++;jsonData.email=email;cov_n63m7pqg7().s[12]++;jsonData.password=password;cov_n63m7pqg7().s[13]++;if((cov_n63m7pqg7().b[3][0]++,jsonData.email=="")||(cov_n63m7pqg7().b[3][1]++,jsonData.password=="")){cov_n63m7pqg7().b[2][0]++;cov_n63m7pqg7().s[14]++;alert("All Fields required!");cov_n63m7pqg7().s[15]++;return;}else{cov_n63m7pqg7().b[2][1]++;}cov_n63m7pqg7().s[16]++;console.log(jsonData.email,jsonData.password);cov_n63m7pqg7().s[17]++;console.log("hellos");var request=(cov_n63m7pqg7().s[18]++,new XMLHttpRequest());cov_n63m7pqg7().s[19]++;request.open("POST","/register",true);cov_n63m7pqg7().s[20]++;request.setRequestHeader("Content-Type","application/json");cov_n63m7pqg7().s[21]++;request.onload=function(){cov_n63m7pqg7().f[1]++;cov_n63m7pqg7().s[22]++;response=JSON.parse(request.responseText);cov_n63m7pqg7().s[23]++;console.log(response);cov_n63m7pqg7().s[24]++;if(response.message==undefined){cov_n63m7pqg7().b[4][0]++;cov_n63m7pqg7().s[25]++;alert("Registration successful!");cov_n63m7pqg7().s[26]++;console.log("heelo i register");cov_n63m7pqg7().s[27]++;window.location.href="index.html";}else{cov_n63m7pqg7().b[4][1]++;cov_n63m7pqg7().s[28]++;alert("Unable to add retirement");}};cov_n63m7pqg7().s[29]++;console.log(JSON.stringify(jsonData));cov_n63m7pqg7().s[30]++;request.send(JSON.stringify(jsonData));}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfbjYzbTdwcWc3IiwiYWN0dWFsQ292ZXJhZ2UiLCJzdWJtaXRGb3JtIiwiZiIsImVtYWlsIiwicyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ2YWx1ZSIsInBhc3N3b3JkIiwiY29uc29sZSIsImxvZyIsImluY2x1ZGVzIiwiYiIsImFsZXJ0IiwibGVuZ3RoIiwicmVzcG9uc2UiLCJqc29uRGF0YSIsIk9iamVjdCIsInJlcXVlc3QiLCJYTUxIdHRwUmVxdWVzdCIsIm9wZW4iLCJzZXRSZXF1ZXN0SGVhZGVyIiwib25sb2FkIiwiSlNPTiIsInBhcnNlIiwicmVzcG9uc2VUZXh0IiwibWVzc2FnZSIsInVuZGVmaW5lZCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInN0cmluZ2lmeSIsInNlbmQiXSwic291cmNlcyI6WyJyZWdpc3Rlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJhc3luYyBmdW5jdGlvbiBzdWJtaXRGb3JtKCkge1xyXG4gIGNvbnN0IGVtYWlsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbWFpbFJlZ2lzdGVyXCIpLnZhbHVlO1xyXG4gIGNvbnN0IHBhc3N3b3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYXNzd29yZFJlZ2lzdGVyXCIpLnZhbHVlO1xyXG4gIGNvbnNvbGUubG9nKGVtYWlsLCBwYXNzd29yZCk7XHJcblxyXG4gIC8vIENoZWNrIGlmIGVtYWlsIGNvbnRhaW5zIFwiQFwiIHN5bWJvbFxyXG4gIGlmICghZW1haWwuaW5jbHVkZXMoXCJAXCIpKSB7XHJcbiAgICBhbGVydCgnSW52YWxpZCBlbWFpbCBmb3JtYXQhIFBsZWFzZSBpbmNsdWRlIFwiQFwiIGluIHlvdXIgZW1haWwuJyk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGlmIChwYXNzd29yZC5sZW5ndGggPCA2KSB7XHJcbiAgICBhbGVydChcIlBhc3N3b3JkIG11c3QgYmUgYXQgbGVhc3QgNiBjaGFyYWN0ZXJzIVwiKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIHZhciByZXNwb25zZSA9IFwiXCI7XHJcbiAgdmFyIGpzb25EYXRhID0gbmV3IE9iamVjdCgpO1xyXG4gIGpzb25EYXRhLmVtYWlsID0gZW1haWw7XHJcbiAganNvbkRhdGEucGFzc3dvcmQgPSBwYXNzd29yZDtcclxuXHJcbiAgaWYgKGpzb25EYXRhLmVtYWlsID09IFwiXCIgfHwganNvbkRhdGEucGFzc3dvcmQgPT0gXCJcIikge1xyXG4gICAgYWxlcnQoXCJBbGwgRmllbGRzIHJlcXVpcmVkIVwiKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgY29uc29sZS5sb2coanNvbkRhdGEuZW1haWwsIGpzb25EYXRhLnBhc3N3b3JkKTtcclxuXHJcbiAgY29uc29sZS5sb2coXCJoZWxsb3NcIik7XHJcblxyXG4gIHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgcmVxdWVzdC5vcGVuKFwiUE9TVFwiLCBcIi9yZWdpc3RlclwiLCB0cnVlKTtcclxuICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG4gIHJlcXVlc3Qub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmVzcG9uc2UgPSBKU09OLnBhcnNlKHJlcXVlc3QucmVzcG9uc2VUZXh0KTtcclxuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgIGlmIChyZXNwb25zZS5tZXNzYWdlID09IHVuZGVmaW5lZCkge1xyXG4gICAgICBhbGVydChcIlJlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsIVwiKTtcclxuICAgICAgY29uc29sZS5sb2coXCJoZWVsbyBpIHJlZ2lzdGVyXCIpO1xyXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiaW5kZXguaHRtbFwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYWxlcnQoXCJVbmFibGUgdG8gYWRkIHJldGlyZW1lbnRcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShqc29uRGF0YSkpO1xyXG4gIHJlcXVlc3Quc2VuZChKU09OLnN0cmluZ2lmeShqc29uRGF0YSkpO1xyXG59XHJcbiJdLCJtYXBwaW5ncyI6Ink2SEFlWTtBQUFBQSxhQUFBLFNBQUFBLENBQUEsU0FBQUMsY0FBQSxXQUFBQSxjQUFBLEVBQUFELGFBQUEsR0FmWixjQUFlLENBQUFFLFVBQVVBLENBQUEsQ0FBRyxDQUFBRixhQUFBLEdBQUFHLENBQUEsTUFDMUIsS0FBTSxDQUFBQyxLQUFLLEVBQUFKLGFBQUEsR0FBQUssQ0FBQSxNQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQ0MsS0FBSyxFQUM1RCxLQUFNLENBQUFDLFFBQVEsRUFBQVQsYUFBQSxHQUFBSyxDQUFBLE1BQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGtCQUFrQixDQUFDLENBQUNDLEtBQUssRUFBQ1IsYUFBQSxHQUFBSyxDQUFBLE1BQ25FSyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1AsS0FBSyxDQUFFSyxRQUFRLENBQUMsQ0FFNUI7QUFBQVQsYUFBQSxHQUFBSyxDQUFBLE1BQ0EsR0FBSSxDQUFDRCxLQUFLLENBQUNRLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBRSxDQUFBWixhQUFBLEdBQUFhLENBQUEsU0FBQWIsYUFBQSxHQUFBSyxDQUFBLE1BQ3hCUyxLQUFLLENBQUMseURBQXlELENBQUMsQ0FBQ2QsYUFBQSxHQUFBSyxDQUFBLE1BQ2pFLE9BQ0YsQ0FBQyxLQUFBTCxhQUFBLEdBQUFhLENBQUEsVUFBQWIsYUFBQSxHQUFBSyxDQUFBLE1BQ0QsR0FBSUksUUFBUSxDQUFDTSxNQUFNLENBQUcsQ0FBQyxDQUFFLENBQUFmLGFBQUEsR0FBQWEsQ0FBQSxTQUFBYixhQUFBLEdBQUFLLENBQUEsTUFDdkJTLEtBQUssQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDZCxhQUFBLEdBQUFLLENBQUEsTUFDakQsT0FDRixDQUFDLEtBQUFMLGFBQUEsR0FBQWEs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