# Angular_TodoList_MockAPI
json-server https://github.com/typicode/json-server

<ul>
  <li>Install 
    <code>npm install -g json-server</code></li>
</ul> 

<ul>
  <li>Setup Create a db.json which contains sample data for Resources. json-server will create API for those resources</li>
</ul>
<ul>
  <li>Start server</li>
</ul> 
<pre><code>json-server --watch db.json --port 3000</code></pre>
GET - POST - PUT - PATCH - DELETE APIs are created for resources (posts - comments - profile)

Angular Client
<ul>
  <li>Start Angular</li>
</ul>
<pre><code>ng serve -o --port 4200</code></pre>
