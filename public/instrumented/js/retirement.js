function cov_l1m68z0wp(){var path="C:\\Users\\Justin\\OneDrive - Temasek Polytechnic\\Documents\\CG_Finance_Website\\CG_Finance_Website\\CG-Finance-Website\\public\\js\\retirement.js";var hash="fbd2b407a5c4aaa68c81f68cb8439536b6cce4e7";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"C:\\Users\\Justin\\OneDrive - Temasek Polytechnic\\Documents\\CG_Finance_Website\\CG_Finance_Website\\CG-Finance-Website\\public\\js\\retirement.js",statementMap:{"0":{start:{line:2,column:17},end:{line:2,column:19}},"1":{start:{line:3,column:16},end:{line:3,column:36}},"2":{start:{line:4,column:2},end:{line:4,column:48}},"3":{start:{line:5,column:2},end:{line:5,column:63}},"4":{start:{line:6,column:2},end:{line:46,column:4}},"5":{start:{line:7,column:4},end:{line:7,column:48}},"6":{start:{line:9,column:15},end:{line:9,column:17}},"7":{start:{line:10,column:4},end:{line:44,column:5}},"8":{start:{line:10,column:17},end:{line:10,column:18}},"9":{start:{line:11,column:6},end:{line:43,column:7}},"10":{start:{line:15,column:8},end:{line:42,column:18}},"11":{start:{line:45,column:4},end:{line:45,column:61}},"12":{start:{line:47,column:2},end:{line:47,column:17}},"13":{start:{line:52,column:17},end:{line:52,column:19}},"14":{start:{line:53,column:16},end:{line:53,column:36}},"15":{start:{line:54,column:17},end:{line:54,column:29}},"16":{start:{line:55,column:2},end:{line:55,column:54}},"17":{start:{line:57,column:2},end:{line:57,column:70}},"18":{start:{line:58,column:2},end:{line:58,column:63}},"19":{start:{line:59,column:2},end:{line:64,column:4}},"20":{start:{line:60,column:4},end:{line:60,column:48}},"21":{start:{line:63,column:4},end:{line:63,column:21}},"22":{start:{line:65,column:2},end:{line:65,column:41}}},fnMap:{"0":{name:"viewRetirements",decl:{start:{line:1,column:9},end:{line:1,column:24}},loc:{start:{line:1,column:27},end:{line:48,column:1}},line:1},"1":{name:"(anonymous_1)",decl:{start:{line:6,column:19},end:{line:6,column:20}},loc:{start:{line:6,column:31},end:{line:46,column:3}},line:6},"2":{name:"deleteRetirement",decl:{start:{line:51,column:9},end:{line:51,column:25}},loc:{start:{line:51,column:30},end:{line:66,column:1}},line:51},"3":{name:"(anonymous_3)",decl:{start:{line:59,column:19},end:{line:59,column:20}},loc:{start:{line:59,column:31},end:{line:64,column:3}},line:59}},branchMap:{"0":{loc:{start:{line:11,column:6},end:{line:43,column:7}},type:"if",locations:[{start:{line:11,column:6},end:{line:43,column:7}},{start:{line:11,column:6},end:{line:43,column:7}}],line:11}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0},f:{"0":0,"1":0,"2":0,"3":0},b:{"0":[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"fbd2b407a5c4aaa68c81f68cb8439536b6cce4e7"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_l1m68z0wp=function(){return actualCoverage;};}return actualCoverage;}cov_l1m68z0wp();function viewRetirements(){cov_l1m68z0wp().f[0]++;var response=(cov_l1m68z0wp().s[0]++,"");var request=(cov_l1m68z0wp().s[1]++,new XMLHttpRequest());cov_l1m68z0wp().s[2]++;request.open("GET","/view-retirement",true);cov_l1m68z0wp().s[3]++;request.setRequestHeader("Content-Type","application/json");cov_l1m68z0wp().s[4]++;request.onload=function(){cov_l1m68z0wp().f[1]++;cov_l1m68z0wp().s[5]++;response=JSON.parse(request.responseText);var html=(cov_l1m68z0wp().s[6]++,"");cov_l1m68z0wp().s[7]++;for(var i=(cov_l1m68z0wp().s[8]++,0);i<response.length;i++){cov_l1m68z0wp().s[9]++;if(response[i].user.toString()==sessionStorage.getItem("Useremail").toString()){cov_l1m68z0wp().b[0][0]++;cov_l1m68z0wp().s[10]++;html+="<tr>"+"<td>"+response[i].title+"</td>"+"<td>"+response[i].current_age+"</td>"+"<td>"+response[i].retirement_age+"</td>"+"<td>"+response[i].fund_goal+"</td>"+"<td>"+response[i].annual_saving_goal+"</td>"+"<td>"+response[i].user+"</td>"+"<td><a id='edit_retirement' href='edit_retirement.html?retirement_id="+response[i].id+"' style='margin-right: 15px; color: inherit; text-decoration: none;' class='fa-regular fa-pen-to-square'></a> <a id='delete_icon' onclick='deleteRetirement("+response[i].id+")' style='text-decoration: none; color: inherit;' retirement_id="+response[i].id+" class='fa-regular fa-trash-can'></a></td>"+"</tr>";}else{cov_l1m68z0wp().b[0][1]++;}}cov_l1m68z0wp().s[11]++;document.getElementById("tableContent").innerHTML=html;};cov_l1m68z0wp().s[12]++;request.send();}// Function to handle deletion
function deleteRetirement(id){cov_l1m68z0wp().f[2]++;var response=(cov_l1m68z0wp().s[13]++,"");var request=(cov_l1m68z0wp().s[14]++,new XMLHttpRequest());var jsonData=(cov_l1m68z0wp().s[15]++,new Object());cov_l1m68z0wp().s[16]++;jsonData.user=sessionStorage.getItem("Useremail");cov_l1m68z0wp().s[17]++;request.open("DELETE","/delete-retirement/"+id.toString(),true);cov_l1m68z0wp().s[18]++;request.setRequestHeader("Content-Type","application/json");cov_l1m68z0wp().s[19]++;request.onload=function(){cov_l1m68z0wp().f[3]++;cov_l1m68z0wp().s[20]++;response=JSON.parse(request.responseText);// Add your logic for deleting retirement using the retirementId
cov_l1m68z0wp().s[21]++;viewRetirements();};cov_l1m68z0wp().s[22]++;request.send(JSON.stringify(jsonData));}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfbDFtNjh6MHdwIiwiYWN0dWFsQ292ZXJhZ2UiLCJ2aWV3UmV0aXJlbWVudHMiLCJmIiwicmVzcG9uc2UiLCJzIiwicmVxdWVzdCIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsInNldFJlcXVlc3RIZWFkZXIiLCJvbmxvYWQiLCJKU09OIiwicGFyc2UiLCJyZXNwb25zZVRleHQiLCJodG1sIiwiaSIsImxlbmd0aCIsInVzZXIiLCJ0b1N0cmluZyIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsImIiLCJ0aXRsZSIsImN1cnJlbnRfYWdlIiwicmV0aXJlbWVudF9hZ2UiLCJmdW5kX2dvYWwiLCJhbm51YWxfc2F2aW5nX2dvYWwiLCJpZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiLCJzZW5kIiwiZGVsZXRlUmV0aXJlbWVudCIsImpzb25EYXRhIiwiT2JqZWN0Iiwic3RyaW5naWZ5Il0sInNvdXJjZXMiOlsicmV0aXJlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiB2aWV3UmV0aXJlbWVudHMoKSB7XHJcbiAgdmFyIHJlc3BvbnNlID0gXCJcIjtcclxuICB2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gIHJlcXVlc3Qub3BlbihcIkdFVFwiLCBcIi92aWV3LXJldGlyZW1lbnRcIiwgdHJ1ZSk7XHJcbiAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuICByZXF1ZXN0Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJlc3BvbnNlID0gSlNPTi5wYXJzZShyZXF1ZXN0LnJlc3BvbnNlVGV4dCk7XHJcblxyXG4gICAgdmFyIGh0bWwgPSBcIlwiO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXNwb25zZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgcmVzcG9uc2VbaV0udXNlci50b1N0cmluZygpID09XHJcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcIlVzZXJlbWFpbFwiKS50b1N0cmluZygpXHJcbiAgICAgICkge1xyXG4gICAgICAgIGh0bWwgKz1cclxuICAgICAgICAgIFwiPHRyPlwiICtcclxuICAgICAgICAgIFwiPHRkPlwiICtcclxuICAgICAgICAgIHJlc3BvbnNlW2ldLnRpdGxlICtcclxuICAgICAgICAgIFwiPC90ZD5cIiArXHJcbiAgICAgICAgICBcIjx0ZD5cIiArXHJcbiAgICAgICAgICByZXNwb25zZVtpXS5jdXJyZW50X2FnZSArXHJcbiAgICAgICAgICBcIjwvdGQ+XCIgK1xyXG4gICAgICAgICAgXCI8dGQ+XCIgK1xyXG4gICAgICAgICAgcmVzcG9uc2VbaV0ucmV0aXJlbWVudF9hZ2UgK1xyXG4gICAgICAgICAgXCI8L3RkPlwiICtcclxuICAgICAgICAgIFwiPHRkPlwiICtcclxuICAgICAgICAgIHJlc3BvbnNlW2ldLmZ1bmRfZ29hbCArXHJcbiAgICAgICAgICBcIjwvdGQ+XCIgK1xyXG4gICAgICAgICAgXCI8dGQ+XCIgK1xyXG4gICAgICAgICAgcmVzcG9uc2VbaV0uYW5udWFsX3NhdmluZ19nb2FsICtcclxuICAgICAgICAgIFwiPC90ZD5cIiArXHJcbiAgICAgICAgICBcIjx0ZD5cIiArXHJcbiAgICAgICAgICByZXNwb25zZVtpXS51c2VyICtcclxuICAgICAgICAgIFwiPC90ZD5cIiArXHJcbiAgICAgICAgICBcIjx0ZD48YSBpZD0nZWRpdF9yZXRpcmVtZW50JyBocmVmPSdlZGl0X3JldGlyZW1lbnQuaHRtbD9yZXRpcmVtZW50X2lkPVwiICtcclxuICAgICAgICAgIHJlc3BvbnNlW2ldLmlkICtcclxuICAgICAgICAgIFwiJyBzdHlsZT0nbWFyZ2luLXJpZ2h0OiAxNXB4OyBjb2xvcjogaW5oZXJpdDsgdGV4dC1kZWNvcmF0aW9uOiBub25lOycgY2xhc3M9J2ZhLXJlZ3VsYXIgZmEtcGVuLXRvLXNxdWFyZSc+PC9hPiA8YSBpZD0nZGVsZXRlX2ljb24nIG9uY2xpY2s9J2RlbGV0ZVJldGlyZW1lbnQoXCIgK1xyXG4gICAgICAgICAgcmVzcG9uc2VbaV0uaWQgK1xyXG4gICAgICAgICAgXCIpJyBzdHlsZT0ndGV4dC1kZWNvcmF0aW9uOiBub25lOyBjb2xvcjogaW5oZXJpdDsnIHJldGlyZW1lbnRfaWQ9XCIgK1xyXG4gICAgICAgICAgcmVzcG9uc2VbaV0uaWQgK1xyXG4gICAgICAgICAgXCIgY2xhc3M9J2ZhLXJlZ3VsYXIgZmEtdHJhc2gtY2FuJz48L2E+PC90ZD5cIiArXHJcbiAgICAgICAgICBcIjwvdHI+XCI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFibGVDb250ZW50XCIpLmlubmVySFRNTCA9IGh0bWw7XHJcbiAgfTtcclxuICByZXF1ZXN0LnNlbmQoKTtcclxufVxyXG5cclxuLy8gRnVuY3Rpb24gdG8gaGFuZGxlIGRlbGV0aW9uXHJcbmZ1bmN0aW9uIGRlbGV0ZVJldGlyZW1lbnQoaWQpIHtcclxuICB2YXIgcmVzcG9uc2UgPSBcIlwiO1xyXG4gIHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgdmFyIGpzb25EYXRhID0gbmV3IE9iamVjdCgpO1xyXG4gIGpzb25EYXRhLnVzZXIgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiVXNlcmVtYWlsXCIpO1xyXG5cclxuICByZXF1ZXN0Lm9wZW4oXCJERUxFVEVcIiwgXCIvZGVsZXRlLXJldGlyZW1lbnQvXCIgKyBpZC50b1N0cmluZygpLCB0cnVlKTtcclxuICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG4gIHJlcXVlc3Qub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmVzcG9uc2UgPSBKU09OLnBhcnNlKHJlcXVlc3QucmVzcG9uc2VUZXh0KTtcclxuICAgIC8vIEFkZCB5b3VyIGxvZ2ljIGZvciBkZWxldGluZyByZXRpcmVtZW50IHVzaW5nIHRoZSByZXRpcmVtZW50SWRcclxuXHJcbiAgICB2aWV3UmV0aXJlbWVudHMoKVxyXG4gIH07XHJcbiAgcmVxdWVzdC5zZW5kKEpTT04uc3RyaW5naWZ5KGpzb25EYXRhKSk7XHJcbn1cclxuIl0sIm1hcHBpbmdzIjoiaThGQWVZO0FBQUFBLGFBQUEsU0FBQUEsQ0FBQSxTQUFBQyxjQUFBLFdBQUFBLGNBQUEsRUFBQUQsYUFBQSxHQWZaLFFBQVMsQ0FBQUUsZUFBZUEsQ0FBQSxDQUFHLENBQUFGLGFBQUEsR0FBQUcsQ0FBQSxNQUN6QixHQUFJLENBQUFDLFFBQVEsRUFBQUosYUFBQSxHQUFBSyxDQUFBLE1BQUcsRUFBRSxFQUNqQixHQUFJLENBQUFDLE9BQU8sRUFBQU4sYUFBQSxHQUFBSyxDQUFBLE1BQUcsR0FBSSxDQUFBRSxjQUFjLENBQUMsQ0FBQyxFQUFDUCxhQUFBLEdBQUFLLENBQUEsTUFDbkNDLE9BQU8sQ0FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBRSxrQkFBa0IsQ0FBRSxJQUFJLENBQUMsQ0FBQ1IsYUFBQSxHQUFBSyxDQUFBLE1BQzlDQyxPQUFPLENBQUNHLGdCQUFnQixDQUFDLGNBQWMsQ0FBRSxrQkFBa0IsQ0FBQyxDQUFDVCxhQUFBLEdBQUFLLENBQUEsTUFDN0RDLE9BQU8sQ0FBQ0ksTUFBTSxDQUFHLFVBQVksQ0FBQVYsYUFBQSxHQUFBRyxDQUFBLE1BQUFILGFBQUEsR0FBQUssQ0FBQSxNQUMzQkQsUUFBUSxDQUFHTyxJQUFJLENBQUNDLEtBQUssQ0FBQ04sT0FBTyxDQUFDTyxZQUFZLENBQUMsQ0FFM0MsR0FBSSxDQUFBQyxJQUFJLEVBQUFkLGFBQUEsR0FBQUssQ0FBQSxNQUFHLEVBQUUsRUFBQ0wsYUFBQSxHQUFBSyxDQUFBLE1BQ2QsSUFBSyxHQUFJLENBQUFVLENBQUMsRUFBQWYsYUFBQSxHQUFBSyxDQUFBLE1BQUcsQ0FBQyxFQUFFVSxDQUFDLENBQUdYLFFBQVEsQ0FBQ1ksTUFBTSxDQUFFRCxDQUFDLEVB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