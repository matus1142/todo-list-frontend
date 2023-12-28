## How to run project<br />
backend :<br />
1.Clone project to folder<br />
&nbsp;backend   : git clone https://github.com/matus1142/todo-list-backend.git<br />
&nbsp;frontend  : git clone https://github.com/matus1142/todo-list-frontend.git<br />
2.Install library<br />
&nbsp;backend&nbsp;:&nbsp;cd todo-list-backend<br />
&nbsp;&nbsp;&nbsp;run "npm install" in terminal<br />
&nbsp;frontend&nbsp;:&nbsp;cd todo-list-frontend<br />
&nbsp;&nbsp;&nbsp;run "npm install" in terminal<br />
3.Run program<br />
&nbsp;backend&nbsp;:&nbsp;cd todo-list-backend<br />
&nbsp;&nbsp;&nbsp;run "npm run start" in terminal<br />
&nbsp;frontend&nbsp;:&nbsp;cd todo-list-frontend<br />
&nbsp;&nbsp;&nbsp;run "npm run build" in terminal<br />
&nbsp;&nbsp;&nbsp;run "npm run start" in terminal<br />
** Need to run 2 terminal for backend and frontend<br />
<br />
4.Open browser to run webpage :<br />
&nbsp;http://localhost:3000/todo<br />
<br />
FYI<br />
&nbsp;backend endpoint will run on http://localhost:5000/todo<br />
&nbsp;frontend endpoint will run on http://localhost:3000/todo<br />
&nbsp;database path : \todo-list-backend\database\db.json<br />
<br />
structure:<br />
 frontend  ーー＞  backend ーー＞ database<br />
 NextJS    ＜ーー  NestJS ＜ーー  JSON<br />    
<br />
I have used json to store data instead of postgresql or mongoDB<br />
so user can run program without installing any database.<br /> 
