function cov_izt8pzps0(){var path="C:\\Users\\Bryan\\Documents\\GitHub\\CG-Finance-Website\\public\\js\\register.js";var hash="f2d83fe12804e1496b4f9f1c79f2cf6b41082bb4";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"C:\\Users\\Bryan\\Documents\\GitHub\\CG-Finance-Website\\public\\js\\register.js",statementMap:{"0":{start:{line:2,column:18},end:{line:2,column:56}},"1":{start:{line:3,column:21},end:{line:3,column:62}},"2":{start:{line:6,column:4},end:{line:9,column:5}},"3":{start:{line:7,column:6},end:{line:7,column:71}},"4":{start:{line:8,column:6},end:{line:8,column:13}},"5":{start:{line:11,column:4},end:{line:14,column:5}},"6":{start:{line:12,column:6},end:{line:12,column:55}},"7":{start:{line:13,column:6},end:{line:13,column:13}},"8":{start:{line:16,column:4},end:{line:39,column:5}},"9":{start:{line:17,column:23},end:{line:26,column:8}},"10":{start:{line:28,column:19},end:{line:28,column:40}},"11":{start:{line:30,column:6},end:{line:36,column:7}},"12":{start:{line:31,column:8},end:{line:31,column:42}},"13":{start:{line:33,column:8},end:{line:33,column:44}},"14":{start:{line:35,column:8},end:{line:35,column:40}},"15":{start:{line:38,column:6},end:{line:38,column:45}}},fnMap:{"0":{name:"submitForm",decl:{start:{line:1,column:15},end:{line:1,column:25}},loc:{start:{line:1,column:28},end:{line:40,column:3}},line:1}},branchMap:{"0":{loc:{start:{line:6,column:4},end:{line:9,column:5}},type:"if",locations:[{start:{line:6,column:4},end:{line:9,column:5}},{start:{line:6,column:4},end:{line:9,column:5}}],line:6},"1":{loc:{start:{line:11,column:4},end:{line:14,column:5}},type:"if",locations:[{start:{line:11,column:4},end:{line:14,column:5}},{start:{line:11,column:4},end:{line:14,column:5}}],line:11},"2":{loc:{start:{line:30,column:6},end:{line:36,column:7}},type:"if",locations:[{start:{line:30,column:6},end:{line:36,column:7}},{start:{line:30,column:6},end:{line:36,column:7}}],line:30}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0},f:{"0":0},b:{"0":[0,0],"1":[0,0],"2":[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"f2d83fe12804e1496b4f9f1c79f2cf6b41082bb4"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_izt8pzps0=function(){return actualCoverage;};}return actualCoverage;}cov_izt8pzps0();async function submitForm(){cov_izt8pzps0().f[0]++;const email=(cov_izt8pzps0().s[0]++,document.getElementById("email").value);const password=(cov_izt8pzps0().s[1]++,document.getElementById("password").value);// Check if email contains "@" symbol
cov_izt8pzps0().s[2]++;if(!email.includes("@")){cov_izt8pzps0().b[0][0]++;cov_izt8pzps0().s[3]++;alert('Invalid email format! Please include "@" in your email.');cov_izt8pzps0().s[4]++;return;}else{cov_izt8pzps0().b[0][1]++;}cov_izt8pzps0().s[5]++;if(password.length<6){cov_izt8pzps0().b[1][0]++;cov_izt8pzps0().s[6]++;alert("Password must be at least 6 characters!");cov_izt8pzps0().s[7]++;return;}else{cov_izt8pzps0().b[1][1]++;}cov_izt8pzps0().s[8]++;try{const response=(cov_izt8pzps0().s[9]++,await fetch("http://localhost:5050/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email,password})}));const data=(cov_izt8pzps0().s[10]++,await response.json());cov_izt8pzps0().s[11]++;if(response.ok){cov_izt8pzps0().b[2][0]++;cov_izt8pzps0().s[12]++;alert("Registration successful!");// Redirect to index.html upon successful registration
cov_izt8pzps0().s[13]++;window.location.href="index.html";}else{cov_izt8pzps0().b[2][1]++;cov_izt8pzps0().s[14]++;alert(`Error: ${data.message}`);}}catch(error){cov_izt8pzps0().s[15]++;console.error("Error:",error.message);}}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfaXp0OHB6cHMwIiwiYWN0dWFsQ292ZXJhZ2UiLCJzdWJtaXRGb3JtIiwiZiIsImVtYWlsIiwicyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ2YWx1ZSIsInBhc3N3b3JkIiwiaW5jbHVkZXMiLCJiIiwiYWxlcnQiLCJsZW5ndGgiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsImpzb24iLCJvayIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsIm1lc3NhZ2UiLCJlcnJvciIsImNvbnNvbGUiXSwic291cmNlcyI6WyJyZWdpc3Rlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJhc3luYyBmdW5jdGlvbiBzdWJtaXRGb3JtKCkge1xyXG4gICAgY29uc3QgZW1haWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVtYWlsXCIpLnZhbHVlO1xyXG4gICAgY29uc3QgcGFzc3dvcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhc3N3b3JkXCIpLnZhbHVlO1xyXG4gIFxyXG4gICAgLy8gQ2hlY2sgaWYgZW1haWwgY29udGFpbnMgXCJAXCIgc3ltYm9sXHJcbiAgICBpZiAoIWVtYWlsLmluY2x1ZGVzKFwiQFwiKSkge1xyXG4gICAgICBhbGVydCgnSW52YWxpZCBlbWFpbCBmb3JtYXQhIFBsZWFzZSBpbmNsdWRlIFwiQFwiIGluIHlvdXIgZW1haWwuJyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICBcclxuICAgIGlmIChwYXNzd29yZC5sZW5ndGggPCA2KSB7XHJcbiAgICAgIGFsZXJ0KFwiUGFzc3dvcmQgbXVzdCBiZSBhdCBsZWFzdCA2IGNoYXJhY3RlcnMhXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo1MDUwL3JlZ2lzdGVyXCIsIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgZW1haWwsXHJcbiAgICAgICAgICBwYXNzd29yZCxcclxuICAgICAgICB9KSxcclxuICAgICAgfSk7XHJcbiAgXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgXHJcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgIGFsZXJ0KFwiUmVnaXN0cmF0aW9uIHN1Y2Nlc3NmdWwhXCIpO1xyXG4gICAgICAgIC8vIFJlZGlyZWN0IHRvIGluZGV4Lmh0bWwgdXBvbiBzdWNjZXNzZnVsIHJlZ2lzdHJhdGlvblxyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCJpbmRleC5odG1sXCI7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYWxlcnQoYEVycm9yOiAke2RhdGEubWVzc2FnZX1gKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yOlwiLCBlcnJvci5tZXNzYWdlKTtcclxuICAgIH1cclxuICB9Il0sIm1hcHBpbmdzIjoiNnpFQWVZO0FBQUFBLGFBQUEsU0FBQUEsQ0FBQSxTQUFBQyxjQUFBLFdBQUFBLGNBQUEsRUFBQUQsYUFBQSxHQWZaLGNBQWUsQ0FBQUUsVUFBVUEsQ0FBQSxDQUFHLENBQUFGLGFBQUEsR0FBQUcsQ0FBQSxNQUN4QixLQUFNLENBQUFDLEtBQUssRUFBQUosYUFBQSxHQUFBSyxDQUFBLE1BQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDQyxLQUFLLEVBQ3BELEtBQU0sQ0FBQUMsUUFBUSxFQUFBVCxhQUFBLEdBQUFLLENBQUEsTUFBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUNDLEtBQUssRUFFMUQ7QUFBQVIsYUFBQSxHQUFBSyxDQUFBLE1BQ0EsR0FBSSxDQUFDRCxLQUFLLENBQUNNLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBRSxDQUFBVixhQUFBLEdBQUFXLENBQUEsU0FBQVgsYUFBQSxHQUFBSyxDQUFBLE1BQ3hCTyxLQUFLLENBQUMseURBQXlELENBQUMsQ0FBQ1osYUFBQSxHQUFBSyxDQUFBLE1BQ2pFLE9BQ0YsQ0FBQyxLQUFBTCxhQUFBLEdBQUFXLENBQUEsVUFBQVgsYUFBQSxHQUFBSyxDQUFBLE1BRUQsR0FBSUksUUFBUSxDQUFDSSxNQUFNLENBQUcsQ0FBQyxDQUFFLENBQUFiLGFBQUEsR0FBQVcsQ0FBQSxTQUFBWCxhQUFBLEdBQUFLLENBQUEsTUFDdkJPLEtBQUssQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDWixhQUFBLEdBQUFLLENBQUEsTUFDakQsT0FDRixDQUFDLEtBQUFMLGFBQUEsR0FBQVcsQ0FBQSxVQUFBWCxhQUFBLEdBQUFLLENBQUEsTUFFRCxHQUFJLENBQ0YsS0FBTSxDQUFBUyxRQUFRLEVBQUFkLGFBQUEsR0FBQUssQ0FBQSxNQUFHLEtBQU0sQ0FBQVUsS0FBSyxDQUFDLGdDQUFnQyxDQUFFLENBQzdEQyxNQUFNLENBQUUsTUFBTSxDQUNkQyxPQUFPLENBQUUsQ0FDUCxjQUFjLENBQUUsa0JBQ2xCLENBQUMsQ0FDREMsSUFBSSxDQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQyxDQUNuQmhCLEtBQUssQ0FDTEssUUFDRixDQUFDLENBQ0gsQ0FBQyxDQUFDLEVBRUYsS0FBTSxDQUFBWSxJQUFJLEVBQUFyQixhQUFBLEdBQUFLLENBQUEsT0FBRyxLQUFNLENBQUFTLFFBQVEsQ0FBQ1EsSUFBSSxDQUFDLENBQUMsRUFBQ3RCLGFBQUEsR0FBQUssQ0FBQSxPQUVuQyxHQUFJUyxRQUFRLENBQUNTLEVBQUUsQ0FBRSxDQUFBdkIsYUFBQSxHQUFBVyxDQUFBLFNBQUFYLGFBQUEsR0FBQUssQ0FBQSxPQUNmTyxLQUFLLENBQUMsMEJBQTBCLENBQUMsQ0FDakM7QUFBQVosYUFBQSxHQUFBSyxDQUFBLE9BQ0FtQixNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsSUFBSSxDQUFHLFlBQVksQ0FDckMsQ0FBQyxJQUFNLENBQUExQixhQUFBLEdBQUFXLENBQUEsU0FBQVgsYUFBQSxHQUFBSyxDQUFBLE9BQ0xPLEtBQUssQ0FBRSxVQUFTUyxJQUFJLENBQUNNLE9BQVEsRUFBQyxDQUFDLENBQ2pDLENBQ0YsQ0FBRSxNQUFPQyxLQUFLLENBQUUsQ0FBQTVCLGFBQUEsR0FBQUssQ0FBQSxPQUNkd0IsT0FBTyxDQUFDRCxLQUFLLENBQUMsUUFBUSxDQUFFQSxLQUFLLENBQUNELE9BQU8sQ0FBQyxDQUN4QyxDQUNGIn0=