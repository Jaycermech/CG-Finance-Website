function cov_seuhj6tbz(){var path="C:\\Users\\Justin\\OneDrive - Temasek Polytechnic\\Documents\\CG_Finance_Website\\CG_Finance_Website\\CG-Finance-Website\\public\\js\\login.js";var hash="72b458e7e8a3ad96b159364eeff730c16ea7b3b9";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"C:\\Users\\Justin\\OneDrive - Temasek Polytechnic\\Documents\\CG_Finance_Website\\CG_Finance_Website\\CG-Finance-Website\\public\\js\\login.js",statementMap:{"0":{start:{line:2,column:18},end:{line:2,column:56}},"1":{start:{line:3,column:21},end:{line:3,column:62}},"2":{start:{line:6,column:4},end:{line:9,column:5}},"3":{start:{line:7,column:6},end:{line:7,column:71}},"4":{start:{line:8,column:6},end:{line:8,column:13}},"5":{start:{line:12,column:4},end:{line:38,column:5}},"6":{start:{line:13,column:23},end:{line:22,column:8}},"7":{start:{line:24,column:19},end:{line:24,column:40}},"8":{start:{line:26,column:6},end:{line:35,column:7}},"9":{start:{line:27,column:8},end:{line:27,column:35}},"10":{start:{line:28,column:8},end:{line:28,column:84}},"11":{start:{line:30,column:10},end:{line:30,column:45}},"12":{start:{line:32,column:8},end:{line:32,column:44}},"13":{start:{line:34,column:8},end:{line:34,column:40}},"14":{start:{line:37,column:6},end:{line:37,column:45}}},fnMap:{"0":{name:"login",decl:{start:{line:1,column:15},end:{line:1,column:20}},loc:{start:{line:1,column:23},end:{line:39,column:3}},line:1}},branchMap:{"0":{loc:{start:{line:6,column:4},end:{line:9,column:5}},type:"if",locations:[{start:{line:6,column:4},end:{line:9,column:5}},{start:{line:6,column:4},end:{line:9,column:5}}],line:6},"1":{loc:{start:{line:26,column:6},end:{line:35,column:7}},type:"if",locations:[{start:{line:26,column:6},end:{line:35,column:7}},{start:{line:26,column:6},end:{line:35,column:7}}],line:26}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0},f:{"0":0},b:{"0":[0,0],"1":[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"72b458e7e8a3ad96b159364eeff730c16ea7b3b9"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_seuhj6tbz=function(){return actualCoverage;};}return actualCoverage;}cov_seuhj6tbz();async function login(){cov_seuhj6tbz().f[0]++;const email=(cov_seuhj6tbz().s[0]++,document.getElementById("email").value);const password=(cov_seuhj6tbz().s[1]++,document.getElementById("password").value);// Check if email contains "@" symbol
cov_seuhj6tbz().s[2]++;if(!email.includes("@")){cov_seuhj6tbz().b[0][0]++;cov_seuhj6tbz().s[3]++;alert('Invalid email format! Please include "@" in your email.');cov_seuhj6tbz().s[4]++;return;}else{cov_seuhj6tbz().b[0][1]++;}cov_seuhj6tbz().s[5]++;try{const response=(cov_seuhj6tbz().s[6]++,await fetch("http://localhost:5050/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email,password})}));const data=(cov_seuhj6tbz().s[7]++,await response.json());cov_seuhj6tbz().s[8]++;if(response.ok){cov_seuhj6tbz().b[1][0]++;cov_seuhj6tbz().s[9]++;alert("Login successful!");cov_seuhj6tbz().s[10]++;sessionStorage.setItem("Useremail",document.getElementById("email").value);// Handle successful login, e.g., redirect to home page
cov_seuhj6tbz().s[11]++;window.location.href="home.html";// Redirect to index.html upon successful registration
cov_seuhj6tbz().s[12]++;window.location.href="index.html";}else{cov_seuhj6tbz().b[1][1]++;cov_seuhj6tbz().s[13]++;alert(`Error: ${data.message}`);}}catch(error){cov_seuhj6tbz().s[14]++;console.error("Error:",error.message);}}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3Zfc2V1aGo2dGJ6IiwiYWN0dWFsQ292ZXJhZ2UiLCJsb2dpbiIsImYiLCJlbWFpbCIsInMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidmFsdWUiLCJwYXNzd29yZCIsImluY2x1ZGVzIiwiYiIsImFsZXJ0IiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJqc29uIiwib2siLCJzZXNzaW9uU3RvcmFnZSIsInNldEl0ZW0iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJtZXNzYWdlIiwiZXJyb3IiLCJjb25zb2xlIl0sInNvdXJjZXMiOlsibG9naW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiYXN5bmMgZnVuY3Rpb24gbG9naW4oKSB7XHJcbiAgICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW1haWxcIikudmFsdWU7XHJcbiAgICBjb25zdCBwYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFzc3dvcmRcIikudmFsdWU7XHJcbiAgXHJcbiAgICAvLyBDaGVjayBpZiBlbWFpbCBjb250YWlucyBcIkBcIiBzeW1ib2xcclxuICAgIGlmICghZW1haWwuaW5jbHVkZXMoXCJAXCIpKSB7XHJcbiAgICAgIGFsZXJ0KCdJbnZhbGlkIGVtYWlsIGZvcm1hdCEgUGxlYXNlIGluY2x1ZGUgXCJAXCIgaW4geW91ciBlbWFpbC4nKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIFxyXG4gIFxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6NTA1MC9sb2dpblwiLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgIGVtYWlsLFxyXG4gICAgICAgICAgcGFzc3dvcmQsXHJcbiAgICAgICAgfSksXHJcbiAgICAgIH0pO1xyXG4gIFxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gIFxyXG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICBhbGVydChcIkxvZ2luIHN1Y2Nlc3NmdWwhXCIpO1xyXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJVc2VyZW1haWxcIiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbWFpbFwiKS52YWx1ZSk7XHJcbiAgICAgICAgICAvLyBIYW5kbGUgc3VjY2Vzc2Z1bCBsb2dpbiwgZS5nLiwgcmVkaXJlY3QgdG8gaG9tZSBwYWdlXHJcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiaG9tZS5odG1sXCI7XHJcbiAgICAgICAgLy8gUmVkaXJlY3QgdG8gaW5kZXguaHRtbCB1cG9uIHN1Y2Nlc3NmdWwgcmVnaXN0cmF0aW9uXHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcImluZGV4Lmh0bWxcIjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhbGVydChgRXJyb3I6ICR7ZGF0YS5tZXNzYWdlfWApO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3I6XCIsIGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH0iXSwibWFwcGluZ3MiOiIrcUVBZVk7QUFBQUEsYUFBQSxTQUFBQSxDQUFBLFNBQUFDLGNBQUEsV0FBQUEsY0FBQSxFQUFBRCxhQUFBLEdBZlosY0FBZSxDQUFBRSxLQUFLQSxDQUFBLENBQUcsQ0FBQUYsYUFBQSxHQUFBRyxDQUFBLE1BQ25CLEtBQU0sQ0FBQUMsS0FBSyxFQUFBSixhQUFBLEdBQUFLLENBQUEsTUFBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUNDLEtBQUssRUFDcEQsS0FBTSxDQUFBQyxRQUFRLEVBQUFULGFBQUEsR0FBQUssQ0FBQSxNQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQ0MsS0FBSyxFQUUxRDtBQUFBUixhQUFBLEdBQUFLLENBQUEsTUFDQSxHQUFJLENBQUNELEtBQUssQ0FBQ00sUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFFLENBQUFWLGFBQUEsR0FBQVcsQ0FBQSxTQUFBWCxhQUFBLEdBQUFLLENBQUEsTUFDeEJPLEtBQUssQ0FBQyx5REFBeUQsQ0FBQyxDQUFDWixhQUFBLEdBQUFLLENBQUEsTUFDakUsT0FDRixDQUFDLEtBQUFMLGFBQUEsR0FBQVcsQ0FBQSxVQUFBWCxhQUFBLEdBQUFLLENBQUEsTUFHRCxHQUFJLENBQ0YsS0FBTSxDQUFBUSxRQUFRLEVBQUFiLGFBQUEsR0FBQUssQ0FBQSxNQUFHLEtBQU0sQ0FBQVMsS0FBSyxDQUFDLDZCQUE2QixDQUFFLENBQzFEQyxNQUFNLENBQUUsTUFBTSxDQUNkQyxPQUFPLENBQUUsQ0FDUCxjQUFjLENBQUUsa0JBQ2xCLENBQUMsQ0FDREMsSUFBSSxDQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQyxDQUNuQmYsS0FBSyxDQUNMSyxRQUNGLENBQUMsQ0FDSCxDQUFDLENBQUMsRUFFRixLQUFNLENBQUFXLElBQUksRUFBQXBCLGFBQUEsR0FBQUssQ0FBQSxNQUFHLEtBQU0sQ0FBQVEsUUFBUSxDQUFDUSxJQUFJLENBQUMsQ0FBQyxFQUFDckIsYUFBQSxHQUFBSyxDQUFBLE1BRW5DLEdBQUlRLFFBQVEsQ0FBQ1MsRUFBRSxDQUFFLENBQUF0QixhQUFBLEdBQUFXLENBQUEsU0FBQVgsYUFBQSxHQUFBSyxDQUFBLE1BQ2ZPLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDWixhQUFBLEdBQUFLLENBQUEsT0FDM0JrQixjQUFjLENBQUNDLE9BQU8sQ0FBQyxXQUFXLENBQUVsQixRQUFRLENBQUNDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsS0FBSyxDQUFDLENBQ3pFO0FBQUFSLGFBQUEsR0FBQUssQ0FBQSxPQUNBb0IsTUFBTSxDQUFDQyxRQUFRLENBQUNDLElBQUksQ0FBRyxXQUFXLENBQ3BDO0FBQUEzQixhQUFBLEdBQUFLLENBQUEsT0FDQW9CLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDQyxJQUFJLENBQUcsWUFBWSxDQUNyQyxDQUFDLElBQU0sQ0FBQTNCLGFBQUEsR0FBQVcsQ0FBQSxTQUFBWCxhQUFBLEdBQUFLLENBQUEsT0FDTE8sS0FBSyxDQUFFLFVBQVNRLElBQUksQ0FBQ1EsT0FBUSxFQUFDLENBQUMsQ0FDakMsQ0FDRixDQUFFLE1BQU9DLEtBQUssQ0FBRSxDQUFBN0IsYUFBQSxHQUFBSyxDQUFBLE9BQ2R5QixPQUFPLENBQUNELEtBQUssQ0FBQyxRQUFRLENBQUVBLEtBQUssQ0FBQ0QsT0FBTyxDQUFDLENBQ3hDLENBQ0YifQ==